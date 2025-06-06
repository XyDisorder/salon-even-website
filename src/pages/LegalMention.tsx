// src/pages/MentionsLegales.tsx
export default function LegalMention() {
  return (
    <section className="bg-[#1e1e1e] text-white px-6 pt-24 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-serif text-center mb-8">Mentions légales</h1>

        <div>
          <h2 className="text-xl font-semibold mb-2">Éditeur du site</h2>
          <p>
            Salon Even – Fabien EVEN<br />
            18 avenue Victoria, 75001 Paris<br />
            SIRET : 93 217 423 800 018<br />
            Responsable de la publication : Fabien EVEN
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Hébergement</h2>
          <p>
            Le site est hébergé par : Netlify, Inc.<br />
            2325 3rd Street, Suite 296, San Francisco, California 94107<br />
            <a
              href="https://www.netlify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-emerald-400"
            >
              www.netlify.com
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p>
            Pour toute question, vous pouvez nous contacter à l’adresse suivante :
            <a href="mailto:salon.even.paris@gmail.com" className="underline ml-1 hover:text-emerald-400">
               salon.even.paris@gmail.com
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Propriété intellectuelle</h2>
          <p>
            Le contenu de ce site (textes, images, design, etc.) est la propriété de Salon Even et ne peut être utilisé sans autorisation préalable.
          </p>
        </div>
      </div>
    </section>
  );
}
