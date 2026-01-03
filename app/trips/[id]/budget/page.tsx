export default function BudgetPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Budget</h1>

      <p className="mb-4">Total Estimated Cost: ₹80,000</p>

      <ul className="space-y-2">
        <li>Flights: ₹30,000</li>
        <li>Stay: ₹35,000</li>
        <li>Activities: ₹15,000</li>
      </ul>
    </div>
  );
}
