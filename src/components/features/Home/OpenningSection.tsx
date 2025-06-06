// src/components/InfosSection.tsx
export default function InfosSection() {
  const horaires = [
    { jour: 'Lundi', heures: 'Fermé' },
    { jour: 'Mardi', heures: '10:00 - 19:00' },
    { jour: 'Mercredi', heures: '10:00 - 20:00' },
    { jour: 'Jeudi', heures: '10:00 - 20:00' },
    { jour: 'Vendredi', heures: '10:00 - 20:00' },
    { jour: 'Samedi', heures: '10:00 - 18:00' },
    { jour: 'Dimanche', heures: 'Fermé' },
  ];

  return (
    <section className="bg-beige text-black py-24 px-6 border-t border-neutral-300">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Adresse */}
        <div>
          <h2 className="text-3xl font-serif mb-4">Adresse</h2>
          <p className="text-lg text-black/80">
            18 avenue Victoria<br />
            75001 Paris
          </p>
        </div>

        {/* Horaires */}
        <div>
          <h2 className="text-3xl font-serif mb-4">Horaires d'ouverture</h2>
          <div className="bg-white rounded shadow p-4 text-left text-sm">
            {horaires.map((h) => (
              <div
                key={h.jour}
                className="flex justify-between border-b last:border-none py-1"
              >
                <span>{h.jour}</span>
                <span className={h.heures === 'Fermé' ? 'text-gray-400' : 'font-medium'}>
                  {h.heures}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
