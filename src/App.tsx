import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCountries } from "./api/countries";
import CountryCard from "./components/countryCard";
import SearchBar from "./components/searchBar";

function App() {
  const [search, setSearch] = useState("");

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["countries"],
    queryFn: fetchCountries,
  });

  if (isPending) return <p className="p-6">Loading...</p>;
  if (isError) return <p className="p-6">Something went wrong: {error.message}</p>;

  const filtered = data.filter((country) =>
    country.name.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <main className="p-6">
      <SearchBar value={search} onChange={setSearch} />

      {filtered.length === 0 ? (
        <p className="mt-6">No countries found</p>
      ) : (
        <div className="mt-6 grid gap-6 md:grid-cols-4">
          {filtered.map((country) => (
            <CountryCard key={country.alpha3Code} country={country} />
          ))}
        </div>
      )}
    </main>
  );
}

export default App;