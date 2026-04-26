import {
  Building2,
  GraduationCap,
  Landmark,
  ShieldCheck,
  LayoutDashboard,
  User,
  FileText,
  Bell,
  ClipboardCheck,
  BookOpenText,
} from "lucide-react";

export const roleCards = [
  {
    title: "Student",
    to: "/auth/student-login",
    icon: GraduationCap,
    description: "Apply and track scholarships.",
    gradientStart: "#ec4899",
    gradientEnd: "#f43f5e",
  },
  {
    title: "Institute",
    to: "/auth/institute-login",
    icon: Building2,
    description: "Verify student applications.",
    gradientStart: "#a855f7",
    gradientEnd: "#6d28d9",
  },
  {
    title: "State Officer",
    to: "/auth/state-login",
    icon: ShieldCheck,
    description: "Nodal scrutiny and approvals.",
    gradientStart: "#3b82f6",
    gradientEnd: "#06b6d4",
  },
  {
    title: "Ministry Admin",
    to: "/auth/ministry-login",
    icon: Landmark,
    description: "Final approvals and scheme governance.",
    gradientStart: "#f59e0b",
    gradientEnd: "#ff6b35",
  },
];

export const sidebarByRole = {
  student: [
    { label: "Dashboard", to: "/student/dashboard", icon: LayoutDashboard },
    { label: "My Profile", to: "/student/profile", icon: User },
    {
      label: "Browse Schemes",
      to: "/student/browse-schemes",
      icon: BookOpenText,
    },
    { label: "Apply for Scholarship", to: "/student/apply", icon: FileText },
    {
      label: "My Applications",
      to: "/student/applications",
      icon: ClipboardCheck,
    },
    { label: "Notifications", to: "/student/notifications", icon: Bell },
  ],
  institute: [
    { label: "Dashboard", to: "/institute/dashboard", icon: LayoutDashboard },
    { label: "Profile", to: "/institute/profile", icon: User },
    {
      label: "Student Applications",
      to: "/institute/student-applications",
      icon: ClipboardCheck,
    },
    {
      label: "Registration Status",
      to: "/institute/registration-request",
      icon: FileText,
    },
  ],
  state: [
    { label: "Dashboard", to: "/state/dashboard", icon: LayoutDashboard },
    {
      label: "Student Verifications",
      to: "/state/student-verifications",
      icon: ClipboardCheck,
    },
    {
      label: "Institute Verifications",
      to: "/state/institute-verifications",
      icon: Building2,
    },
  ],
  ministry: [
    { label: "Dashboard", to: "/ministry/dashboard", icon: LayoutDashboard },
    {
      label: "Manage Schemes",
      to: "/ministry/manage-schemes",
      icon: BookOpenText,
    },
    {
      label: "Student Approvals",
      to: "/ministry/student-approvals",
      icon: ClipboardCheck,
    },
    {
      label: "Institute Approvals",
      to: "/ministry/institute-approvals",
      icon: Building2,
    },
  ],
};

export const statusColorMap = {
  Draft: "bg-slate-100 text-slate-700",
  Submitted: "bg-blue-100 text-blue-700",
  "Institute Pending": "bg-amber-100 text-amber-700",
  "State Pending": "bg-indigo-100 text-indigo-700",
  "Ministry Pending": "bg-purple-100 text-purple-700",
  Approved: "bg-emerald-100 text-emerald-700",
  Rejected: "bg-rose-100 text-rose-700",
  Pending: "bg-amber-100 text-amber-700",
  Verified: "bg-emerald-100 text-emerald-700",
};
