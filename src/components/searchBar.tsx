type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div>
      <label htmlFor="search" className="sr-only">
        Search for a country
      </label>
      <input
        id="search"
        type="search"
        placeholder="Search for a country..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border p-2"
      />
    </div>
  );
}

export default SearchBar;