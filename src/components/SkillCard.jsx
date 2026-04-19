export default function SkillCard({ icon, title, desc, delay = 0 }) {
  return (
    <div
      className="group bg-[#11161c] border border-gray-800 rounded-2xl p-6 hover:border-violet-400/40 transition duration-300 shadow-lg hover:shadow-violet-500/10"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-violet-400/10 text-violet-400 mb-4 group-hover:scale-110 transition">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
    </div>
  );
}
