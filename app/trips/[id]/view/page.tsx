export default function TripViewPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4 text-foreground">
        Trip Overview
      </h1>

      <div className="space-y-4">
        <div className="bg-card border border-border rounded-lg p-4">
          <h2 className="font-medium text-card-foreground">Day 1 – Paris</h2>
          <p className="text-sm text-muted-foreground">
            Eiffel Tower, City Walk
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-4">
          <h2 className="font-medium text-card-foreground">Day 2 – Rome</h2>
          <p className="text-sm text-muted-foreground">
            Colosseum Visit
          </p>
        </div>
      </div>
    </div>
  );
}
