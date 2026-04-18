import { Search } from "lucide-react";

function SearchFilterBar({ placeholder = "Search...", filters = [] }) {
  return (
    <div className="mb-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <div className="relative w-full md:flex-1">
          <Search
            className="absolute left-3 top-2.5 text-slate-400"
            size={18}
          />
          <input
            type="text"
            placeholder={placeholder}
            className="w-full rounded-lg border border-slate-300 py-2 pl-10 pr-3 text-sm outline-none focus:border-primary"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item}
              className="rounded-full border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:border-primary hover:text-primary"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchFilterBar;
