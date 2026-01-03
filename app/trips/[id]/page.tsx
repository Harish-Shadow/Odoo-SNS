export default function TripOverviewPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-2">Europe Trip</h1>
      <p className="text-gray-600 mb-6">10 Jun – 25 Jun</p>

      <div className="flex gap-4">
        <a href="itinerary" className="underline text-blue-600">
          Itinerary
        </a>
        <a href="view" className="underline text-blue-600">
          View
        </a>
        <a href="budget" className="underline text-blue-600">
          Budget
        </a>
      </div>
    </div>
  );
}
