"use client";

export default function ProfileCard() {
  return (
    <div className="max-w-md bg-white border rounded-xl p-6 shadow-sm">
      {/* Avatar */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center text-xl font-semibold text-gray-700">
          S
        </div>

        <div>
          <h2 className="text-lg font-semibold">Sunil Kumar</h2>
          <p className="text-sm text-gray-600">sunil@example.com</p>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Role</span>
          <span className="font-medium">Traveler</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">Trips Planned</span>
          <span className="font-medium">3</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">Member Since</span>
          <span className="font-medium">2025</span>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-6 flex gap-3">
        <button className="flex-1 border border-black py-2 rounded">
          Edit Profile
        </button>

        <button className="flex-1 bg-black text-white py-2 rounded">
          Logout
        </button>
      </div>
    </div>
  );
}
