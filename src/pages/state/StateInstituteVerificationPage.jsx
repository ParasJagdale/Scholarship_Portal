import { useState } from "react";
import { Button } from "react-bootstrap";
import TableWrapper from "../../components/tables/TableWrapper";
import StatusBadge from "../../components/common/StatusBadge";
import { mockInstitutes } from "../../data/mockInstitutes";

function StateInstituteVerificationPage() {
  const [rows, setRows] = useState(mockInstitutes);

  function update(id, status) {
    setRows((prev) =>
      prev.map((row) => (row.id === id ? { ...row, status } : row)),
    );
  }

  return (
    <TableWrapper
      columns={["Institute", "Code", "District", "Status", "Actions"]}
      rows={rows}
      renderRow={(row) => (
        <tr key={row.id} className="border-t border-slate-100">
          <td className="px-4 py-3 text-sm text-slate-700">{row.name}</td>
          <td className="px-4 py-3 text-sm text-slate-700">{row.code}</td>
          <td className="px-4 py-3 text-sm text-slate-700">{row.district}</td>
          <td className="px-4 py-3 text-sm">
            <StatusBadge status={row.status} />
          </td>
          <td className="px-4 py-3 text-sm">
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="success"
                onClick={() => update(row.id, "Approved")}
              >
                Approve
              </Button>
              <Button
                size="sm"
                variant="danger"
                onClick={() => update(row.id, "Rejected")}
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

export default StateInstituteVerificationPage;
