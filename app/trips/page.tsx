import TripList from "@/public/components/trips/TripList";

export default function TripsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">My Trips</h1>
      <TripList />
    </div>
  );
}
