import { statusColorMap } from "../../utils/constants";

function StatusBadge({ status }) {
  const colorClass = statusColorMap[status] || "bg-slate-100 text-slate-700";
  return (
    <span
      className={`rounded-full px-2.5 py-1 text-xs font-bold ${colorClass}`}
    >
      {status}
    </span>
  );
}

export default StatusBadge;
