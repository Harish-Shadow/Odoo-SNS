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
    {
      id: 3,
      name: "Japan Tech Tour",
      startDate: "15 Oct 2025",
      endDate: "30 Oct 2025",
      cities: 3,
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {trips.map((trip) => (
        <TripCard key={trip.id} trip={trip} />
      ))}
    </div>
  );
}
