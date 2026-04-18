function StatCard({ title, value, hint, color = "primary" }) {
  const colorClass =
    color === "green"
      ? "text-accent"
      : color === "amber"
        ? "text-amber-600"
        : "text-primary";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg">
      <p className="text-sm font-semibold text-slate-500">{title}</p>
      <p className={`mt-2 text-3xl font-extrabold ${colorClass}`}>{value}</p>
      {hint && <p className="mt-1 text-xs text-slate-500">{hint}</p>}
    </div>
  );
}

export default StatCard;
