export default function TripViewPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">
        Trip Overview
      </h1>

      <div className="space-y-4">
        <div>
          <h2 className="font-medium">Day 1 – Paris</h2>
          <p className="text-sm text-gray-600">
            Eiffel Tower, City Walk
          </p>
        </div>

        <div>
          <h2 className="font-medium">Day 2 – Rome</h2>
          <p className="text-sm text-gray-600">
            Colosseum Visit
          </p>
        </div>
      </div>
    </div>
  );
}
