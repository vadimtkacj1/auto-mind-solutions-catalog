export function Animation7() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 p-8 overflow-hidden">
      <div className="relative">
        {/* Main content */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-7xl font-bold mb-6 animate-slide-down">
            העתיד כאן
          </h1>
          <p className="text-2xl mb-8 animate-slide-up">
            התחל את המסע הדיגיטלי שלך היום
          </p>
          <button className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:scale-110 transition-transform duration-300 animate-bounce-in">
            בוא נתחיל
          </button>
        </div>
        
        {/* Background animated shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white opacity-10 rounded-full animate-spin-slow" />
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white opacity-10 rounded-full animate-spin-reverse" />
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white opacity-5 rounded-lg animate-rotate-3d" />
        </div>
      </div>
      
      <style>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        
        @keyframes rotate-3d {
          0% {
            transform: rotateY(0deg) rotateX(0deg);
          }
          50% {
            transform: rotateY(180deg) rotateX(180deg);
          }
          100% {
            transform: rotateY(360deg) rotateX(360deg);
          }
        }
        
        .animate-slide-down {
          animation: slide-down 0.8s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out 0.3s both;
        }
        
        .animate-bounce-in {
          animation: bounce-in 1s ease-out 0.6s both;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
        
        .animate-rotate-3d {
          animation: rotate-3d 10s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
