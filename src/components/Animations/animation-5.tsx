export function Animation5() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      <div className="relative">
        <div className="text-center">
          <h1 className="text-8xl font-bold text-white mb-4 animate-pulse">
            ברוכים הבאים
          </h1>
          <p className="text-2xl text-gray-400 animate-fade-in-delay">
            לחוויה דיגיטלית חדשה
          </p>
        </div>
        
        {/* Floating circles */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500 rounded-full opacity-20 animate-float" />
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-blue-500 rounded-full opacity-20 animate-float-delayed" />
        <div className="absolute top-10 right-10 w-32 h-32 bg-pink-500 rounded-full opacity-20 animate-float-slow" />
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }
        
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-30px) scale(1.1);
          }
        }
        
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-15px) scale(1.08);
          }
        }
        
        @keyframes fade-in-delay {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite;
        }
        
        .animate-fade-in-delay {
          animation: fade-in-delay 1s ease-out 0.5s both;
        }
      `}</style>
    </div>
  );
}
