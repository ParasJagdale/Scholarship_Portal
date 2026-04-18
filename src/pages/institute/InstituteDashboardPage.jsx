import StatCard from "../../components/cards/StatCard";
import TableWrapper from "../../components/tables/TableWrapper";
import SectionHeader from "../../components/common/SectionHeader";
import { dashboardStats } from "../../data/mockDashboardStats";
import { mockApplications } from "../../data/mockApplications";

function InstituteDashboardPage() {
  const stats = dashboardStats.institute;

  return (
    <div className="space-y-5">
      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <StatCard
          title="Pending Students"
          value={stats.pending}
          color="amber"
        />
        <StatCard title="Verified" value={stats.verified} color="green" />
        <StatCard title="Rejected" value={stats.rejected} />
      </section>

      <section>
        <SectionHeader title="Pending Student Applications" />
        <TableWrapper
          columns={["Application ID", "Student", "Scheme", "Action"]}
          rows={mockApplications.slice(0, 3)}
          renderRow={(row) => (
            <tr key={row.id} className="border-t border-slate-100">
              <td className="px-4 py-3 text-sm font-semibold text-primary">
                {row.id}
              </td>
              <td className="px-4 py-3 text-sm text-slate-700">
                {row.studentName}
              </td>
              <td className="px-4 py-3 text-sm text-slate-700">{row.scheme}</td>
              <td className="px-4 py-3 text-sm text-slate-700">Review</td>
            </tr>
          )}
        />
      </section>
    </div>
  );
}

export default InstituteDashboardPage;
