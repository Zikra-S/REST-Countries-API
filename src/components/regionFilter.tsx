const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

type RegionFilterProps = {
  value: string;
  onChange: (value: string) => void;
};

function RegionFilter({ value, onChange }: RegionFilterProps) {
  return (
    <div className="relative w-[200px]">
      <label htmlFor="region" className="sr-only">
        Filter by region
      </label>

      <select
        id="region"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 w-full cursor-pointer appearance-none rounded-md bg-white pl-6 pr-10 text-xs shadow-md md:h-14 md:text-sm dark:bg-dm-elements">
        <option value="">Filter by Region</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>

      <svg
        className="pointer-events-none absolute right-6 top-1/2 size-3 -translate-y-1/2"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true">
        <path d="m6 9 6 6 6-6" />
      </svg>
    </div>
  );
}

export default RegionFilter;
