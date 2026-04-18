import { NavLink } from "react-router-dom";

function Sidebar({ title, items }) {
  return (
    <aside className="w-full rounded-2xl border border-slate-200 bg-white p-4 shadow-soft lg:w-72">
      <h2 className="mb-4 px-2 text-sm font-bold uppercase tracking-wide text-slate-500">
        {title} Menu
      </h2>
      <nav className="flex flex-col gap-2">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "bg-primary text-white shadow"
                    : "text-slate-600 hover:bg-slate-100"
                }`
              }
            >
              <Icon size={18} />
              {item.label}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
