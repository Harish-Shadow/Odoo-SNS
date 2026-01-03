export default function SettingsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4 text-foreground">
        Settings
      </h1>

      <div className="space-y-4 max-w-md">
        <div>
          <label className="block text-sm font-medium mb-1 text-foreground">
            Language
          </label>
          <select className="w-full border border-border bg-secondary text-foreground px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary">
            <option>English</option>
            <option>French</option>
          </select>
        </div>

        <button className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-green-500 transition-colors font-medium">
          Save Settings
        </button>
      </div>
    </div>
  );
}
