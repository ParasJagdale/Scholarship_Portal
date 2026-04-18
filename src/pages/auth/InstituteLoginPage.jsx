import AuthFormTemplate from "./AuthFormTemplate";

function InstituteLoginPage() {
  return (
    <AuthFormTemplate
      title="Institute Login"
      subtitle="Access student verification dashboard"
      fields={[
        { placeholder: "Institute Code / Email" },
        { placeholder: "Password", type: "password" },
      ]}
      cta="Login as Institute"
      submitTo="/institute/dashboard"
      footerLinkText="New institute?"
      footerLinkTo="/auth/institute-register"
    />
  );
}

export default InstituteLoginPage;
