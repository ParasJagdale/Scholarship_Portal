import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import FormSection from "../../components/forms/FormSection";
import FileUploadCard from "../../components/forms/FileUploadCard";
import AppModal from "../../components/modals/AppModal";
import { useNavigate } from "react-router-dom";

function StudentApplicationFormPage() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="space-y-4">
      <FormSection title="Basic Details">
        <Form.Control placeholder="Applicant Name" />
        <Form.Control placeholder="Aadhaar Number" />
        <Form.Control placeholder="Date of Birth" />
        <Form.Control placeholder="Category" />
      </FormSection>

      <FormSection title="Family Details">
        <Form.Control placeholder="Father Name" />
        <Form.Control placeholder="Mother Name" />
        <Form.Control placeholder="Family Annual Income" />
        <Form.Control placeholder="Income Certificate Number" />
      </FormSection>

      <FormSection title="Academic Details">
        <Form.Control placeholder="Current Course" />
        <Form.Control placeholder="Academic Year" />
        <Form.Control placeholder="Previous Score" />
        <Form.Control placeholder="Institute Name" />
      </FormSection>

      <FormSection title="Fee Details">
        <Form.Control placeholder="Tuition Fee" />
        <Form.Control placeholder="Exam Fee" />
        <Form.Control placeholder="Other Fee" />
        <Form.Control placeholder="Total Fee" />
      </FormSection>

      <FormSection title="Other Personal Details">
        <Form.Control placeholder="Religion" />
        <Form.Control placeholder="Disability Status" />
        <Form.Control placeholder="Marital Status" />
        <Form.Control placeholder="Domicile State" />
      </FormSection>

      <FormSection title="Contact Details">
        <Form.Control placeholder="Email" />
        <Form.Control placeholder="Mobile" />
        <Form.Control placeholder="Address Line 1" />
        <Form.Control placeholder="Pincode" />
      </FormSection>

      <FormSection title="Choose Scheme">
        <Form.Select>
          <option>Select Scholarship Scheme</option>
          <option>National Merit Scholarship</option>
          <option>Post Matric Scholarship</option>
        </Form.Select>
        <Form.Control placeholder="Preferred Department" />
      </FormSection>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
        <h3 className="mb-4 text-lg font-bold text-slate-800">
          Document Upload Section
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FileUploadCard label="Income Certificate" />
          <FileUploadCard label="Bonafide Certificate" />
          <FileUploadCard label="Previous Marksheet" />
          <FileUploadCard label="Bank Passbook" />
        </div>
      </section>

      <div className="flex gap-3">
        <Button variant="primary" onClick={() => setShowModal(true)}>
          Submit Application
        </Button>
        <Button variant="outline-secondary">Save Draft (UI)</Button>
      </div>

      <AppModal
        show={showModal}
        onHide={() => setShowModal(false)}
        title="Application Submitted"
        footer={
          <Button onClick={() => navigate("/student/applications")}>
            Go to My Applications
          </Button>
        }
      >
        Your scholarship form has been submitted in this demo flow. No backend
        call was made.
      </AppModal>
    </div>
  );
}

export default StudentApplicationFormPage;
