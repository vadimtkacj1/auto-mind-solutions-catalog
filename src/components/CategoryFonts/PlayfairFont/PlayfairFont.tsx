export function PlayfairFont() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50 p-8">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl p-12">
        <div className="mb-12 text-center">
          <h1 className="text-7xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Playfair Display
          </h1>
          <p className="text-2xl text-gray-600" style={{ fontFamily: 'Playfair Display, serif' }}>
            An Elegant Serif Typeface
          </p>
        </div>
        
        <div className="mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
          <div className="text-center mb-8">
            <p className="text-5xl font-bold mb-4">Luxury & Elegance</p>
            <p className="text-3xl">Perfect for Headlines</p>
          </div>
        </div>
        
        <div className="space-y-8" style={{ fontFamily: 'Playfair Display, serif' }}>
          <div>
            <p className="text-sm text-gray-500 mb-2">Regular 400</p>
            <p className="text-4xl">
              The Art of Typography Matters
            </p>
          </div>
          
          <div>
            <p className="text-sm text-gray-500 mb-2">Medium 500</p>
            <p className="text-4xl" style={{ fontWeight: 500 }}>
              The Art of Typography Matters
            </p>
          </div>
          
          <div>
            <p className="text-sm text-gray-500 mb-2">Semi Bold 600</p>
            <p className="text-4xl" style={{ fontWeight: 600 }}>
              The Art of Typography Matters
            </p>
          </div>
          
          <div>
            <p className="text-sm text-gray-500 mb-2">Bold 700</p>
            <p className="text-4xl font-bold">
              The Art of Typography Matters
            </p>
          </div>
          
          <div>
            <p className="text-sm text-gray-500 mb-2">Black 900</p>
            <p className="text-4xl" style={{ fontWeight: 900 }}>
              The Art of Typography Matters
            </p>
          </div>
        </div>
        
        <div className="mt-12 p-8 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl" style={{ fontFamily: 'Playfair Display, serif' }}>
          <h3 className="text-3xl font-bold mb-6">About This Font</h3>
          <p className="text-xl leading-relaxed text-gray-700">
            Playfair Display is a transitional design with high contrast and delicate hairlines. 
            Designed for large sizes, it creates an elegant and sophisticated look perfect for 
            headlines, titles, and luxury branding. The font exudes class and refinement.
          </p>
        </div>
      </div>
    </div>
  );
}
