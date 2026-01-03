import Link from 'next/link';
import TripList from "@/public/components/trips/TripList";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8 font-sans selection:bg-primary/30">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">
                Dashboard
              </span>
            </h1>
            <p className="text-muted">Manage your trips and adventures.</p>
          </div>

          <Link
            href="/trips/new"
            className="group relative inline-flex items-center gap-2 px-6 py-3 bg-card border border-primary/30 rounded-full text-primary font-medium hover:bg-primary/10 hover:border-primary transition-all"
          >
            <span className="text-lg leading-none">+</span>
            <span>Create New Trip</span>
            <div className="absolute inset-0 rounded-full ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all"></div>
          </Link>
        </header>

        <TripList />
      </div>
    </div>
  );
}
