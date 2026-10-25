const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

type RegionFilterProps = {
  value: string;
  onChange: (value: string) => void;
};

function RegionFilter({ value, onChange }: RegionFilterProps) {
  return (
    <div>
      <label htmlFor="region" className="sr-only">
        Filter by region
      </label>
      <select
        id="region"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border p-2"
      >
        <option value="">Filter by Region</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
}

export default RegionFilter;