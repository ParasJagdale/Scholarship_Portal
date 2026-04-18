import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import TableWrapper from "../../components/tables/TableWrapper";
import AppModal from "../../components/modals/AppModal";
import { mockSchemes } from "../../data/mockSchemes";

function ManageSchemesPage() {
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button onClick={() => setShowAdd(true)}>Add New Scheme</Button>
      </div>

      <TableWrapper
        columns={["Scheme Title", "Category", "Amount", "Deadline", "Actions"]}
        rows={mockSchemes}
        renderRow={(row) => (
          <tr key={row.id} className="border-t border-slate-100">
            <td className="px-4 py-3 text-sm text-slate-700">{row.title}</td>
            <td className="px-4 py-3 text-sm text-slate-700">{row.category}</td>
            <td className="px-4 py-3 text-sm text-slate-700">{row.amount}</td>
            <td className="px-4 py-3 text-sm text-slate-700">{row.deadline}</td>
            <td className="px-4 py-3 text-sm">
              <div className="flex gap-2">
                <Button size="sm" onClick={() => setShowEdit(true)}>
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => setShowDelete(true)}
                >
                  Delete
                </Button>
              </div>
            </td>
          </tr>
        )}
      />

      <AppModal
        show={showAdd}
        onHide={() => setShowAdd(false)}
        title="Add New Scheme"
        footer={<Button onClick={() => setShowAdd(false)}>Save (UI)</Button>}
      >
        <Form className="space-y-2">
          <Form.Control placeholder="Scheme Title" />
          <Form.Control placeholder="Category" />
          <Form.Control placeholder="Amount" />
          <Form.Control placeholder="Deadline" />
        </Form>
      </AppModal>

      <AppModal
        show={showEdit}
        onHide={() => setShowEdit(false)}
        title="Edit Scheme"
        footer={<Button onClick={() => setShowEdit(false)}>Update (UI)</Button>}
      >
        <Form className="space-y-2">
          <Form.Control defaultValue="National Merit Scholarship" />
          <Form.Control defaultValue="Merit" />
          <Form.Control defaultValue="Rs. 50,000 / year" />
        </Form>
      </AppModal>

      <AppModal
        show={showDelete}
        onHide={() => setShowDelete(false)}
        title="Delete Scheme"
        footer={
          <Button variant="danger" onClick={() => setShowDelete(false)}>
            Confirm Delete (UI)
          </Button>
        }
      >
        Are you sure you want to remove this scheme? This is a UI-only
        confirmation.
      </AppModal>
    </div>
  );
}

export default ManageSchemesPage;
