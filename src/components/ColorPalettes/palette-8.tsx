export function Palette8() {
  const palette = {
    name: "Modern Minimal",
    description: "פלטה נקייה למיניממליסטים",
    colors: [
      { hex: "#000000", name: "Pure Black", rgb: "rgb(0, 0, 0)" },
      { hex: "#333333", name: "Charcoal", rgb: "rgb(51, 51, 51)" },
      { hex: "#888888", name: "Gray", rgb: "rgb(136, 136, 136)" },
      { hex: "#CCCCCC", name: "Silver", rgb: "rgb(204, 204, 204)" },
      { hex: "#FFFFFF", name: "Pure White", rgb: "rgb(255, 255, 255)" }
    ]
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 p-8">
      <div className="w-full max-w-5xl">
        <div className="bg-white rounded-3xl shadow-2xl p-12">
          <div className="mb-8">
            <h2 className="text-5xl font-bold text-gray-900 mb-2">{palette.name}</h2>
            <p className="text-xl text-gray-600">{palette.description}</p>
          </div>

          <div className="space-y-4">
            {palette.colors.map((color, index) => (
              <div
                key={index}
                className="group flex items-center gap-6 p-6 rounded-2xl transition-all duration-300 border-2 border-gray-200 cursor-pointer"
              >
                <div
                  className="w-32 h-32 rounded-xl shadow-lg"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{color.name}</h3>
                  <div className="flex gap-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">HEX</p>
                      <p className="font-mono text-lg font-semibold text-gray-900">{color.hex}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">RGB</p>
                      <p className="font-mono text-lg font-semibold text-gray-900">{color.rgb}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
