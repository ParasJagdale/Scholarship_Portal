import { Form, Button } from "react-bootstrap";

function ForgotPasswordPage() {
  return (
    <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-soft md:p-8">
      <h1 className="text-2xl font-extrabold text-slate-800">
        Forgot Password
      </h1>
      <p className="mt-1 text-sm text-slate-500">
        UI only reset flow. No real auth/email integration.
      </p>
      <Form className="mt-5 space-y-3">
        <Form.Control placeholder="Registered Email or User ID" />
        <Form.Select>
          <option>Select Role</option>
          <option>Student</option>
          <option>Institute</option>
          <option>State Officer</option>
          <option>Ministry Admin</option>
        </Form.Select>
        <Button className="w-full" variant="primary">
          Send Reset Link (UI)
        </Button>
      </Form>
    </div>
  );
}

export default ForgotPasswordPage;
