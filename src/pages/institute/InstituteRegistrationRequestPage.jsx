import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import FormSection from "../../components/forms/FormSection";
import FileUploadCard from "../../components/forms/FileUploadCard";

function InstituteRegistrationRequestPage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      <FormSection title="Institute Registration Details">
        <Form.Select>
          <option>Institute Category</option>
          <option>College</option>
          <option>School</option>
        </Form.Select>
        <Form.Control placeholder="Institute Name" />
        <Form.Control placeholder="State" />
        <Form.Control placeholder="District" />
        <Form.Control placeholder="Institute Code" />
        <Form.Control placeholder="DISE Code" />
        <Form.Control placeholder="Location" />
        <Form.Control placeholder="Institute Type" />
        <Form.Control placeholder="Affiliated University State" />
        <Form.Control placeholder="Affiliated University / Board" />
        <Form.Control placeholder="Year Started" />
        <Form.Control placeholder="Password" type="password" />
        <Form.Control placeholder="Confirm Password" type="password" />
        <Form.Control placeholder="Address" />
        <Form.Control placeholder="Principal Name" />
        <Form.Control placeholder="Mobile" />
        <Form.Control placeholder="Telephone" />
      </FormSection>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <FileUploadCard label="Affiliation Proof" />
        <FileUploadCard label="Institute Recognition Document" />
      </div>

      <Button onClick={() => navigate("/institute/registration-success")}>
        Submit Registration (UI)
      </Button>
    </div>
  );
}

export default InstituteRegistrationRequestPage;
