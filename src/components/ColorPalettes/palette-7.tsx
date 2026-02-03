export function Palette7() {
  const gradients = [
    {
      name: "Cosmic Fusion",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      name: "Fire & Ice",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      name: "Emerald Water",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      name: "Sunset Glow",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
      name: "Aurora Borealis",
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    },
    {
      name: "Deep Ocean",
      gradient: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)"
    }
  ];

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-900 p-8">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-white mb-4">גרדיאנטים מדהימים</h2>
          <p className="text-xl text-gray-400">מעברי צבע חלקים ומרהיבים</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gradients.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
              style={{ height: '300px' }}
            >
              <div
                className="w-full h-full"
                style={{ background: item.gradient }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-6 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-2">{item.name}</h3>
                <p className="text-sm font-mono text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden text-ellipsis">
                  {item.gradient}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
