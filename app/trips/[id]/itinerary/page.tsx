export default function ItineraryPage() {
  const cities = ["Paris", "Rome", "Berlin"];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">
        Itinerary Builder
      </h1>

      <ul className="space-y-3">
        {cities.map((city) => (
          <li key={city} className="border p-3 rounded bg-white">
            {city}
          </li>
        ))}
      </ul>

      <button className="mt-4 bg-black text-white px-4 py-2 rounded">
        Add City
      </button>
    </div>
  );
}
