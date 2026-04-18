import AuthFormTemplate from "./AuthFormTemplate";

function InstituteRegisterPage() {
  return (
    <AuthFormTemplate
      title="Institute Registration"
      subtitle="Create institute account for scholarship processing"
      fields={[
        { placeholder: "Institute Name" },
        { placeholder: "Institute Code" },
        {
          placeholder: "State",
          type: "select",
          options: ["Maharashtra", "Gujarat", "Karnataka"],
        },
        { placeholder: "District" },
        { placeholder: "Password", type: "password" },
      ]}
      cta="Register Institute"
      submitTo="/auth/institute-login"
      footerLinkText="Already registered?"
      footerLinkTo="/auth/institute-login"
    />
  );
}

export default InstituteRegisterPage;
