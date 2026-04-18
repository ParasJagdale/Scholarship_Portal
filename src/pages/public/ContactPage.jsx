import { Accordion, Form, Button } from "react-bootstrap";
import SectionHeader from "../../components/common/SectionHeader";

function ContactPage() {
  return (
    <div className="space-y-8">
      <section className="grid gap-4 md:grid-cols-3">
        {[
          { title: "Student Helpdesk", value: "1800-100-001" },
          { title: "Institute Support", value: "1800-100-002" },
          { title: "Escalation Desk", value: "helpdesk@scholarflow.demo" },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft"
          >
            <p className="text-sm text-slate-500">{item.title}</p>
            <p className="mt-1 text-lg font-bold text-primary">{item.value}</p>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <SectionHeader
          title="Contact Form"
          subtitle="UI only - no real submission"
        />
        <Form className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <Form.Control placeholder="Full Name" />
          <Form.Control placeholder="Email" type="email" />
          <Form.Control placeholder="Mobile Number" />
          <Form.Select>
            <option>Select Query Category</option>
            <option>Scholarship Scheme</option>
            <option>Application Status</option>
          </Form.Select>
          <div className="md:col-span-2">
            <Form.Control as="textarea" rows={4} placeholder="Enter message" />
          </div>
          <Button className="md:col-span-2" variant="primary">
            Submit (UI)
          </Button>
        </Form>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <SectionHeader title="Frequently Asked Questions" />
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              How do I apply for a scholarship?
            </Accordion.Header>
            <Accordion.Body>
              Create a student profile, browse schemes, and submit the
              scholarship form with required documents.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Can institutes reject applications?
            </Accordion.Header>
            <Accordion.Body>
              Yes, institute dashboards include verify/reject actions in this
              prototype workflow.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Is this connected to a backend?</Accordion.Header>
            <Accordion.Body>
              No, this case study is frontend-only with mock data and
              navigation-based flow.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
    </div>
  );
}

export default ContactPage;
