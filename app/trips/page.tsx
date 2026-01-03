import TripList from "@/public/components/trips/TripList";
import Link from 'next/link';

export default function TripsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">
                My Trips
              </span>
            </h1>
            <p className="text-muted">Manage your planned adventures and itineraries.</p>
          </div>

          <Link
            href="/trips/new"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
          >
            + New Trip
          </Link>
        </header>

        <TripList />
      </div>
    </div>
  );
}
