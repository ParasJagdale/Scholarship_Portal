import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

function AuthFormTemplate({
  title,
  subtitle,
  fields,
  cta,
  submitTo,
  footerLinkText,
  footerLinkTo,
}) {
  return (
    <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-soft md:p-8">
      <h1 className="text-2xl font-extrabold text-slate-800">{title}</h1>
      <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
      <Form className="mt-5 space-y-3">
        {fields.map((field) =>
          field.type === "select" ? (
            <Form.Select key={field.label}>
              <option>{field.placeholder}</option>
              {(field.options || []).map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </Form.Select>
          ) : (
            <Form.Control
              key={field.label}
              type={field.type || "text"}
              placeholder={field.placeholder}
            />
          ),
        )}
        <Link to={submitTo} className="block">
          <Button className="w-full" variant="primary">
            {cta}
          </Button>
        </Link>
      </Form>
      {footerLinkTo && (
        <p className="mt-4 text-sm text-slate-600">
          {footerLinkText}{" "}
          <Link to={footerLinkTo} className="font-semibold text-primary">
            Continue
          </Link>
        </p>
      )}
    </div>
  );
}

export default AuthFormTemplate;
