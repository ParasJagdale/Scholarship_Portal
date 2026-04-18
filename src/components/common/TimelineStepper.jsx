const steps = [
  "Submitted",
  "Institute Review",
  "State Review",
  "Ministry Review",
  "Final Decision",
];

function TimelineStepper({ current = 1 }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-5">
        {steps.map((step, index) => {
          const isDone = index + 1 <= current;
          return (
            <div key={step} className="flex items-center gap-2">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                  isDone
                    ? "bg-accent text-white"
                    : "bg-slate-200 text-slate-600"
                }`}
              >
                {index + 1}
              </div>
              <p
                className={`text-xs font-semibold ${isDone ? "text-accent" : "text-slate-500"}`}
              >
                {step}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TimelineStepper;
