import { Link, useLocation } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);

  return (
    <div className="mb-4 text-sm text-slate-500">
      <Link to="/" className="hover:text-primary">
        Home
      </Link>
      {segments.map((segment, index) => {
        const to = `/${segments.slice(0, index + 1).join("/")}`;
        const label = segment.replace(/-/g, " ");
        return (
          <span key={to}>
            {" / "}
            <Link to={to} className="capitalize hover:text-primary">
              {label}
            </Link>
          </span>
        );
      })}
    </div>
  );
}

export default Breadcrumbs;
