export default function ItineraryPage() {
  const cities = ["Paris", "Rome", "Berlin"];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4 text-foreground">
        Itinerary Builder
      </h1>

      <ul className="space-y-3">
        {cities.map((city) => (
          <li key={city} className="border border-border p-3 rounded bg-card text-card-foreground">
            {city}
          </li>
        ))}
      </ul>

      <button className="mt-4 bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-green-500 transition-colors font-medium">
        Add City
      </button>
    </div>
  );
}
