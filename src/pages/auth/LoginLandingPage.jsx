import { roleCards } from "../../utils/constants";
import QuickAccessCard from "../../components/cards/QuickAccessCard";

function LoginLandingPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-soft">
        <h1 className="text-3xl font-extrabold text-slate-800">
          Role Based Login
        </h1>
        <p className="mt-2 text-slate-600">
          Choose your portal role to continue.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {roleCards.map((card) => (
          <QuickAccessCard key={card.title} {...card} />
        ))}
      </div>
    </div>
  );
}

export default LoginLandingPage;
