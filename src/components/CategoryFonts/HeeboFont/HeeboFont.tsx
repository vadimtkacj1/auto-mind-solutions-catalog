export function HeeboFont() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl p-12">
        <div className="mb-12">
          <h1 className="text-6xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Heebo, sans-serif' }}>
            Heebo - היבו
          </h1>
          <p className="text-xl text-gray-600">פונט עברי מודרני וקריא</p>
        </div>
        
        <div className="space-y-8" style={{ fontFamily: 'Heebo, sans-serif' }}>
          <div>
            <p className="text-sm text-gray-500 mb-2">Thin 100</p>
            <p className="text-4xl" style={{ fontWeight: 100 }}>
              שלום עולם Hello World 123
            </p>
          </div>
          
          <div>
            <p className="text-sm text-gray-500 mb-2">Light 300</p>
            <p className="text-4xl" style={{ fontWeight: 300 }}>
              שלום עולם Hello World 123
            </p>
          </div>
          
          <div>
            <p className="text-sm text-gray-500 mb-2">Regular 400</p>
            <p className="text-4xl" style={{ fontWeight: 400 }}>
              שלום עולם Hello World 123
            </p>
          </div>
          
          <div>
            <p className="text-sm text-gray-500 mb-2">Medium 500</p>
            <p className="text-4xl" style={{ fontWeight: 500 }}>
              שלום עולם Hello World 123
            </p>
          </div>
          
          <div>
            <p className="text-sm text-gray-500 mb-2">Bold 700</p>
            <p className="text-4xl" style={{ fontWeight: 700 }}>
              שלום עולם Hello World 123
            </p>
          </div>
          
          <div>
            <p className="text-sm text-gray-500 mb-2">Black 900</p>
            <p className="text-4xl" style={{ fontWeight: 900 }}>
              שלום עולם Hello World 123
            </p>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-gray-50 rounded-xl" style={{ fontFamily: 'Heebo, sans-serif' }}>
          <h3 className="text-2xl font-bold mb-4">טקסט לדוגמה</h3>
          <p className="text-lg leading-relaxed text-gray-700">
            היבו הוא פונט עברי מודרני המעוצב להיות קריא ונוח לעין. הוא מתאים למגוון שימושים - ממסכי מחשב ועד חומרים מודפסים. 
            הפונט כולל תמיכה מלאה בעברית ובאנגלית, עם מגוון משקלים המאפשרים גמישות עיצובית רבה.
          </p>
        </div>
      </div>
    </div>
  );
}
