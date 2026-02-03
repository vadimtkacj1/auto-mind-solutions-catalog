export function Palette6() {
  const palettes = [
    {
      name: "Sunset Dream",
      colors: ["#FF6B6B", "#FFA07A", "#FFD93D", "#F9B9F2", "#C8A2C8"]
    },
    {
      name: "Ocean Breeze",
      colors: ["#006BA6", "#0496FF", "#00D4FF", "#98E4FF", "#D0F4FF"]
    },
    {
      name: "Forest Fresh",
      colors: ["#1B4D3E", "#2E8B57", "#3CB371", "#90EE90", "#C1FFC1"]
    },
    {
      name: "Royal Purple",
      colors: ["#2C003E", "#512B58", "#7A5980", "#B794B6", "#E8D5E8"]
    }
  ];

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white p-8">
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">אוסף פלטות צבעים</h2>
        
        <div className="space-y-8">
          {palettes.map((palette, pIndex) => (
            <div key={pIndex} className="bg-gray-50 rounded-2xl p-8 shadow-lg group cursor-pointer">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors duration-300">{palette.name}</h3>
              <div className="flex gap-4">
                {palette.colors.map((color, cIndex) => (
                  <div key={cIndex} className="flex-1">
                    <div
                      className="w-full h-40 rounded-xl shadow-lg"
                      style={{ backgroundColor: color }}
                    />
                    <p className="text-center mt-3 font-mono text-sm text-gray-700 font-semibold opacity-100 group-hover:opacity-100 transition-opacity duration-300">
                      {color}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
