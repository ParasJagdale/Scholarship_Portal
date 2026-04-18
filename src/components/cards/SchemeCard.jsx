import { Link } from "react-router-dom";

function SchemeCard({ scheme, detailsPath = `/schemes/${scheme.id}` }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-3 flex items-center justify-between gap-2">
        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          {scheme.category}
        </span>
        <span className="text-xs text-slate-500">
          Deadline: {scheme.deadline}
        </span>
      </div>
      <h3 className="text-lg font-bold text-slate-800">{scheme.title}</h3>
      <p className="mt-2 text-sm text-slate-600">{scheme.eligibility}</p>
      <p className="mt-3 text-sm font-semibold text-accent">{scheme.amount}</p>
      <Link
        to={detailsPath}
        className="mt-4 inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary/90"
      >
        View Details
      </Link>
    </article>
  );
}

export default SchemeCard;
