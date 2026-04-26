export default function StatisticsTicker() {
  const stats = [
    { label: "Students Registered", value: "2.4 Lakh", icon: "👥" },
    { label: "Active Schemes", value: "42", icon: "📚" },
    { label: "Approved Institutes", value: "3,120", icon: "🏫" },
    { label: "Disbursed Amount", value: "₹128 Cr", icon: "💵" },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-3 md:py-5 shadow-lg">
      <div className="mx-auto max-w-7xl px-3 md:px-4">
        <div className="grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div 
              key={stat.label} 
              className="flex flex-col items-center justify-center rounded-lg bg-white/10 backdrop-blur p-2 md:p-4 border border-white/20 hover:bg-white/20 transition"
            >
              <span className="text-xl md:text-3xl mb-1 md:mb-2">{stat.icon}</span>
              <p className="text-xs md:text-sm text-blue-100 font-semibold text-center line-clamp-2">{stat.label}</p>
              <p className="text-base md:text-xl font-black text-white mt-0.5 md:mt-1">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
