export default function SettingsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">
        Settings
      </h1>

      <div className="space-y-4 max-w-md">
        <div>
          <label className="block text-sm font-medium mb-1">
            Language
          </label>
          <select className="w-full border px-3 py-2 rounded">
            <option>English</option>
            <option>French</option>
          </select>
        </div>

        <button className="bg-black text-white px-4 py-2 rounded">
          Save Settings
        </button>
      </div>
    </div>
  );
}
