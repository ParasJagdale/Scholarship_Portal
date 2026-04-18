import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import DashboardHeader from "../components/layout/DashboardHeader";
import Breadcrumbs from "../components/layout/Breadcrumbs";
import { sidebarByRole } from "../utils/constants";

function DashboardLayout({
  role = "student",
  title = "Dashboard",
  subtitle = "ScholarFlow role workspace",
}) {
  return (
    <div className="page-fade min-h-screen px-4 py-5 md:px-6">
      <div className="mx-auto max-w-7xl">
        <DashboardHeader title={title} subtitle={subtitle} />
        <Breadcrumbs />
        <div className="flex flex-col gap-5 lg:flex-row">
          <Sidebar title={role} items={sidebarByRole[role]} />
          <section className="flex-1">
            <Outlet />
          </section>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
