export default function InfoCard({
  icon,
  title,
  lines = [],
  highlight,
  delay = 0,
}) {
  return (
    <div
      className="flex items-start gap-4 rounded-2xl border border-gray-800 bg-white/[0.02] p-6 shadow-sm"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-violet-400/10 text-violet-500">
        {icon}
      </div>

      <div>
        <h4 className="text-white font-semibold">{title}</h4>
        <div className="text-sm text-gray-400 mt-2 space-y-1">
          {lines.map((l, i) =>
            highlight && l === highlight ? (
              <div key={i} className="text-violet-400 font-medium">
                {l}
              </div>
            ) : (
              <div key={i}>{l}</div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
