import { Navigate, Route, Routes } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import HomePage from "../pages/public/HomePage";
import AboutPage from "../pages/public/AboutPage";
import ContactPage from "../pages/public/ContactPage";
import SchemesPage from "../pages/public/SchemesPage";
import SchemeDetailsPage from "../pages/public/SchemeDetailsPage";

import LoginLandingPage from "../pages/auth/LoginLandingPage";
import StudentLoginPage from "../pages/auth/StudentLoginPage";
import StudentRegisterPage from "../pages/auth/StudentRegisterPage";
import InstituteLoginPage from "../pages/auth/InstituteLoginPage";
import InstituteRegisterPage from "../pages/auth/InstituteRegisterPage";
import StateLoginPage from "../pages/auth/StateLoginPage";
import MinistryLoginPage from "../pages/auth/MinistryLoginPage";
import ForgotPasswordPage from "../pages/auth/ForgotPasswordPage";

import StudentDashboardPage from "../pages/student/StudentDashboardPage";
import StudentProfilePage from "../pages/student/StudentProfilePage";
import StudentBrowseSchemesPage from "../pages/student/StudentBrowseSchemesPage";
import StudentApplicationFormPage from "../pages/student/StudentApplicationFormPage";
import StudentApplicationsPage from "../pages/student/StudentApplicationsPage";
import StudentNotificationsPage from "../pages/student/StudentNotificationsPage";

import InstituteDashboardPage from "../pages/institute/InstituteDashboardPage";
import InstituteProfilePage from "../pages/institute/InstituteProfilePage";
import InstituteStudentApplicationsPage from "../pages/institute/InstituteStudentApplicationsPage";
import InstituteRegistrationRequestPage from "../pages/institute/InstituteRegistrationRequestPage";
import InstituteRegistrationSuccessPage from "../pages/institute/InstituteRegistrationSuccessPage";

import StateDashboardPage from "../pages/state/StateDashboardPage";
import StateStudentVerificationPage from "../pages/state/StateStudentVerificationPage";
import StateInstituteVerificationPage from "../pages/state/StateInstituteVerificationPage";

import MinistryDashboardPage from "../pages/ministry/MinistryDashboardPage";
import ManageSchemesPage from "../pages/ministry/ManageSchemesPage";
import MinistryStudentApprovalsPage from "../pages/ministry/MinistryStudentApprovalsPage";
import MinistryInstituteApprovalsPage from "../pages/ministry/MinistryInstituteApprovalsPage";

import NotFoundPage from "../pages/shared/NotFoundPage";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/schemes" element={<SchemesPage />} />
        <Route path="/schemes/:schemeId" element={<SchemeDetailsPage />} />

        <Route path="/auth/login" element={<LoginLandingPage />} />
        <Route path="/auth/student-login" element={<StudentLoginPage />} />
        <Route
          path="/auth/student-register"
          element={<StudentRegisterPage />}
        />
        <Route path="/auth/institute-login" element={<InstituteLoginPage />} />
        <Route
          path="/auth/institute-register"
          element={<InstituteRegisterPage />}
        />
        <Route path="/auth/state-login" element={<StateLoginPage />} />
        <Route path="/auth/ministry-login" element={<MinistryLoginPage />} />
        <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />
      </Route>

      <Route
        element={
          <DashboardLayout
            role="student"
            title="Student Workspace"
            subtitle="Application and scholarship dashboard"
          />
        }
      >
        <Route path="/student/dashboard" element={<StudentDashboardPage />} />
        <Route path="/student/profile" element={<StudentProfilePage />} />
        <Route
          path="/student/browse-schemes"
          element={<StudentBrowseSchemesPage />}
        />
        <Route path="/student/apply" element={<StudentApplicationFormPage />} />
        <Route
          path="/student/applications"
          element={<StudentApplicationsPage />}
        />
        <Route
          path="/student/notifications"
          element={<StudentNotificationsPage />}
        />
      </Route>

      <Route
        element={
          <DashboardLayout
            role="institute"
            title="Institute Workspace"
            subtitle="Verification and registration operations"
          />
        }
      >
        <Route
          path="/institute/dashboard"
          element={<InstituteDashboardPage />}
        />
        <Route path="/institute/profile" element={<InstituteProfilePage />} />
        <Route
          path="/institute/student-applications"
          element={<InstituteStudentApplicationsPage />}
        />
        <Route
          path="/institute/registration-request"
          element={<InstituteRegistrationRequestPage />}
        />
        <Route
          path="/institute/registration-success"
          element={<InstituteRegistrationSuccessPage />}
        />
      </Route>

      <Route
        element={
          <DashboardLayout
            role="state"
            title="State Nodal Workspace"
            subtitle="State-level scrutiny and approvals"
          />
        }
      >
        <Route path="/state/dashboard" element={<StateDashboardPage />} />
        <Route
          path="/state/student-verifications"
          element={<StateStudentVerificationPage />}
        />
        <Route
          path="/state/institute-verifications"
          element={<StateInstituteVerificationPage />}
        />
      </Route>

      <Route
        element={
          <DashboardLayout
            role="ministry"
            title="Ministry Admin Workspace"
            subtitle="Scheme governance and final approvals"
          />
        }
      >
        <Route path="/ministry/dashboard" element={<MinistryDashboardPage />} />
        <Route
          path="/ministry/manage-schemes"
          element={<ManageSchemesPage />}
        />
        <Route
          path="/ministry/student-approvals"
          element={<MinistryStudentApprovalsPage />}
        />
        <Route
          path="/ministry/institute-approvals"
          element={<MinistryInstituteApprovalsPage />}
        />
      </Route>

      <Route path="/auth" element={<Navigate to="/auth/login" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
