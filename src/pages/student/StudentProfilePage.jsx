import { Form, Button } from "react-bootstrap";
import FormSection from "../../components/forms/FormSection";

function StudentProfilePage() {
  return (
    <div className="space-y-4">
      <FormSection title="Personal Information">
        <Form.Control placeholder="Full Name" defaultValue="Paras Jagdale" />
        <Form.Control placeholder="Date of Birth" defaultValue="12/08/2004" />
        <Form.Control placeholder="Gender" defaultValue="Male" />
        <Form.Control placeholder="Category" defaultValue="General" />
      </FormSection>

      <FormSection title="Academic Information">
        <Form.Control
          placeholder="Current Course"
          defaultValue="B.Tech Computer Engineering"
        />
        <Form.Control placeholder="Current Year" defaultValue="Second Year" />
        <Form.Control
          placeholder="Institute Name"
          defaultValue="Government Engineering College"
        />
        <Form.Control placeholder="Last Exam Percentage" defaultValue="82%" />
      </FormSection>

      <FormSection title="Bank Details">
        <Form.Control
          placeholder="Bank Name"
          defaultValue="State Bank of India"
        />
        <Form.Control placeholder="Account Number" defaultValue="XXXXXX5612" />
        <Form.Control placeholder="IFSC Code" defaultValue="SBIN0000456" />
        <Form.Control placeholder="Branch" defaultValue="Pune Main" />
      </FormSection>

      <Button variant="primary">Save Profile (UI only)</Button>
    </div>
  );
}

export default StudentProfilePage;
