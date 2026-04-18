import { Link } from "react-router-dom";

function QuickAccessCard({ title, description, to, icon: Icon }) {
  return (
    <Link
      to={to}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
    >
      <div className="mb-3 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
        <Icon size={22} />
      </div>
      <h3 className="text-lg font-bold text-slate-800">{title}</h3>
      <p className="mt-1 text-sm text-slate-600">{description}</p>
    </Link>
  );
}

export default QuickAccessCard;
