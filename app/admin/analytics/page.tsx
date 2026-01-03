export default function AdminAnalyticsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">
        Platform Analytics
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border p-4 rounded bg-white">
          <h2 className="text-sm text-gray-600">
            Total Users
          </h2>
          <p className="text-xl font-semibold">120</p>
        </div>

        <div className="border p-4 rounded bg-white">
          <h2 className="text-sm text-gray-600">
            Trips Created
          </h2>
          <p className="text-xl font-semibold">340</p>
        </div>

        <div className="border p-4 rounded bg-white">
          <h2 className="text-sm text-gray-600">
            Popular Cities
          </h2>
          <p className="text-xl font-semibold">Paris, Rome</p>
        </div>
      </div>
    </div>
  );
}
