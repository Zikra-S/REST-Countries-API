import { useQuery } from "@tanstack/react-query";

type Country = {
  name: string;
  alpha3Code: string;
  population: number;
};

async function fetchCountries(): Promise<Country[]> {
  const response = await fetch("/data.json");
  if (!response.ok) throw new Error("Failed to fetch countries");
  return response.json();
}

function App() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["countries"],
    queryFn: fetchCountries,
  });

  if (isPending) return <p className="p-6">Loading...</p>;
  if (isError) return <p className="p-6">Something went wrong: {error.message}</p>;

  return (
    <div className="p-6">
      <p>Got {data.length} countries!</p>
      <ul>
        {data.slice(0, 5).map((country) => (
          <li key={country.alpha3Code}>
            {country.name} - {country.population.toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
