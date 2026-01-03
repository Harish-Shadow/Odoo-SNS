export default function TimelinePage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4 text-foreground">
        Trip Timeline
      </h1>

      <div className="space-y-4">
        <div className="border border-border p-3 rounded bg-card text-card-foreground">
          Day 1 – Paris
        </div>
        <div className="border border-border p-3 rounded bg-card text-card-foreground">
          Day 2 – Rome
        </div>
      </div>
    </div>
  );
}
