import { Link } from "react-router-dom";

function QuickAccessCard({
  title,
  description,
  to,
  icon: Icon,
  gradientStart,
  gradientEnd,
}) {
  return (
    <Link
      to={to}
      className="rounded-2xl p-4 md:p-6 shadow-soft transition hover:-translate-y-2 hover:shadow-xl overflow-hidden group"
      style={{
        background: `linear-gradient(135deg, ${gradientStart} 0%, ${gradientEnd} 100%)`,
      }}
    >
      <div className="mb-3 md:mb-4 inline-flex rounded-xl bg-white/20 p-3 md:p-4 text-white group-hover:bg-white/30 transition">
        <Icon size={24} className="md:w-8 md:h-8" />
      </div>
      <h3 className="text-lg md:text-2xl font-bold text-white drop-shadow-md">{title}</h3>
      <p className="mt-1 md:mt-2 text-xs md:text-sm text-white/95 drop-shadow-md">{description}</p>
      <div className="mt-3 md:mt-5 text-xs md:text-sm font-bold text-white/90 group-hover:text-white transition">
        👉 Click to Login →
      </div>
    </Link>
  );
}

export default QuickAccessCard;
