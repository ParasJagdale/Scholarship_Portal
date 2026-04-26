export default function MarqueeNotification({ messages = [] }) {
  if (messages.length === 0) return null;

  const marqueeText = messages.join(" • ");

  return (
    <div className="overflow-hidden bg-gradient-to-r from-red-600 to-red-700 text-white py-2 md:py-4 shadow-lg border-b-4 border-red-800">
      <div className="flex items-center gap-2 md:gap-3 px-3 md:px-4">
        <span className="text-lg md:text-2xl font-bold whitespace-nowrap animate-bounce">📢</span>
        <div className="relative flex overflow-hidden flex-1">
          <div className="animate-marquee whitespace-nowrap text-xs md:text-base font-bold">
            <span className="inline-block px-3 md:px-4">{marqueeText}</span>
            <span className="inline-block px-3 md:px-4">{marqueeText}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
