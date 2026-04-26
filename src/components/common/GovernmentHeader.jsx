import { Volume2, MessageSquare, LifeBuoy } from "lucide-react";

export default function GovernmentHeader() {
  return (
    <div className="bg-white border-b border-slate-200">
      {/* Top Bar */}
      <div className="px-3 md:px-8 py-2 md:py-4 flex justify-between items-center border-b border-slate-100">
        <div className="flex items-center gap-2 md:gap-4">
          {/* Ashok Chakra Logo */}
          <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-lg md:text-2xl font-bold text-white shadow-md">
            ☸
          </div>

          {/* Portal Title */}
          <div className="hidden sm:block">
            <h1 className="text-sm md:text-xl font-black text-slate-900">
              National Scholarship Portal
            </h1>
            <p className="text-xs text-slate-500 font-semibold">
              Academic Year 2025-26
            </p>
          </div>

          {/* Digital India Logo */}
          <div className="ml-auto md:ml-6 px-2 md:px-4 py-1 md:py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-bold rounded-lg shadow-sm">
            🇮🇳 Digital India
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="hidden lg:flex items-center gap-8 ml-auto">
          <a
            href="#faqs"
            className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition text-sm font-semibold"
          >
            <MessageSquare size={20} />
            <span>FAQs</span>
          </a>
          <a
            href="#announcements"
            className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition text-sm font-semibold"
          >
            <Volume2 size={20} />
            <span>Announcements</span>
          </a>
          <a
            href="#helpdesk"
            className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition text-sm font-semibold"
          >
            <LifeBuoy size={20} />
            <span>Helpdesk</span>
          </a>
        </div>
      </div>

      {/* Accessibility Bar */}
      <div className="px-3 md:px-8 py-2 md:py-3 flex flex-wrap justify-between items-center gap-2 md:gap-4 bg-gradient-to-r from-slate-50 to-blue-50 border-b border-slate-100">
        <div className="flex items-center gap-1 md:gap-3 text-xs">
          <span className="text-slate-700 font-semibold hidden md:inline">🔤 Text Size:</span>
          <span className="text-slate-700 font-semibold md:hidden text-[10px]">Size:</span>
          <button className="px-2 md:px-3 py-0.5 md:py-1 bg-slate-300 hover:bg-blue-500 hover:text-white text-slate-800 rounded font-bold transition text-xs">
            A+
          </button>
          <button className="px-2 md:px-3 py-0.5 md:py-1 bg-slate-300 hover:bg-blue-500 hover:text-white text-slate-800 rounded font-bold transition text-xs">
            A
          </button>
          <button className="px-2 md:px-3 py-0.5 md:py-1 bg-slate-300 hover:bg-blue-500 hover:text-white text-slate-800 rounded font-bold transition text-xs">
            A-
          </button>
        </div>

        <div className="flex items-center gap-1 md:gap-2">
          <span className="text-xs text-slate-700 font-semibold hidden md:inline">Language:</span>
          <span className="text-xs text-slate-700 font-semibold md:hidden">Lang:</span>
          <select className="text-xs border border-slate-400 rounded px-1.5 md:px-2 py-0.5 md:py-1 bg-white text-slate-800 hover:border-blue-400 cursor-pointer font-medium">
            <option>English</option>
            <option>हिन्दी</option>
          </select>
        </div>

        <a
          href="#skip"
          className="text-xs text-blue-600 hover:text-blue-800 underline font-bold hidden md:inline"
        >
          ⬇️ Skip to Main Content
        </a>
      </div>
    </div>
  );
}
