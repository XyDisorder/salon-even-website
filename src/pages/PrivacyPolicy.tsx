export default function PrivacyPolicy() {
  return (
    <section className="bg-[#1e1e1e] text-white px-6 pt-24 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-serif text-center mb-8">Politique de confidentialité</h1>

        <div>
          <h2 className="text-xl font-semibold mb-2">1. Données collectées</h2>
          <p>
            Le site <strong>saloneven.fr</strong> ne collecte aucune donnée personnelle directement. Aucune information n’est stockée ni exploitée à des fins commerciales.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">2. Cookies</h2>
          <p>
            Ce site n'utilise pas de cookies à des fins de suivi ou d’analyse.
            Si cela venait à évoluer (par exemple via Google Analytics), une bannière d'information et un consentement explicite seraient mis en place conformément au RGPD.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. Services tiers</h2>
          <p>
            Le site redirige les visiteurs vers la plateforme <a
              href="https://www.planity.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-emerald-400"
            >Planity</a> pour la prise de rendez-vous. Cette plateforme dispose de sa propre politique de confidentialité. Nous vous invitons à la consulter directement sur leur site.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">4. Contact</h2>
          <p>
            Pour toute question relative à la protection de vos données, vous pouvez nous écrire à l’adresse suivante :
            <a href="mailto:contact@saloneven.fr" className="underline ml-1 hover:text-emerald-400">
              contact@saloneven.fr
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
