import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaShoppingCart } from 'react-icons/fa';

export function Carousel7() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const products = [
    {
      id: 1,
      name: "נעלי ספורט מקצועיות",
      price: "₪599",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400",
      badge: "חדש"
    },
    {
      id: 2,
      name: "תיק גב מעוצב",
      price: "₪299",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=400",
      badge: "מבצע"
    },
    {
      id: 3,
      name: "שעון חכם",
      price: "₪899",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400",
      badge: "פופולרי"
    },
    {
      id: 4,
      name: "אוזניות אלחוטיות",
      price: "₪399",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400",
      badge: "חדש"
    }
  ];

  const itemsPerPage = 3;
  const maxIndex = Math.max(0, products.length - itemsPerPage);

  const next = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  const prev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-50 p-8">
      <div className="w-full max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">המוצרים שלנו</h2>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 gap-6"
              style={{ transform: `translateX(${currentIndex * -(100 / itemsPerPage)}%)` }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 w-[calc(33.333%-16px)] bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover rounded-t-xl"
                    />
                    <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {product.badge}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                      <button className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors">
                        <FaShoppingCart />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {currentIndex > 0 && (
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-4 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            >
              <FaChevronLeft className="text-gray-800 text-xl" />
            </button>
          )}
          
          {currentIndex < maxIndex && (
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-4 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            >
              <FaChevronRight className="text-gray-800 text-xl" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Carousel7;
