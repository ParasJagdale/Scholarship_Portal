import AuthFormTemplate from "./AuthFormTemplate";

function MinistryLoginPage() {
  return (
    <AuthFormTemplate
      title="Ministry Admin Login"
      subtitle="Final approvals, scheme management and oversight"
      fields={[
        { placeholder: "Admin Username" },
        { placeholder: "Password", type: "password" },
      ]}
      cta="Login as Ministry Admin"
      submitTo="/ministry/dashboard"
    />
  );
}

export default MinistryLoginPage;
