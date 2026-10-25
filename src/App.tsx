import { useQuery } from "@tanstack/react-query";
import { fetchCountries } from "./api/countries";
import CountryCard from "./components/countryCard";

function App() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["countries"],
    queryFn: fetchCountries,
  });

  if (isPending) return <p className="p-6">Loading...</p>;
  if (isError) return <p className="p-6">Something went wrong: {error.message}</p>;

  return (
    <main className="grid gap-6 p-6 md:grid-cols-4">
      {data.map((country) => (
        <CountryCard key={country.alpha3Code} country={country} />
      ))}
    </main>
  );
}

export default App;
