import { NavLink, Link } from "react-router-dom";
import { Menu, X, GraduationCap, MessageSquare, Volume2, LifeBuoy, Phone } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Schemes", to: "/schemes" },
  { label: "Contact", to: "/contact" },
  { label: "Login", to: "/auth/login" },
];

const govLinks = [
  { label: "FAQs", icon: MessageSquare, href: "#faqs" },
  { label: "Announcements", icon: Volume2, href: "#announcements" },
  { label: "Helpdesk", icon: LifeBuoy, href: "#helpdesk" },
];

function PortalNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Government Links Bar - Desktop Only */}
      <div className="hidden bg-gradient-to-r from-slate-900 to-slate-800 text-white md:flex items-center justify-end gap-4 px-4 lg:px-6 py-1.5 md:py-2 text-xs lg:text-sm">
        {govLinks.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-2 hover:text-yellow-300 transition"
            >
              <Icon size={16} />
              <span className="font-semibold">{item.label}</span>
            </a>
          );
        })}
        <a
          href="tel:1800-120-8040"
          className="flex items-center gap-2 ml-4 pl-4 border-l border-slate-600 hover:text-yellow-300 transition"
        >
          <Phone size={16} />
          <span className="font-semibold">1800-120-8040</span>
        </a>
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-3 md:px-6 py-2 md:py-3">
          <Link
            to="/"
            className="flex items-center gap-2 text-lg md:text-xl font-bold text-primary"
          >
            <GraduationCap size={24} />
            <span className="hidden sm:inline">ScholarFlow</span>
          </Link>

          <button className="md:hidden" onClick={() => setOpen((prev) => !prev)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-lg px-2 lg:px-3 py-2 text-xs lg:text-sm font-semibold transition ${isActive ? "bg-primary text-white" : "text-slate-600 hover:bg-slate-100"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        {open && (
          <div className="border-t border-slate-200 bg-white px-3 py-2 md:hidden">
            <div className="flex flex-col gap-1">
              {links.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className="rounded-md px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <hr className="my-1" />
              {govLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100"
                  >
                    <Icon size={14} />
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default PortalNavbar;
