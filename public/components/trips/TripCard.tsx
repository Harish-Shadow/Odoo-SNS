export default function TripCard({ trip }: any) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm">
      <h2 className="text-lg font-semibold mb-1">
        {trip.name}
      </h2>

      <p className="text-sm text-gray-600 mb-3">
        {trip.startDate} – {trip.endDate}
      </p>

      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">
          {trip.cities} cities
        </span>

        <a
          href={`/trips/${trip.id}`}
          className="text-sm text-blue-600 underline"
        >
          View Trip
        </a>
      </div>
    </div>
  );
}
