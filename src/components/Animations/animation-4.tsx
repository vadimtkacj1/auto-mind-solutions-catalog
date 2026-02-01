import { FaRocket, FaLightbulb, FaChartLine, FaUsers } from 'react-icons/fa';

export function Animation4() {
  const features = [
    {
      icon: FaRocket,
      title: "מהירות בלתי רגילה",
      description: "ביצועים מהירים פי 10 מהמתחרים"
    },
    {
      icon: FaLightbulb,
      title: "חדשנות מתמדת",
      description: "עדכונים וחידושים כל חודש"
    },
    {
      icon: FaChartLine,
      title: "צמיחה מובטחת",
      description: "תוצאות מדידות וניתוחים מעמיקים"
    },
    {
      icon: FaUsers,
      title: "תמיכה 24/7",
      description: "צוות מקצועי תמיד כאן בשבילך"
    }
  ];

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 p-8">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl font-bold text-white text-center mb-16">למה לבחור בנו?</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 h-full border border-white border-opacity-20 transition-all duration-300 hover:bg-opacity-20 hover:scale-105">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="text-6xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-purple-200">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
