type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full md:w-[480px]">
      <label htmlFor="search" className="sr-only">
        Search for a country
      </label>

      <svg
        className="absolute left-6 top-1/2 size-4 -translate-y-1/2 text-lm-input md:left-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden="true">
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </svg>

      <input
        id="search"
        type="search"
        placeholder="Search for a country..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 w-full rounded-md bg-white pl-14 pr-4 text-xs shadow-md placeholder:text-lm-input md:h-14 md:pl-18 md:text-sm dark:bg-dm-elements dark:placeholder:text-white"
      />
    </div>
  );
}

export default SearchBar;
