import StatCard from "../../components/cards/StatCard";
import SectionHeader from "../../components/common/SectionHeader";
import { dashboardStats } from "../../data/mockDashboardStats";

function StateDashboardPage() {
  const stats = dashboardStats.state;

  return (
    <div className="space-y-5">
      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard
          title="Pending Student Apps"
          value={stats.studentPending}
          color="amber"
        />
        <StatCard
          title="Pending Institute Requests"
          value={stats.institutePending}
        />
        <StatCard
          title="Approved Today"
          value={stats.approvedToday}
          color="green"
        />
        <StatCard title="Rejected Today" value={stats.rejectedToday} />
      </section>
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
        <SectionHeader
          title="Verification Workbench"
          subtitle="Use module tabs from sidebar to process student and institute forms."
        />
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
            Student forms pending for scrutiny and remarks.
          </div>
          <div className="rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
            Institute registration forms forwarded for approval.
          </div>
        </div>
      </section>
    </div>
  );
}

export default StateDashboardPage;
