import { useState } from "react";
import { Button } from "react-bootstrap";
import TableWrapper from "../../components/tables/TableWrapper";
import StatusBadge from "../../components/common/StatusBadge";
import { mockApplications } from "../../data/mockApplications";

function MinistryStudentApprovalsPage() {
  const [rows, setRows] = useState(mockApplications);

  function setStatus(id, status) {
    setRows((prev) =>
      prev.map((row) => (row.id === id ? { ...row, status } : row)),
    );
  }

  return (
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
              <Button
                size="sm"
                variant="success"
                onClick={() => setStatus(row.id, "Approved")}
              >
                Approve Scholarship
              </Button>
              <Button
                size="sm"
                variant="danger"
                onClick={() => setStatus(row.id, "Rejected")}
              >
                Reject
              </Button>
              <Button
                size="sm"
                variant="warning"
                onClick={() => setStatus(row.id, "Approved")}
              >
                Grant Amount
              </Button>
            </div>
          </td>
        </tr>
      )}
    />
  );
}

export default MinistryStudentApprovalsPage;
