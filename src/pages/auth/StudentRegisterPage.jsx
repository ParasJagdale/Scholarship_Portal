import AuthFormTemplate from "./AuthFormTemplate";

function StudentRegisterPage() {
  return (
    <AuthFormTemplate
      title="Student Registration"
      subtitle="Create account to start scholarship journey"
      fields={[
        { placeholder: "Full Name" },
        { placeholder: "Email" },
        { placeholder: "Mobile Number" },
        {
          placeholder: "State",
          type: "select",
          options: ["Maharashtra", "Gujarat", "Karnataka"],
        },
        { placeholder: "Password", type: "password" },
      ]}
      cta="Register Student"
      submitTo="/auth/student-login"
      footerLinkText="Already registered?"
      footerLinkTo="/auth/student-login"
    />
  );
}

export default StudentRegisterPage;
