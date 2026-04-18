import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-soft">
      <h1 className="text-4xl font-extrabold text-primary">404</h1>
      <p className="mt-2 text-slate-600">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="mt-4 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white"
      >
        Go Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
