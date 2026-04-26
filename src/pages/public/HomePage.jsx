import { Link } from "react-router-dom";
import { roleCards } from "../../utils/constants";
import QuickAccessCard from "../../components/cards/QuickAccessCard";
import SectionHeader from "../../components/common/SectionHeader";
import SchemeCard from "../../components/cards/SchemeCard";
import StatCard from "../../components/cards/StatCard";
import MarqueeNotification from "../../components/common/MarqueeNotification";
import GovernmentHeader from "../../components/common/GovernmentHeader";
import StatisticsTicker from "../../components/common/StatisticsTicker";
import GuidelinesBox from "../../components/common/GuidelinesBox";
import { mockSchemes } from "../../data/mockSchemes";

const updates = [
  "AY 2026-27 applications open from 30 June 2026.",
  "Income certificate upload mandatory for all income-based schemes.",
  "Institute verification timeline reduced to 10 working days.",
];

function HomePage() {
  return (
    <>
      <GovernmentHeader />
      <MarqueeNotification
        messages={[
          "AY 2026-27 applications open from 30 June 2026",
          "Income certificate upload mandatory for all income-based schemes",
          "Institute verification timeline reduced to 10 working days",
        ]}
      />
      <StatisticsTicker />
      <div className="space-y-4 md:space-y-6 lg:space-y-10">
        <section className="rounded-2xl md:rounded-3xl bg-gradient-to-r from-primary to-[#1b7ecf] p-4 md:p-8 lg:p-12 text-white shadow-soft mt-4 md:mt-6">
          <p className="mb-2 text-xs md:text-sm uppercase tracking-wider text-white/80">
            Government Tech Scholarship Case Study
          </p>
          <h1 className="max-w-3xl text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            ScholarFlow - National Scholarship Portal
          </h1>
          <p className="mt-3 md:mt-4 max-w-2xl text-sm md:text-base text-white/90">
            Unified scholarship discovery, application and approval workflow for
            Students, Institutes, State Nodal Officers and Ministry Admin.
          </p>
          <div className="mt-4 md:mt-6 flex flex-wrap gap-2 md:gap-3">
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
          <div className="grid grid-cols-1 gap-3 md:gap-4 sm:grid-cols-2 xl:grid-cols-4">
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
          <div className="grid grid-cols-1 gap-3 md:gap-4 md:grid-cols-2">
            {mockSchemes.slice(0, 4).map((scheme) => (
              <SchemeCard key={scheme.id} scheme={scheme} />
            ))}
          </div>
        </section>

        <GuidelinesBox />

        <section>
          <SectionHeader
            title="Portal Snapshot"
            subtitle="Dummy metrics for prototype demo"
          />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <StatCard title="Registered Students" value="2.4 Lakh" />
            <StatCard title="Active Schemes" value="42" color="green" />
            <StatCard title="Approved Institutes" value="3,120" />
            <StatCard
              title="Disbursed Amount"
              value="Rs. 128 Cr"
              color="amber"
            />
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-4 md:p-6 shadow-soft">
          <SectionHeader
            title="How It Works"
            subtitle="4-step scholarship workflow"
          />
          <div className="grid grid-cols-1 gap-3 md:gap-4 sm:grid-cols-2 md:grid-cols-4">
            {[
              {
                title: "Register/Login",
                icon: "📝",
                color: "from-blue-50 to-blue-100",
              },
              {
                title: "Apply with documents",
                icon: "📋",
                color: "from-purple-50 to-purple-100",
              },
              {
                title: "Institute & State Verification",
                icon: "✅",
                color: "from-green-50 to-green-100",
              },
              {
                title: "Ministry Approval & Disbursal",
                icon: "💰",
                color: "from-orange-50 to-orange-100",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center"
              >
                <div
                  className={`mb-2 md:mb-3 w-16 md:w-20 h-16 md:h-20 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl md:text-4xl shadow-md`}
                >
                  {item.icon}
                </div>
                <p className="text-xs font-bold text-primary mb-0.5 md:mb-1">
                  Step {index + 1}
                </p>
                <p className="font-semibold text-slate-700 text-sm">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 md:mt-6 flex items-center justify-center gap-2 text-xs md:text-sm text-slate-600 bg-blue-50 rounded-lg p-2 md:p-3">
            <span className="text-base md:text-lg">→</span>
            <span>
              Complete all steps to receive scholarship directly in your bank
              account
            </span>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-3 md:gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-6 shadow-soft">
            <SectionHeader title="Latest Updates" />
            <ul className="space-y-2 text-sm text-slate-600">
              {updates.map((item) => (
                <li
                  key={item}
                  className="rounded-lg bg-slate-50 p-2 md:p-3 text-xs md:text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-6 shadow-soft">
            <SectionHeader
              title="Helpdesk Preview"
              subtitle="Need help? Reach our support channels"
            />
            <div className="space-y-2 text-xs md:text-sm text-slate-600">
              <p>Helpline: 1800-120-8040</p>
              <p>Email: support@scholarflow.demo</p>
              <p>Availability: Mon-Sat | 10:00 AM - 6:00 PM</p>
              <Link
                to="/contact"
                className="inline-flex rounded-lg bg-primary px-3 md:px-4 py-2 text-xs md:text-sm font-semibold text-white"
              >
                Contact Helpdesk
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HomePage;
