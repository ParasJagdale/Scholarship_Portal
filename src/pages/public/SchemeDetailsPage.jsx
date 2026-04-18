import { Link, useParams } from "react-router-dom";
import { mockSchemes } from "../../data/mockSchemes";

function SchemeDetailsPage() {
  const { schemeId } = useParams();
  const scheme =
    mockSchemes.find((item) => item.id === schemeId) || mockSchemes[0];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
        {scheme.category}
      </span>
      <h1 className="mt-3 text-3xl font-extrabold text-slate-800">
        {scheme.title}
      </h1>
      <p className="mt-2 text-slate-600">{scheme.description}</p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl bg-slate-50 p-4">
          <h3 className="font-bold text-slate-800">Eligibility Criteria</h3>
          <p className="mt-2 text-sm text-slate-600">{scheme.eligibility}</p>
        </div>
        <div className="rounded-xl bg-slate-50 p-4">
          <h3 className="font-bold text-slate-800">Scholarship Amount</h3>
          <p className="mt-2 text-sm text-slate-600">{scheme.amount}</p>
        </div>
      </div>

      <div className="mt-4 rounded-xl bg-slate-50 p-4">
        <h3 className="font-bold text-slate-800">Required Documents</h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
          {scheme.documents.map((doc) => (
            <li key={doc}>{doc}</li>
          ))}
        </ul>
      </div>

      <Link
        to="/auth/student-login"
        className="mt-6 inline-flex rounded-lg bg-accent px-4 py-2 text-sm font-bold text-white"
      >
        Apply Now
      </Link>
    </div>
  );
}

export default SchemeDetailsPage;
