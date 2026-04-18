import { Link } from "react-router-dom";
import { roleCards } from "../../utils/constants";
import QuickAccessCard from "../../components/cards/QuickAccessCard";
import SectionHeader from "../../components/common/SectionHeader";
import SchemeCard from "../../components/cards/SchemeCard";
import StatCard from "../../components/cards/StatCard";
import { mockSchemes } from "../../data/mockSchemes";

const updates = [
  "AY 2026-27 applications open from 30 June 2026.",
  "Income certificate upload mandatory for all income-based schemes.",
  "Institute verification timeline reduced to 10 working days.",
];

function HomePage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl bg-gradient-to-r from-primary to-[#1b7ecf] p-8 text-white shadow-soft md:p-12">
        <p className="mb-2 text-sm uppercase tracking-wider text-white/80">
          Government Tech Scholarship Case Study
        </p>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">
          ScholarFlow - National Scholarship Portal
        </h1>
        <p className="mt-4 max-w-2xl text-white/90">
          Unified scholarship discovery, application and approval workflow for
          Students, Institutes, State Nodal Officers and Ministry Admin.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/schemes"
            className="rounded-lg bg-white px-4 py-2 text-sm font-bold text-primary"
          >
            Explore Schemes
          </Link>
          <Link
            to="/auth/login"
            className="rounded-lg border border-white/40 px-4 py-2 text-sm font-bold text-white"
          >
            Sign In by Role
          </Link>
        </div>
      </section>

      <section>
        <SectionHeader
          title="Quick Access"
          subtitle="Choose your role to continue"
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {roleCards.map((card) => (
            <QuickAccessCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      <section>
        <SectionHeader
          title="Featured Scholarship Schemes"
          subtitle="Top active opportunities across categories"
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {mockSchemes.slice(0, 4).map((scheme) => (
            <SchemeCard key={scheme.id} scheme={scheme} />
          ))}
        </div>
      </section>

      <section>
        <SectionHeader
          title="Portal Snapshot"
          subtitle="Dummy metrics for prototype demo"
        />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <StatCard title="Registered Students" value="2.4 Lakh" />
          <StatCard title="Active Schemes" value="42" color="green" />
          <StatCard title="Approved Institutes" value="3,120" />
          <StatCard title="Disbursed Amount" value="Rs. 128 Cr" color="amber" />
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <SectionHeader
          title="How It Works"
          subtitle="4-step scholarship workflow"
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {[
            "Register/Login",
            "Apply with documents",
            "Institute & State Verification",
            "Ministry Approval & Disbursal",
          ].map((item, index) => (
            <div key={item} className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-bold text-primary">Step {index + 1}</p>
              <p className="mt-1 font-semibold text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
          <SectionHeader title="Latest Updates" />
          <ul className="space-y-2 text-sm text-slate-600">
            {updates.map((item) => (
              <li key={item} className="rounded-lg bg-slate-50 p-3">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
          <SectionHeader
            title="Helpdesk Preview"
            subtitle="Need help? Reach our support channels"
          />
          <div className="space-y-2 text-sm text-slate-600">
            <p>Helpline: 1800-120-8040</p>
            <p>Email: support@scholarflow.demo</p>
            <p>Availability: Mon-Sat | 10:00 AM - 6:00 PM</p>
            <Link
              to="/contact"
              className="inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white"
            >
              Contact Helpdesk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
