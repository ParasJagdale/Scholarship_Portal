export default function GuidelinesBox() {
  const guidelines = [
    { icon: "📋", title: "Guidelines", text: "Aadhar linking to bank account required" },
    { icon: "📅", title: "Timeline", text: "Applications until 15th of each month" },
    { icon: "💡", title: "Tip", text: "Complete your profile to get scheme recommendations" },
    { icon: "🎓", title: "Eligibility", text: "Income certificates must be notarized" },
  ];

  return (
    <section className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-orange-500 rounded-r-lg p-3 md:p-6 my-4 md:my-6 shadow-sm">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-base md:text-lg font-black text-orange-900 mb-3 md:mb-5 flex items-center gap-2">
          <span className="text-xl md:text-2xl">📌</span>
          Important Guidelines & Updates
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
          {guidelines.map((item) => (
            <div key={item.title} className="bg-white rounded-lg p-3 md:p-4 shadow-md border-2 border-orange-200 hover:shadow-lg transition hover:border-orange-400">
              <span className="text-3xl md:text-4xl mb-2 md:mb-3 block">{item.icon}</span>
              <h4 className="font-bold text-slate-800 text-sm md:text-base">{item.title}</h4>
              <p className="text-xs md:text-sm text-slate-600 mt-1 md:mt-2 leading-snug">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
