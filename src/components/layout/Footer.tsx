// src/components/layout/Footer.tsx
export default function Footer() {
  return (
<footer className="bg-[#111111] text-neutral-400 text-sm border-t border-white/10 px-6 py-8 mt-24">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-y-4 text-sm">

    {/* Bloc gauche */}
    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
      <div className="text-white font-semibold">
        Salon Even{" "}
        <span className="text-neutral-400 font-normal ml-2">
          18 avenue Victoria, 75001 Paris
        </span>
      </div>

      <a
        href="https://www.instagram.com/salon.even"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 hover:text-white transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5Zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5Zm8.5 2.25a.75.75 0 1 0 0 1.5h.007a.75.75 0 0 0 0-1.5H16.25ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z" />
        </svg>
        @salon.even
      </a>
    </div>

    {/* Bloc centre */}
    <div className="text-center hidden md:block">
      &copy; {new Date().getFullYear()} Salon Even. Tous droits réservés.
    </div>

    {/* Bloc droite */}
    <div className="text-right text-neutral-500">
      Site conçu avec ❤️ par{" "}
      <a
        href="https://github.com/XyDisorder"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-white transition"
      >
        @XyDisorder
      </a>
    </div>
  </div>

  {/* Bloc centre en mobile */}
  <div className="text-center md:hidden mt-6">
    &copy; {new Date().getFullYear()} Salon Even. Tous droits réservés.
  </div>
</footer>
  );
}