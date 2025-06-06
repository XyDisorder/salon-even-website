import type { OpeningDays } from "../../../../types/OpeningDays";

export function HoursCard({openingDays}: { openingDays: OpeningDays[] }) {
  return (
           <div>
              <h2 className="text-3xl font-serif mb-4">Horaires d'ouverture</h2>
              <div className="bg-white rounded shadow p-4 text-left text-sm">
                {openingDays.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between border-b last:border-none py-1"
                  >
                    <span>{h.day}</span>
                    <span className={h.hours === 'Fermé' ? 'text-gray-400' : 'font-medium'}>
                      {h.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
  )
}