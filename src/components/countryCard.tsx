import type { Country } from "../types";

function CountryCard({ country }: { country: Country }) {
  return (
    <article>
      <img src={country.flags.svg} alt={`Flag of ${country.name}`} width={200} />
      <h2>{country.name}</h2>
      <p>Population: {country.population.toLocaleString()}</p>
      <p>Region: {country.region}</p>
      <p>Capital: {country.capital ?? "N/A"}</p>
    </article>
  );
}

export default CountryCard;