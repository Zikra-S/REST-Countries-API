import type { Country } from "../types";

type CountryDetailProps = {
  country: Country;
  countries: Country[];
  onBack: () => void;
  onNext: () => void;
  onSelect: (code: string) => void;
};

const buttonStyle =
  "inline-flex h-8 cursor-pointer items-center gap-2 rounded-sm bg-white px-6 text-sm shadow-md md:h-10 md:px-8 dark:bg-dm-elements";

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <li>
      <span className="font-semibold">{label}:</span> <span className="font-light">{value}</span>
    </li>
  );
}

function CountryDetail({ country, countries, onBack, onNext, onSelect }: CountryDetailProps) {
  const borders = countries.filter((item) => country.borders?.includes(item.alpha3Code));

  const currencies = country.currencies?.map((item) => item.name).join(", ");
  const languages = country.languages.map((item) => item.name).join(", ");

  return (
    <main className="mx-auto max-w-[1440px] px-7 py-10 md:px-20 md:py-20">
      <div className="flex items-center justify-between">
        <button onClick={onBack} className={buttonStyle}>
          <svg
            className="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true">
            <path d="M19 12H5" />
            <path d="m12 19-7-7 7-7" />
          </svg>
          Back
        </button>

        <button onClick={onNext} className={buttonStyle}>
          Next
          <svg
            className="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="mt-16 grid gap-12 md:mt-20 md:grid-cols-2 md:items-center md:gap-16 lg:gap-[120px]">
        <img src={country.flags.svg} alt={`Flag of ${country.name}`} className="w-full rounded-sm shadow-md" />

        <div>
          <h1 className="text-[22px] font-extrabold md:text-[32px]">{country.name}</h1>

          <div className="mt-6 grid gap-10 md:mt-8 md:grid-cols-2 md:gap-x-16">
            <ul className="grid gap-2">
              <InfoRow label="Native Name" value={country.nativeName} />
              <InfoRow label="Population" value={country.population.toLocaleString()} />
              <InfoRow label="Region" value={country.region} />
              <InfoRow label="Sub Region" value={country.subregion} />
              <InfoRow label="Capital" value={country.capital ?? "N/A"} />
            </ul>

            <ul className="grid content-start gap-2">
              <InfoRow label="Top Level Domain" value={country.topLevelDomain.join(", ")} />
              <InfoRow label="Currencies" value={currencies ?? "N/A"} />
              <InfoRow label="Languages" value={languages} />
            </ul>
          </div>

          <div className="mt-10 flex flex-col gap-4 md:mt-16 md:flex-row md:items-center">
            <h2 className="font-semibold">Border Countries:</h2>

            {borders.length === 0 ? (
              <span className="font-light">None</span>
            ) : (
              <div className="flex flex-wrap gap-2.5">
                {borders.map((item) => (
                  <button
                    key={item.alpha3Code}
                    onClick={() => onSelect(item.alpha3Code)}
                    className="cursor-pointer rounded-sm bg-white px-6 py-1 text-sm font-light shadow-md dark:bg-dm-elements">
                    {item.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default CountryDetail;
