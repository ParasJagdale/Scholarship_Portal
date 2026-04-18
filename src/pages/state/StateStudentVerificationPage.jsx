import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import TableWrapper from "../../components/tables/TableWrapper";
import AppModal from "../../components/modals/AppModal";
import StatusBadge from "../../components/common/StatusBadge";
import { mockApplications } from "../../data/mockApplications";

function StateStudentVerificationPage() {
  const [rows, setRows] = useState(mockApplications);
  const [selected, setSelected] = useState(null);
  const [remark, setRemark] = useState("");

  function update(status) {
    if (!selected) return;
    setRows((prev) =>
      prev.map((row) => (row.id === selected.id ? { ...row, status } : row)),
    );
    setRemark("");
    setSelected(null);
  }

  return (
    <div className="space-y-4">
      <TableWrapper
        columns={["App ID", "Student", "Institute", "Status", "Actions"]}
        rows={rows}
        renderRow={(row) => (
          <tr key={row.id} className="border-t border-slate-100">
            <td className="px-4 py-3 text-sm font-semibold text-primary">
              {row.id}
            </td>
            <td className="px-4 py-3 text-sm text-slate-700">
              {row.studentName}
            </td>
            <td className="px-4 py-3 text-sm text-slate-700">
              {row.institute}
            </td>
            <td className="px-4 py-3 text-sm">
              <StatusBadge status={row.status} />
            </td>
            <td className="px-4 py-3 text-sm">
              <button
                onClick={() => setSelected(row)}
                className="rounded-md bg-slate-100 px-2 py-1 text-xs font-semibold"
              >
                View & Action
              </button>
            </td>
          </tr>
        )}
      />

      <AppModal
        show={Boolean(selected)}
        onHide={() => setSelected(null)}
        title={`State Review - ${selected?.id || ""}`}
        footer={
          <>
            <Button
              variant="success"
              onClick={() => update("Ministry Pending")}
            >
              Approve
            </Button>
            <Button variant="danger" onClick={() => update("Rejected")}>
              Reject
            </Button>
          </>
        }
      >
        <p className="mb-2 text-sm text-slate-600">
          View uploaded documents and enter remarks (UI only).
        </p>
        <Form.Control
          as="textarea"
          rows={3}
          value={remark}
          onChange={(e) => setRemark(e.target.value)}
          placeholder="Enter remarks"
        />
      </AppModal>
    </div>
  );
}

export default StateStudentVerificationPage;
