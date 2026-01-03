export default function ActivitiesPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4 text-foreground">
        Activities
      </h1>

      <ul className="space-y-3">
        <li className="border border-border p-3 rounded bg-card text-card-foreground">
          Eiffel Tower Visit
        </li>
        <li className="border border-border p-3 rounded bg-card text-card-foreground">
          City Food Tour
        </li>
      </ul>
    </div>
  );
}
