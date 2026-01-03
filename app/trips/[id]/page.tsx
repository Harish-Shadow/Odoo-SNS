import Link from "next/link";

export default async function TripOverviewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-2 text-foreground">Europe Trip</h1>
      <p className="text-muted-foreground mb-6">10 Jun – 25 Jun</p>

      <div className="flex flex-wrap gap-4">
        <Link href={`/trips/${id}/itinerary`} className="px-6 py-3 rounded-lg bg-card text-card-foreground border border-border hover:border-primary transition-all text-center font-medium shadow-sm hover:shadow-md">
          Itinerary
        </Link>
        <Link href={`/trips/${id}/view`} className="px-6 py-3 rounded-lg bg-card text-card-foreground border border-border hover:border-primary transition-all text-center font-medium shadow-sm hover:shadow-md">
          View
        </Link>
        <Link href={`/trips/${id}/budget`} className="px-6 py-3 rounded-lg bg-card text-card-foreground border border-border hover:border-primary transition-all text-center font-medium shadow-sm hover:shadow-md">
          Budget
        </Link>
        <Link href={`/trips/${id}/activities`} className="px-6 py-3 rounded-lg bg-card text-card-foreground border border-border hover:border-primary transition-all text-center font-medium shadow-sm hover:shadow-md">
          Activities
        </Link>
      </div>
    </div>
  );
}
