import TripList from "@/public/components/trips/TripList";

export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>

      <a
        href="/trips/new"
        className="inline-block mb-6 bg-black text-white px-4 py-2 rounded"
      >
        Create New Trip
      </a>

      <TripList />
    </div>
  );
}
