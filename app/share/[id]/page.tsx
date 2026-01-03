export default function SharedTripPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4 text-foreground">
        Shared Trip
      </h1>

      <p className="text-muted-foreground mb-4">
        This is a public, read-only itinerary.
      </p>

      <div className="bg-card border border-border rounded-lg p-4">
        <h2 className="font-medium text-card-foreground">Paris → Rome → Berlin</h2>
      </div>
    </div>
  );
}
