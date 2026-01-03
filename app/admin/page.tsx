export default function AdminPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">
        Admin Dashboard
      </h1>

      <ul className="space-y-2">
        <li>
          <a href="/admin/analytics" className="underline text-blue-600">
            View Analytics
          </a>
        </li>
        <li>User Management (coming soon)</li>
        <li>Platform Settings (coming soon)</li>
      </ul>
    </div>
  );
}
