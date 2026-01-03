export default function SharedTripPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">
        Shared Trip
      </h1>

      <p className="text-gray-600 mb-4">
        This is a public, read-only itinerary.
      </p>

      <div>
        <h2 className="font-medium">Paris → Rome → Berlin</h2>
      </div>
    </div>
  );
}
