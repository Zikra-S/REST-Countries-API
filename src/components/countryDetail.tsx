import type { Country } from "../types";

type CountryDetailProps = {
  country: Country;
  countries: Country[];
  onBack: () => void;
  onNext: () => void;
  onSelect: (code: string) => void;
};

function CountryDetail({ country, countries, onBack, onNext, onSelect }: CountryDetailProps) {
  const borders = countries.filter((item) => country.borders?.includes(item.alpha3Code));

  const currencies = country.currencies?.map((item) => item.name).join(", ");
  const languages = country.languages.map((item) => item.name).join(", ");

  return (
    <main className="p-6">
      <div className="flex items-center justify-between">
        <button onClick={onBack} className="border px-4 py-2">
          Back
        </button>

        <button onClick={onNext} aria-label="Next country" className="border px-4 py-2">
          Next →
        </button>
      </div>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <img src={country.flags.svg} alt={`Flag of ${country.name}`} />

        <div>
          <h1 className="text-2xl font-bold">{country.name}</h1>

          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <ul className="grid gap-2">
              <li>
                <strong>Native Name:</strong> {country.nativeName}
              </li>
              <li>
                <strong>Population:</strong> {country.population.toLocaleString()}
              </li>
              <li>
                <strong>Region:</strong> {country.region}
              </li>
              <li>
                <strong>Sub Region:</strong> {country.subregion}
              </li>
              <li>
                <strong>Capital:</strong> {country.capital ?? "N/A"}
              </li>
            </ul>

            <ul className="grid gap-2">
              <li>
                <strong>Top Level Domain:</strong> {country.topLevelDomain.join(", ")}
              </li>
              <li>
                <strong>Currencies:</strong> {currencies ?? "N/A"}
              </li>
              <li>
                <strong>Languages:</strong> {languages}
              </li>
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            <h2 className="font-bold">Border Countries:</h2>

            {borders.length === 0 ? (
              <span>None</span>
            ) : (
              borders.map((item) => (
                <button key={item.alpha3Code} onClick={() => onSelect(item.alpha3Code)} className="border px-3 py-1">
                  {item.name}
                </button>
              ))
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default CountryDetail;
