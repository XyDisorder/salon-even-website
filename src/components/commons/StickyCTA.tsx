export const StickyCTA = ({ href, text }: { href: string, text: string }) => {
  return (
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-emerald-700 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-full shadow-xl transition"
        >
          {text}
        </a>
      </div>
  )
}