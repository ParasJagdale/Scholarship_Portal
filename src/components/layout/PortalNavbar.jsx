import { NavLink, Link } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Schemes", to: "/schemes" },
  { label: "Helpdesk", to: "/contact" },
  { label: "Login", to: "/auth/login" },
];

function PortalNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-primary"
        >
          <GraduationCap size={26} />
          ScholarFlow
        </Link>

        <button className="md:hidden" onClick={() => setOpen((prev) => !prev)}>
          {open ? <X /> : <Menu />}
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-semibold transition ${isActive ? "bg-primary text-white" : "text-slate-600 hover:bg-slate-100"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-3 md:hidden">
          <div className="flex flex-col gap-2">
            {links.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="rounded-md px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default PortalNavbar;
