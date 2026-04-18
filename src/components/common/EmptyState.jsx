import { Inbox } from "lucide-react";

function EmptyState({
  title = "No Data Available",
  description = "Try adjusting filters or check back later.",
}) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center shadow-soft">
      <Inbox className="mx-auto mb-3 text-slate-400" size={28} />
      <h3 className="text-lg font-bold text-slate-700">{title}</h3>
      <p className="mt-1 text-sm text-slate-500">{description}</p>
    </div>
  );
}

export default EmptyState;
