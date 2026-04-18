import { Form, Button } from "react-bootstrap";
import FormSection from "../../components/forms/FormSection";
import FileUploadCard from "../../components/forms/FileUploadCard";

function InstituteProfilePage() {
  return (
    <div className="space-y-4">
      <FormSection title="Institute Information">
        <Form.Control defaultValue="Government Engineering College, Pune" />
        <Form.Control defaultValue="GECP2401" />
        <Form.Control defaultValue="Autonomous" />
        <Form.Control defaultValue="Pune, Maharashtra" />
      </FormSection>

      <FormSection title="Affiliation Details">
        <Form.Control defaultValue="Savitribai Phule Pune University" />
        <Form.Control defaultValue="Maharashtra" />
      </FormSection>

      <FormSection title="Contact Information">
        <Form.Control defaultValue="principal@gecp.demo" />
        <Form.Control defaultValue="9876543201" />
      </FormSection>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <FileUploadCard label="Affiliation Certificate" />
        <FileUploadCard label="Institute Approval Letter" />
      </div>

      <Button variant="primary">Save Changes (UI)</Button>
    </div>
  );
}

export default InstituteProfilePage;
