export function RalewayFont() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 to-blue-50 p-8">
      <div className="w-full max-w-5xl">
        <div className="bg-white rounded-3xl shadow-2xl p-12 mb-8">
          <h1 className="text-7xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
            Raleway
          </h1>
          <p className="text-2xl text-gray-600 mb-12" style={{ fontFamily: 'Raleway, sans-serif' }}>
            Elegant & Versatile Sans Serif
          </p>
          
          <div className="grid grid-cols-2 gap-8">
            <div style={{ fontFamily: 'Raleway, sans-serif' }}>
              <h3 className="text-2xl font-bold mb-6">Weight Spectrum</h3>
              <div className="space-y-4">
                <p className="text-2xl" style={{ fontWeight: 100 }}>Thin 100</p>
                <p className="text-2xl" style={{ fontWeight: 300 }}>Light 300</p>
                <p className="text-2xl" style={{ fontWeight: 400 }}>Regular 400</p>
                <p className="text-2xl" style={{ fontWeight: 500 }}>Medium 500</p>
                <p className="text-2xl" style={{ fontWeight: 600 }}>Semi Bold 600</p>
                <p className="text-2xl" style={{ fontWeight: 700 }}>Bold 700</p>
                <p className="text-2xl" style={{ fontWeight: 900 }}>Black 900</p>
              </div>
            </div>
            
            <div style={{ fontFamily: 'Raleway, sans-serif' }}>
              <h3 className="text-2xl font-bold mb-6">Character Set</h3>
              <p className="text-xl mb-4">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p className="text-xl mb-4">abcdefghijklmnopqrstuvwxyz</p>
              <p className="text-xl mb-4">0123456789</p>
              <p className="text-xl">!@#$%^&*()_+-=[]{}|;:'",.&lt;&gt;?/</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white" style={{ fontFamily: 'Raleway, sans-serif' }}>
            <h3 className="text-3xl font-bold mb-4">Modern</h3>
            <p className="text-lg">Clean lines and contemporary style</p>
          </div>
          
          <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl p-8 text-white" style={{ fontFamily: 'Raleway, sans-serif' }}>
            <h3 className="text-3xl font-bold mb-4">Readable</h3>
            <p className="text-lg">Excellent legibility at all sizes</p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 text-white" style={{ fontFamily: 'Raleway, sans-serif' }}>
            <h3 className="text-3xl font-bold mb-4">Flexible</h3>
            <p className="text-lg">Perfect for web and print</p>
          </div>
        </div>
      </div>
    </div>
  );
}
