import { openingDaysData } from "../../../data/OpeningDaysData";
import AdressCard from "./cards/AdressCard";
import { HoursCard } from "./cards/HoursCard";

export default function PracticalInformation() {

  return (
    <section className="bg-beige text-black py-24 px-6 border-t border-neutral-300">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        <AdressCard />
        <HoursCard openingDays={openingDaysData} />
      </div>
    </section>
  );
}
