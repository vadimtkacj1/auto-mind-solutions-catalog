import { useEffect, useRef, useState } from 'react'

export default function Hero4() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null
    if (!gl) {
      console.error('WebGL not supported')
      return
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      gl.viewport(0, 0, canvas.width, canvas.height)
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const vertexShaderSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `

    const fragmentShaderSource = `
      precision highp float;
      uniform float uTime;
      uniform vec2 uResolution;
      uniform vec2 uMouse;

      #define PI 3.14159265359
      #define TAU 6.28318530718
      #define MAX_STEPS 80
      #define MAX_DIST 50.0
      #define SURF_DIST 0.001

      float hash(float n) {
        return fract(sin(n) * 43758.5453123);
      }

      mat2 rot(float a) {
        float s = sin(a);
        float c = cos(a);
        return mat2(c, -s, s, c);
      }

      float sdOctahedron(vec3 p, float s) {
        p = abs(p);
        float m = p.x + p.y + p.z - s;
        vec3 q;
        if(3.0 * p.x < m) q = p.xyz;
        else if(3.0 * p.y < m) q = p.yzx;
        else if(3.0 * p.z < m) q = p.zxy;
        else return m * 0.57735027;

        float k = clamp(0.5 * (q.z - q.y + s), 0.0, s);
        return length(vec3(q.x, q.y - s + k, q.z - k));
      }

      float sdBox(vec3 p, vec3 b) {
        vec3 q = abs(p) - b;
        return length(max(q, 0.0)) + min(max(q.x, max(q.y, q.z)), 0.0);
      }

      float sdTriPrism(vec3 p, vec2 h) {
        vec3 q = abs(p);
        return max(q.z - h.y, max(q.x * 0.866025 + p.y * 0.5, -p.y) - h.x * 0.5);
      }

      float smin(float a, float b, float k) {
        float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
        return mix(b, a, h) - k * h * (1.0 - h);
      }

      float smax(float a, float b, float k) {
        return -smin(-a, -b, k);
      }

      float map(vec3 p) {
        vec2 m = (uMouse - 0.5) * 2.5;
        p.xy += m * 0.4;

        p.xz *= rot(uTime * 0.1);
        p.xy *= rot(uTime * 0.07);

        float d = 100.0;
        vec3 p1 = p;
        p1.yz *= rot(uTime * 0.13);

        float core_distort = sin(p1.x * 2.5 + uTime) * sin(p1.y * 2.5 + uTime) * sin(p1.z * 2.5 + uTime) * 0.12;
        float core = sdBox(p1, vec3(1.5)) + core_distort;

        vec3 p2 = p1;
        p2.xz *= rot(PI * 0.25 + uTime * 0.18);
        float prism = sdTriPrism(p2, vec2(1.3, 2.2));
        core = smax(core, -prism, 0.25);

        d = core;

        float k_blend = 0.25 + 0.15 * (0.5 + 0.5 * sin(uTime * 1.3));

        for(int i = 0; i < 5; i++) {
          float fi = float(i);
          float angle = fi * TAU / 5.0 + uTime * 0.25;
          float radius = 3.2 + 0.4 * sin(uTime * 0.35 + fi);

          vec3 pos = vec3(
            cos(angle) * radius,
            sin(angle * 0.6) * 1.2,
            sin(angle) * radius
          );

          vec3 po = p - pos;
          po.xz *= rot(uTime * 0.4 + fi);

          float sat_distort = sin(po.x * 4.0 + fi) * sin(po.y * 4.0 + fi) * sin(po.z * 4.0 + fi) * 0.06;
          float satellite = sdBox(po, vec3(0.35)) + sat_distort;

          d = smin(d, satellite, k_blend);
        }

        return d;
      }

      vec3 getNormal(vec3 p) {
        vec2 e = vec2(0.001, 0.0);
        return normalize(vec3(
          map(p + e.xyy) - map(p - e.xyy),
          map(p + e.yxy) - map(p - e.yxy),
          map(p + e.yyx) - map(p - e.yyx)
        ));
      }

      float raymarch(vec3 ro, vec3 rd) {
        float t = 0.0;
        for(int i = 0; i < MAX_STEPS; i++) {
          vec3 p = ro + rd * t;
          float d = map(p);
          if(abs(d) < SURF_DIST || t > MAX_DIST) break;
          t += d * 0.7;
        }
        return t;
      }

      vec3 getBackground(vec3 rd) {
        float stars = 0.0;
        vec3 p = rd * 100.0;
        float h = hash(dot(p, vec3(12.9898, 78.233, 54.53)));
        if(h > 0.98) stars = pow(h - 0.98, 10.0) * 20.0;

        vec3 nebula = vec3(0.0);
        nebula += vec3(0.5, 0.25, 0.15) * pow(max(0.0, sin(rd.x * 2.0 + uTime * 0.1)), 3.0) * 0.25;
        nebula += vec3(0.6, 0.3, 0.15) * pow(max(0.0, sin(rd.y * 2.5 + uTime * 0.05)), 3.0) * 0.25;

        return stars + nebula;
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution) / min(uResolution.x, uResolution.y);

        vec2 m = (uMouse - 0.5) * 0.5;
        vec3 ro = vec3(m.x * 2.0, m.y * 2.0, 5.5);
        vec3 rd = normalize(vec3(uv, -1.0));

        rd.xy *= rot(m.x * 0.2);
        rd.yz *= rot(m.y * 0.2);

        float t = raymarch(ro, rd);
        vec3 color = vec3(0.0);

        if(t < MAX_DIST) {
          vec3 p = ro + rd * t;
          vec3 normal = getNormal(p);
          vec3 viewDir = normalize(ro - p);

          float fresnel = pow(1.0 - max(dot(viewDir, normal), 0.0), 3.0);
          float ior = 1.5;
          vec3 refractDir = refract(rd, normal, 1.0 / ior);

          if(length(refractDir) > 0.0) {
            float t2 = raymarch(p - normal * 0.01, refractDir);

            if(t2 < MAX_DIST) {
              vec3 p2 = p - normal * 0.01 + refractDir * t2;
              vec3 normal2 = getNormal(p2);

              vec3 r = refract(refractDir, -normal2, ior - 0.2);
              vec3 g = refract(refractDir, -normal2, ior);
              vec3 b = refract(refractDir, -normal2, ior + 0.2);

              vec3 bgR = getBackground(r) * vec3(1.6, 1.0, 0.7);
              vec3 bgG = getBackground(g) * vec3(1.4, 1.2, 0.7);
              vec3 bgB = getBackground(b) * vec3(1.0, 1.0, 1.2);

              color = vec3(bgR.x, bgG.y, bgB.z);
              color = pow(color, vec3(0.7)) * 5.0;
            } else {
              color = getBackground(refractDir) * 2.0;
            }
          }

          vec3 lightDir = normalize(vec3(1.0, 1.0, -1.0));
          vec3 halfDir = normalize(lightDir + viewDir);
          float spec = pow(max(dot(normal, halfDir), 0.0), 150.0);
          color += spec * vec3(1.0, 0.9, 0.8) * 3.5;

          vec3 fresnelColor = vec3(
            0.6 + 0.4 * sin(fresnel * TAU + uTime),
            0.4 + 0.4 * sin(fresnel * TAU + uTime + TAU / 3.0),
            0.3 + 0.3 * sin(fresnel * TAU + uTime + TAU * 2.0 / 3.0)
          );
          color += fresnel * fresnelColor * 1.3;

          float edge = pow(1.0 - abs(dot(viewDir, normal)), 4.0);
          color += edge * vec3(1.0, 0.6, 0.4) * 0.8;

          float sss = pow(max(dot(-normal, lightDir), 0.0), 2.0);
          color += sss * vec3(1.0, 0.6, 0.3) * 0.6;
        } else {
          color = getBackground(rd);
        }

        float vignette = 1.0 - length(uv) * 0.4;
        vignette = smoothstep(0.3, 1.0, vignette);
        color *= vignette;

        color *= vec3(1.02, 0.98, 0.96);
        color = pow(color, vec3(0.88));
        color *= 1.12;

        gl_FragColor = vec4(color, 1.0);
      }
    `

    const createShader = (type: number, source: string) => {
      const shader = gl.createShader(type)
      if (!shader) return null
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(shader))
        gl.deleteShader(shader)
        return null
      }
      return shader
    }

    const createProgram = (vertexShader: WebGLShader, fragmentShader: WebGLShader) => {
      const program = gl.createProgram()
      if (!program) return null
      gl.attachShader(program, vertexShader)
      gl.attachShader(program, fragmentShader)
      gl.linkProgram(program)
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('Program link error:', gl.getProgramInfoLog(program))
        gl.deleteProgram(program)
        return null
      }
      return program
    }

    const vertexShader = createShader(gl.VERTEX_SHADER, vertexShaderSource)
    const fragmentShader = createShader(gl.FRAGMENT_SHADER, fragmentShaderSource)
    if (!vertexShader || !fragmentShader) return

    const program = createProgram(vertexShader, fragmentShader)
    if (!program) return

    const uTime = gl.getUniformLocation(program, 'uTime')
    const uResolution = gl.getUniformLocation(program, 'uResolution')
    const uMouse = gl.getUniformLocation(program, 'uMouse')

    const positions = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1])
    const positionBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW)

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX / canvas.width
      mouseRef.current.targetY = 1.0 - e.clientY / canvas.height
    }
    canvas.addEventListener('mousemove', handleMouseMove)

    const startTime = Date.now()
    let animationId: number

    const render = () => {
      const currentTime = (Date.now() - startTime) * 0.001
      const mouse = mouseRef.current

      mouse.x += (mouse.targetX - mouse.x) * 0.05
      mouse.y += (mouse.targetY - mouse.y) * 0.05

      gl.clearColor(0.0, 0.0, 0.0, 1.0)
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.useProgram(program)

      gl.uniform1f(uTime, currentTime)
      gl.uniform2f(uResolution, canvas.width, canvas.height)
      gl.uniform2f(uMouse, mouse.x, mouse.y)

      const positionLocation = gl.getAttribLocation(program, 'position')
      gl.enableVertexAttribArray(positionLocation)
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)

      animationId = requestAnimationFrame(render)
    }
    render()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      canvas.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section className="relative overflow-hidden h-screen bg-black">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center pointer-events-none px-4">
          <h1 className="text-[clamp(4.5rem,13vw,11rem)] font-black mb-2 tracking-tighter leading-none bg-gradient-to-br from-white via-amber-100 to-white bg-clip-text text-transparent animate-pulse-glow"
              style={{
                filter: 'drop-shadow(0 0 40px rgba(255, 255, 255, 0.4)) drop-shadow(0 0 80px rgba(249, 115, 22, 0.3))',
                animation: 'glowPulse 3s ease-in-out infinite alternate'
              }}>
            אמבר
          </h1>
          <p className="text-[clamp(0.9rem,2vw,1.2rem)] font-light text-white/90 tracking-[0.3em] uppercase mb-10"
             style={{ textShadow: '0 0 30px rgba(255, 255, 255, 0.5), 0 0 60px rgba(249, 115, 22, 0.3)' }}>
            כוח של יצירתיות
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pointer-events-auto">
            <GlassButton>התחל בחינם</GlassButton>
            <GlassButton>קבע הדגמה</GlassButton>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes glowPulse {
          from {
            filter: drop-shadow(0 0 40px rgba(255, 255, 255, 0.4)) drop-shadow(0 0 80px rgba(249, 115, 22, 0.3));
          }
          to {
            filter: drop-shadow(0 0 60px rgba(255, 255, 255, 0.6)) drop-shadow(0 0 120px rgba(234, 88, 12, 0.4));
          }
        }
      `}</style>
    </section>
  )
}

function GlassButton({ children }: { children: React.ReactNode }) {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })

  return (
    <button
      className="relative px-10 py-4 text-base font-semibold tracking-wider text-white rounded-full overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:-translate-y-1"
      style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
        backdropFilter: 'blur(30px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(255, 255, 255, 0.05)',
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        })
      }}
    >
      {/* Animated border */}
      <span
        className="absolute inset-0 rounded-full opacity-60"
        style={{
          padding: '1.5px',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(249, 115, 22, 0.4) 25%, rgba(234, 88, 12, 0.4) 50%, rgba(249, 115, 22, 0.4) 75%, rgba(255, 255, 255, 0.4) 100%)',
          backgroundSize: '200% 200%',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          animation: 'borderFlow 3s linear infinite',
        }}
      />

      {/* Hover glow effect */}
      <span
        className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)`,
        }}
      />

      {/* Shimmer effect */}
      <span
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.1) 45%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0.1) 55%, transparent 100%)',
          transform: 'translateX(-100%) rotate(30deg)',
          animation: 'shimmer 3s infinite',
        }}
      />

      <span className="relative z-10">{children}</span>

      <style>{`
        @keyframes borderFlow {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%) rotate(30deg); }
          100% { transform: translateX(100%) rotate(30deg); }
        }
      `}</style>
    </button>
  )
}
