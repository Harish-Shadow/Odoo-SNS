export default function BudgetPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4 text-foreground">Budget</h1>

      <p className="mb-4 text-xl font-medium text-primary">Total Estimated Cost: ₹80,000</p>

      <ul className="space-y-2">
        <li className="border border-border p-3 rounded bg-card text-card-foreground flex justify-between">
          <span>Flights</span>
          <span>₹30,000</span>
        </li>
        <li className="border border-border p-3 rounded bg-card text-card-foreground flex justify-between">
          <span>Stay</span>
          <span>₹35,000</span>
        </li>
        <li className="border border-border p-3 rounded bg-card text-card-foreground flex justify-between">
          <span>Activities</span>
          <span>₹15,000</span>
        </li>
      </ul>
    </div>
  );
}
