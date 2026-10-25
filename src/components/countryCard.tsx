import type { Country } from "../types";

type CountryCardProps = {
  country: Country;
  onSelect: (code: string) => void;
};

function CountryCard({ country, onSelect }: CountryCardProps) {
  return (
    <button onClick={() => onSelect(country.alpha3Code)} className="text-left">
      <img src={country.flags.svg} alt={`Flag of ${country.name}`} width={200} />
      <h2>{country.name}</h2>
      <p>Population: {country.population.toLocaleString()}</p>
      <p>Region: {country.region}</p>
      <p>Capital: {country.capital ?? "N/A"}</p>
    </button>
  );
}

export default CountryCard;
