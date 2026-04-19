export default function SocialButton({ children, href = "#", ariaLabel }) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-800 bg-[#0b1316] text-gray-300 transition hover:scale-105 hover:bg-violet-400/5"
    >
      {children}
    </a>
  );
}
