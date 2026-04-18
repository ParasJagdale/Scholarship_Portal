import AuthFormTemplate from "./AuthFormTemplate";

function StateLoginPage() {
  return (
    <AuthFormTemplate
      title="State Nodal Officer Login"
      subtitle="Scrutinize forwarded applications and institute requests"
      fields={[
        { placeholder: "Official Email" },
        { placeholder: "Password", type: "password" },
      ]}
      cta="Login as State Officer"
      submitTo="/state/dashboard"
    />
  );
}

export default StateLoginPage;
