import StatCard from "../../components/cards/StatCard";
import SectionHeader from "../../components/common/SectionHeader";
import { dashboardStats } from "../../data/mockDashboardStats";
import { mockApplications } from "../../data/mockApplications";

function MinistryDashboardPage() {
  const stats = dashboardStats.ministry;

  return (
    <div className="space-y-5">
      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard title="Managed Schemes" value={stats.schemes} />
        <StatCard
          title="Final Approval Queue"
          value={stats.stateApprovedPendingFinal}
          color="amber"
        />
        <StatCard
          title="Granted This Cycle"
          value={stats.grantedThisCycle}
          color="green"
        />
        <StatCard title="Rejected This Cycle" value={stats.rejectedThisCycle} />
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
        <SectionHeader
          title="Progress Snapshot"
          subtitle="Chart placeholders using progress bars"
        />
        <div className="space-y-3">
          <div>
            <div className="mb-1 flex justify-between text-sm">
              <span>Approval Throughput</span>
              <span>78%</span>
            </div>
            <div className="h-2 rounded-full bg-slate-200">
              <div className="h-2 w-[78%] rounded-full bg-primary" />
            </div>
          </div>
          <div>
            <div className="mb-1 flex justify-between text-sm">
              <span>Fund Disbursal Readiness</span>
              <span>66%</span>
            </div>
            <div className="h-2 rounded-full bg-slate-200">
              <div className="h-2 w-[66%] rounded-full bg-accent" />
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
        <SectionHeader title="Recent Approvals" />
        <ul className="space-y-2">
          {mockApplications.slice(0, 3).map((item) => (
            <li
              key={item.id}
              className="rounded-lg bg-slate-50 p-3 text-sm text-slate-700"
            >
              {item.id} - {item.studentName} - {item.scheme}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default MinistryDashboardPage;
