import SectionHeader from "../../components/common/SectionHeader";

function AboutPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <SectionHeader
          title="About ScholarFlow"
          subtitle="National Scholarship Portal Case Study"
        />
        <p className="text-slate-600">
          ScholarFlow is a frontend prototype that simulates a transparent,
          role-based scholarship system for Indian students and governance
          stakeholders.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
          <h3 className="text-xl font-bold text-slate-800">Mission</h3>
          <p className="mt-2 text-slate-600">
            To make scholarship access seamless, inclusive and traceable from
            application to final approval.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
          <h3 className="text-xl font-bold text-slate-800">Vision</h3>
          <p className="mt-2 text-slate-600">
            To create a digital-first aid ecosystem that supports learners
            through data-driven transparency.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <h3 className="text-xl font-bold text-slate-800">Benefits</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
          <li>Unified portal for all stakeholders.</li>
          <li>Fast scholarship discovery with categorized schemes.</li>
          <li>Trackable workflow for every application stage.</li>
          <li>
            Scalable module-driven architecture for future backend integration.
          </li>
        </ul>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {["Student", "Institute", "State Nodal Officer", "Ministry Admin"].map(
          (role) => (
            <article
              key={role}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft"
            >
              <h4 className="text-lg font-bold text-primary">{role}</h4>
              <p className="mt-2 text-sm text-slate-600">
                Role-specific dashboard and workflow controls are available in
                this demo.
              </p>
            </article>
          ),
        )}
      </section>
    </div>
  );
}

export default AboutPage;
