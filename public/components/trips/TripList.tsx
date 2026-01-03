import TripCard from "./TripCard";

export default function TripList() {
  const trips = [
    {
      id: 1,
      name: "Europe Backpacking",
      startDate: "10 Jun 2025",
      endDate: "25 Jun 2025",
      cities: 4,
    },
    {
      id: 2,
      name: "Goa Vacation",
      startDate: "5 Jul 2025",
      endDate: "10 Jul 2025",
      cities: 2,
    },
  ];

  return (
    <div className="grid gap-4">
      {trips.map((trip) => (
        <TripCard key={trip.id} trip={trip} />
      ))}
    </div>
  );
}
