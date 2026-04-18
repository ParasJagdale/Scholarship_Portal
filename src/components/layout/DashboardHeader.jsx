import { Bell, CircleUserRound } from "lucide-react";

function DashboardHeader({ title, subtitle }) {
  return (
    <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-soft md:p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">{title}</h1>
          {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
        </div>
        <div className="flex items-center gap-3 text-slate-600">
          <button className="rounded-full bg-slate-100 p-2 hover:bg-slate-200">
            <Bell size={18} />
          </button>
          <div className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-2 text-sm font-semibold text-primary">
            <CircleUserRound size={16} /> Demo User
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
