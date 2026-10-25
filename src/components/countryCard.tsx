import type { Country } from "../types";

type CountryCardProps = {
  country: Country;
  onSelect: (code: string) => void;
};

function CountryCard({ country, onSelect }: CountryCardProps) {
  return (
    <button
      onClick={() => onSelect(country.alpha3Code)}
      className="w-[264px] cursor-pointer overflow-hidden rounded-md bg-white pb-12 text-left shadow-md transition hover:-translate-y-1 hover:shadow-lg dark:bg-dm-elements">
      <img src={country.flags.svg} alt={`Flag of ${country.name}`} loading="lazy" className="h-40 w-full object-cover" />

      <div className="px-6 pt-6">
        <h2 className="mb-4 text-lg font-extrabold">{country.name}</h2>

        <p className="mb-2 text-sm">
          <span className="font-semibold">Population:</span> <span className="font-light">{country.population.toLocaleString()}</span>
        </p>
        <p className="mb-2 text-sm">
          <span className="font-semibold">Region:</span> <span className="font-light">{country.region}</span>
        </p>
        <p className="text-sm">
          <span className="font-semibold">Capital:</span> <span className="font-light">{country.capital ?? "N/A"}</span>
        </p>
      </div>
    </button>
  );
}

export default CountryCard;
