import { Outlet } from "react-router-dom";
import PortalNavbar from "../components/layout/PortalNavbar";
import Footer from "../components/layout/Footer";

function PublicLayout() {
  return (
    <div className="page-fade min-h-screen">
      <PortalNavbar />
      <main className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default PublicLayout;
