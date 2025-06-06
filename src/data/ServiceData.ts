import type { Service } from "../types/Service"

export const servicesData: Service[] = [
  {
    category: "Coupes & Coiffages",
    items: [
      { name: "Femme – Coupe (Bain + Coiffage)", price: "60€", duration: "1h" },
      { name: "Femme – Coupe avec Fabien", price: "90€", duration: "1h" },
      { name: "Brushing Cheveux Courts", price: "35€", duration: "30min" },
      { name: "Brushing Cheveux Longs", price: "45€", duration: "45min" },
      { note: "Remise de 10€ pour les étudiantes de -25 ans" }
    ]
  },
  {
    category: "Coupes Homme",
    items: [
      { name: "Homme – Coupe (Bain + Coiffage)", price: "45€", duration: "1h" },
      { name: "Homme – Coupe avec Fabien", price: "60€", duration: "1h" },
      { note: "Remise de 10€ pour les étudiants de -25 ans" }
    ]
  },
  {
    category: "Colorations",
    items: [
      { name: "Entretien racines", price: "48€", duration: "1h30–2h" },
      { name: "Supplément longueur", price: "à partir de 15€"},
      { name: "Patine", price: "à partir de 25€" },
      { name: "Placement", price: "à partir de 50€" },
      { name: "Décoloration ou correction", price: "Sur devis" }
    ]
  },
  {
    category: "Balayages",
    items: [
      { name: "Effet soleil", price: "à partir de 60€", duration: "1h30–2h" },
      { name: "Mèches et Balayages", price: "à partir de 120€", duration: "Prévoir 3h" }
    ]
  },
  {
    category: "Colorations végétales",
    items: [
      { name: "Coloration EOS (Wella)", price: "à partir de 68€", duration: "2h" }
    ]
  },
  {
    category: "Lissage au tanin",
    items: [
      { name: "Lissage au tanin", price: "à partir de 290€", note: "Uniquement sur devis au salon"}
    ]
  },
  {
    category: "Soins",
    items: [
      { name: "Conditioner (à prévoir avec technique)", price: "9€" },
      { name: "Masque réparateur sur mesure", price: "15€", duration: "10min" },
      { name: "Ampoule thermique Enzymo Thérapie", price: "à partir de 25€", duration: "15min" },
      { name: "Soin Tokio Inkarami – cheveux mi-longs", price: "130€", duration: "1h30" },
      { name: "Soin Tokio Inkarami – cheveux longs", price: "160€", duration: "2h" },
      { name: "HairSpa", price: "125€", duration: "2h" }
    ]
  }
];