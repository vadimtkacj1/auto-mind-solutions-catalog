export function OpenSansFont() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-teal-50 p-8">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl p-12">
        <div className="mb-12">
          <h1 className="text-6xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Open Sans
          </h1>
          <p className="text-xl text-gray-600">A humanist sans serif typeface</p>
        </div>
        
        <div className="grid grid-cols-2 gap-8 mb-12" style={{ fontFamily: 'Open Sans, sans-serif' }}>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Alphabet</h3>
            <p className="text-3xl mb-2">ABCDEFGHIJKLM</p>
            <p className="text-3xl mb-2">NOPQRSTUVWXYZ</p>
            <p className="text-3xl mb-2">abcdefghijklm</p>
            <p className="text-3xl">nopqrstuvwxyz</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Numbers & Symbols</h3>
            <p className="text-3xl mb-2">0123456789</p>
            <p className="text-3xl mb-2">!@#$%^&*()</p>
            <p className="text-3xl">.,;:'"?/-+=</p>
          </div>
        </div>
        
        <div className="space-y-6" style={{ fontFamily: 'Open Sans, sans-serif' }}>
          <div>
            <p className="text-sm text-gray-500 mb-2">Light 300</p>
            <p className="text-3xl" style={{ fontWeight: 300 }}>
              The quick brown fox jumps over the lazy dog
            </p>
          </div>
          
          <div>
            <p className="text-sm text-gray-500 mb-2">Regular 400</p>
            <p className="text-3xl" style={{ fontWeight: 400 }}>
              The quick brown fox jumps over the lazy dog
            </p>
          </div>
          
          <div>
            <p className="text-sm text-gray-500 mb-2">Semi Bold 600</p>
            <p className="text-3xl" style={{ fontWeight: 600 }}>
              The quick brown fox jumps over the lazy dog
            </p>
          </div>
          
          <div>
            <p className="text-sm text-gray-500 mb-2">Bold 700</p>
            <p className="text-3xl" style={{ fontWeight: 700 }}>
              The quick brown fox jumps over the lazy dog
            </p>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl" style={{ fontFamily: 'Open Sans, sans-serif' }}>
          <p className="text-lg leading-relaxed text-gray-700">
            Open Sans is a humanist sans serif typeface designed by Steve Matteson. 
            It features an upright stress, open forms and a neutral, yet friendly appearance. 
            It was optimized for print, web, and mobile interfaces, and has excellent legibility characteristics.
          </p>
        </div>
      </div>
    </div>
  );
}
