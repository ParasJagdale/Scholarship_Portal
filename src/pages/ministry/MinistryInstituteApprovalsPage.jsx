import { useState } from "react";
import { Button } from "react-bootstrap";
import TableWrapper from "../../components/tables/TableWrapper";
import StatusBadge from "../../components/common/StatusBadge";
import { mockInstitutes } from "../../data/mockInstitutes";

function MinistryInstituteApprovalsPage() {
  const [rows, setRows] = useState(mockInstitutes);

  function setStatus(id, status) {
    setRows((prev) =>
      prev.map((row) => (row.id === id ? { ...row, status } : row)),
    );
  }

  return (
    <TableWrapper
      columns={["Institute", "State", "District", "Status", "Actions"]}
      rows={rows}
      renderRow={(row) => (
        <tr key={row.id} className="border-t border-slate-100">
          <td className="px-4 py-3 text-sm text-slate-700">{row.name}</td>
          <td className="px-4 py-3 text-sm text-slate-700">{row.state}</td>
          <td className="px-4 py-3 text-sm text-slate-700">{row.district}</td>
          <td className="px-4 py-3 text-sm">
            <StatusBadge status={row.status} />
          </td>
          <td className="px-4 py-3 text-sm">
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="success"
                onClick={() => setStatus(row.id, "Approved")}
              >
                Final Approve
              </Button>
              <Button
                size="sm"
                variant="danger"
                onClick={() => setStatus(row.id, "Rejected")}
              >
                Reject
              </Button>
            </div>
          </td>
        </tr>
      )}
    />
  );
}

export default MinistryInstituteApprovalsPage;
