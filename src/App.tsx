import { useQuery } from "@tanstack/react-query";

type Country = {
  name: { common: string };
  cca3: string;
};

async function fetchCountries(): Promise<Country[]> {
  const response = await fetch("https://restcountries.com/v3.1/all?fields=name,cca3");
  if (!response.ok) throw new Error("Failed to fetch countries");
  return response.json();
}

function App() {
  const { data, isPending, isError } = useQuery({
    queryKey: ["countries"],
    queryFn: fetchCountries,
  });

  if (isPending) return <p className="p-6">Loading...</p>;
  if (isError) return <p className="p-6">Something went wrong</p>;

  return (
    <div className="p-6">
      <p>Got {data.length} countries!</p>
      <ul>
        {data.slice(0, 5).map((country) => (
          <li key={country.cca3}>{country.name.common}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
