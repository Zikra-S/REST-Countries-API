import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCountries } from "./api/countries";
import CountryCard from "./components/countryCard";
import CountryDetail from "./components/countryDetail";
import SearchBar from "./components/searchBar";
import RegionFilter from "./components/regionFilter";
import Header from "./components/header";

function Countries() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [selected, setSelected] = useState<string | null>(null);

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["countries"],
    queryFn: fetchCountries,
  });

  if (isPending) return <p className="p-6">Loading...</p>;
  if (isError) return <p className="p-6">Something went wrong: {error.message}</p>;

  const selectedIndex = data.findIndex((item) => item.alpha3Code === selected);
  const selectedCountry = data[selectedIndex];

  if (selectedCountry) {
    const nextCountry = data[(selectedIndex + 1) % data.length];

    return (
      <CountryDetail
        country={selectedCountry}
        countries={data}
        onBack={() => setSelected(null)}
        onNext={() => setSelected(nextCountry.alpha3Code)}
        onSelect={setSelected}
      />
    );
  }

  const filtered = data.filter((country) => {
    const matchesName = country.name.toLowerCase().includes(search.trim().toLowerCase());
    const matchesRegion = region === "" || country.region === region;

    return matchesName && matchesRegion;
  });

  return (
    <main className="mx-auto max-w-[1440px] px-4 py-6 md:px-20 md:py-12">
      <div className="flex flex-col items-start gap-10 md:flex-row md:items-center md:justify-between">
        <SearchBar value={search} onChange={setSearch} />
        <RegionFilter value={region} onChange={setRegion} />
      </div>

      {filtered.length === 0 ? (
        <p className="mt-6">No countries found</p>
      ) : (
        <div className="mt-8 grid grid-cols-[repeat(auto-fill,264px)] justify-center gap-x-6 gap-y-10 md:mt-12 md:justify-between md:gap-y-[75px]">
          {filtered.map((country) => (
            <CountryCard key={country.alpha3Code} country={country} onSelect={setSelected} />
          ))}
        </div>
      )}
    </main>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-lm-bg text-lm-text dark:bg-dm-bg dark:text-white">
      <Header />
      <Countries />
    </div>
  );
}

export default App;
