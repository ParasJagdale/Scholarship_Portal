import { Link } from "react-router-dom";
import AuthFormTemplate from "./AuthFormTemplate";

function StudentLoginPage() {
  return (
    <div className="space-y-4">
      <AuthFormTemplate
        title="Student Login"
        subtitle="Sign in to apply and track scholarships"
        fields={[
          { placeholder: "Student ID / Email" },
          { placeholder: "Password", type: "password" },
        ]}
        cta="Login as Student"
        submitTo="/student/dashboard"
        footerLinkText="New student?"
        footerLinkTo="/auth/student-register"
      />
      <div className="text-center text-sm">
        <Link to="/auth/forgot-password" className="font-semibold text-primary">
          Forgot password?
        </Link>
      </div>
    </div>
  );
}

export default StudentLoginPage;
