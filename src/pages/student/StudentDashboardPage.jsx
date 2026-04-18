import { Link } from "react-router-dom";
import StatCard from "../../components/cards/StatCard";
import SectionHeader from "../../components/common/SectionHeader";
import SchemeCard from "../../components/cards/SchemeCard";
import TableWrapper from "../../components/tables/TableWrapper";
import StatusBadge from "../../components/common/StatusBadge";
import { dashboardStats } from "../../data/mockDashboardStats";
import { mockSchemes } from "../../data/mockSchemes";
import { mockApplications } from "../../data/mockApplications";

function StudentDashboardPage() {
  const stats = dashboardStats.student;

  return (
    <div className="space-y-5">
      <section className="rounded-2xl bg-gradient-to-r from-[#e7f1ff] to-[#def7ee] p-5">
        <h2 className="text-2xl font-bold text-slate-800">
          Welcome back, Student
        </h2>
        <p className="text-sm text-slate-600">
          Track your scholarships and submit new applications quickly.
        </p>
      </section>

      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard title="Total Applications" value={stats.total} />
        <StatCard title="Approved" value={stats.approved} color="green" />
        <StatCard title="Pending" value={stats.pending} color="amber" />
        <StatCard title="Rejected" value={stats.rejected} />
      </section>

      <section>
        <SectionHeader
          title="Recommended Scholarships"
          action={
            <Link
              to="/student/browse-schemes"
              className="text-sm font-semibold text-primary"
            >
              View all
            </Link>
          }
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {mockSchemes.slice(0, 2).map((scheme) => (
            <SchemeCard
              key={scheme.id}
              scheme={scheme}
              detailsPath={`/student/browse-schemes`}
            />
          ))}
        </div>
      </section>

      <section>
        <SectionHeader title="Recent Applications" />
        <TableWrapper
          columns={["Application ID", "Scheme", "Status", "Submitted On"]}
          rows={mockApplications.slice(0, 3)}
          renderRow={(row) => (
            <tr key={row.id} className="border-t border-slate-100">
              <td className="px-4 py-3 text-sm font-semibold text-primary">
                {row.id}
              </td>
              <td className="px-4 py-3 text-sm text-slate-700">{row.scheme}</td>
              <td className="px-4 py-3 text-sm">
                <StatusBadge status={row.status} />
              </td>
              <td className="px-4 py-3 text-sm text-slate-500">
                {row.submittedOn}
              </td>
            </tr>
          )}
        />
      </section>

      <section className="flex flex-wrap gap-3">
        <Link
          to="/student/apply"
          className="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white"
        >
          Apply Now
        </Link>
        <Link
          to="/student/applications"
          className="rounded-lg bg-accent px-4 py-2 text-sm font-bold text-white"
        >
          Track Status
        </Link>
      </section>
    </div>
  );
}

export default StudentDashboardPage;
