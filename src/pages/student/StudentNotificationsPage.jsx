import { mockNotifications } from "../../data/mockNotifications";

function StudentNotificationsPage() {
  return (
    <div className="space-y-3">
      {mockNotifications.map((item) => (
        <article
          key={item.id}
          className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            {item.date}
          </p>
          <h3 className="mt-1 text-sm font-bold text-slate-800">
            {item.title}
          </h3>
          <p className="mt-1 text-xs text-slate-500">Type: {item.type}</p>
        </article>
      ))}
    </div>
  );
}

export default StudentNotificationsPage;
