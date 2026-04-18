import { useMemo, useState } from "react";
import { Button } from "react-bootstrap";
import TableWrapper from "../../components/tables/TableWrapper";
import SearchFilterBar from "../../components/common/SearchFilterBar";
import AppModal from "../../components/modals/AppModal";
import StatusBadge from "../../components/common/StatusBadge";
import { mockApplications } from "../../data/mockApplications";

function InstituteStudentApplicationsPage() {
  const [rows, setRows] = useState(mockApplications);
  const [selected, setSelected] = useState(null);

  const footer = useMemo(
    () => (
      <>
        <Button variant="success" onClick={() => updateStatus("Verified")}>
          Verify
        </Button>
        <Button variant="danger" onClick={() => updateStatus("Rejected")}>
          Reject
        </Button>
      </>
    ),
    [selected],
  );

  function updateStatus(status) {
    if (!selected) return;
    setRows((prev) =>
      prev.map((row) => (row.id === selected.id ? { ...row, status } : row)),
    );
    setSelected(null);
  }

  return (
    <div className="space-y-4">
      <SearchFilterBar
        placeholder="Search by student, application ID"
        filters={["All", "Pending", "Verified", "Rejected"]}
      />
      <TableWrapper
        columns={["App ID", "Student", "Scheme", "Status", "Actions"]}
        rows={rows}
        renderRow={(row) => (
          <tr key={row.id} className="border-t border-slate-100">
            <td className="px-4 py-3 text-sm font-semibold text-primary">
              {row.id}
            </td>
            <td className="px-4 py-3 text-sm text-slate-700">
              {row.studentName}
            </td>
            <td className="px-4 py-3 text-sm text-slate-700">{row.scheme}</td>
            <td className="px-4 py-3 text-sm">
              <StatusBadge status={row.status} />
            </td>
            <td className="px-4 py-3 text-sm">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelected(row)}
                  className="rounded-md bg-slate-100 px-2 py-1 text-xs font-semibold"
                >
                  View
                </button>
                <button className="rounded-md bg-accent px-2 py-1 text-xs font-semibold text-white">
                  Upload Bonafide
                </button>
              </div>
            </td>
          </tr>
        )}
      />

      <AppModal
        show={Boolean(selected)}
        onHide={() => setSelected(null)}
        title="Application Actions"
        footer={footer}
      >
        Perform institute-level scrutiny actions for {selected?.id}. This
        updates UI state only.
      </AppModal>
    </div>
  );
}

export default InstituteStudentApplicationsPage;
