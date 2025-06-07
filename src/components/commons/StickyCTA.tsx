export const StickyCTA = ({ href, text }: { href: string; text: string }) => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-full px-4 md:px-0">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center max-w-xs mx-auto bg-emerald-700 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-full shadow-xl transition whitespace-nowrap"
      >
        {text}
      </a>
    </div>
  );
};