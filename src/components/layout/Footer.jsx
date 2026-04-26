import { Phone, Mail, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="mt-12 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-3 text-lg font-bold">ScholarFlow</h3>
            <p className="text-sm text-slate-300">
              National Scholarship Portal - Unified scholarship discovery, application and approval workflow.
            </p>
            <p className="mt-3 text-xs text-slate-400">Academic Year 2025-26</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-3 font-bold text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/schemes" className="hover:text-white transition">Browse Schemes</a></li>
              <li><a href="/about" className="hover:text-white transition">About Us</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* For Roles */}
          <div>
            <h4 className="mb-3 font-bold text-white">For You</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="/auth/student-login" className="hover:text-white transition">Students</a></li>
              <li><a href="/auth/institute-login" className="hover:text-white transition">Institutions</a></li>
              <li><a href="/auth/state-login" className="hover:text-white transition">State Officers</a></li>
              <li><a href="/auth/ministry-login" className="hover:text-white transition">Ministry Admin</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 font-bold text-white">Contact</h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>1800-120-8040</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>support@scholarflow.demo</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1" />
                <span>Ministry of Education<br />Government of India</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6 border-slate-700" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-slate-400 md:flex-row">
          <p>© 2025-26 ScholarFlow Portal. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-white transition">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition">Terms & Conditions</a>
            <a href="#accessibility" className="hover:text-white transition">Accessibility</a>
          </div>
          <p>Designed & Developed by Ministry of Education</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
