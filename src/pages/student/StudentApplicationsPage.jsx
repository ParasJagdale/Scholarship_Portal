import TableWrapper from "../../components/tables/TableWrapper";
import StatusBadge from "../../components/common/StatusBadge";
import TimelineStepper from "../../components/common/TimelineStepper";
import SectionHeader from "../../components/common/SectionHeader";
import { mockApplications } from "../../data/mockApplications";

function StudentApplicationsPage() {
  const selected = mockApplications[1];

  return (
    <div className="space-y-4">
      <SectionHeader
        title="My Applications"
        subtitle="Track stage-wise status of your submissions"
      />
      <TableWrapper
        columns={["Application ID", "Scheme", "Status", "Amount", "Action"]}
        rows={mockApplications}
        renderRow={(row) => (
          <tr key={row.id} className="border-t border-slate-100">
            <td className="px-4 py-3 text-sm font-semibold text-primary">
              {row.id}
            </td>
            <td className="px-4 py-3 text-sm text-slate-700">{row.scheme}</td>
            <td className="px-4 py-3 text-sm">
              <StatusBadge status={row.status} />
            </td>
            <td className="px-4 py-3 text-sm text-slate-600">{row.amount}</td>
            <td className="px-4 py-3 text-sm">
              <button className="rounded-lg bg-slate-100 px-3 py-1.5 font-semibold text-slate-700">
                View Details
              </button>
            </td>
          </tr>
        )}
      />

      <section>
        <SectionHeader title={`Workflow Timeline - ${selected.id}`} />
        <TimelineStepper current={selected.stage} />
      </section>
    </div>
  );
}

export default StudentApplicationsPage;
