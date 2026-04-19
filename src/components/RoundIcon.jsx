export default function RoundIcon({ children, href = "#", label = "" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-800 bg-[#0b1316] text-gray-300 transition hover:bg-[#052829]"
    >
      {children}
    </a>
  );
}
