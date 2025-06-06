export const Dropdown = ({
  options,
  selectedOption,
  onSelect,
}: {
  options: string[];
  selectedOption: string;
  onSelect: (option: string) => void;
}) => {
  return (
         <div className="mb-8">
          <select
            value={selectedOption}
            onChange={(e) => e.target.value && onSelect(e.target.value)}
            className="w-full md:w-auto px-4 py-2 bg-[#2a2a2a] border border-white/20 text-white rounded-md shadow-sm"
          >
            {options.map((cat) => (
              <option key={cat} value={cat} className="bg-[#1e1e1e] text-white">
                {cat}
              </option>
            ))}
          </select>
        </div>
    
  );
}
