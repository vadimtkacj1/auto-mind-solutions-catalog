export function MontserratFont() {
  const weights = [
    { weight: 100, name: 'Thin' },
    { weight: 300, name: 'Light' },
    { weight: 400, name: 'Regular' },
    { weight: 500, name: 'Medium' },
    { weight: 600, name: 'Semi Bold' },
    { weight: 700, name: 'Bold' },
    { weight: 800, name: 'Extra Bold' },
    { weight: 900, name: 'Black' }
  ];

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 p-8">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl p-12">
        <div className="text-center mb-12">
          <h1 className="text-7xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Montserrat
          </h1>
          <p className="text-2xl text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Urban Geometric Sans Serif
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-6 mb-12">
          {weights.map((item) => (
            <div key={item.weight} className="p-6 bg-gray-50 rounded-xl">
              <p className="text-sm text-gray-500 mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {item.name} {item.weight}
              </p>
              <p 
                className="text-3xl" 
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: item.weight }}
              >
                Modern Typography
              </p>
            </div>
          ))}
        </div>
        
        <div className="p-8 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          <h2 className="text-4xl font-bold mb-6">Design Philosophy</h2>
          <p className="text-xl leading-relaxed text-gray-800 mb-4">
            Montserrat was inspired by the old posters and signs in the traditional Montserrat 
            neighborhood of Buenos Aires. The project was originally created for use in headlines 
            and large sizes.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="text-center p-4 bg-white rounded-lg">
              <p className="text-4xl font-bold text-purple-600 mb-2">16</p>
              <p className="text-sm text-gray-600">Weight Options</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <p className="text-4xl font-bold text-purple-600 mb-2">800+</p>
              <p className="text-sm text-gray-600">Characters</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <p className="text-4xl font-bold text-purple-600 mb-2">100%</p>
              <p className="text-sm text-gray-600">Free & Open</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
