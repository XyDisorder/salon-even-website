export default function AdressCard() {
  return (
        <div className="bg-white rounded-3xl shadow-md p-6 border border-gray-200 max-w-md">
          <h2 className="text-3xl font-serif mb-4 text-neutral-800">📍 Adresse</h2>
          <p className="text-lg text-neutral-600 leading-relaxed tracking-wide">
            <span className="block font-medium text-black">Salon Even</span>
            18 avenue Victoria<br />
            75001 Paris<br />
            <span className="text-sm text-neutral-500 mt-1 block">Métro Châtelet </span>
          </p>
        </div>
  );
}