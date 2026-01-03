"use client";

export default function CreateTripForm() {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">
          Trip Name
        </label>
        <input
          type="text"
          placeholder="My Summer Trip"
          className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Start Date
        </label>
        <input
          type="date"
          className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          End Date
        </label>
        <input
          type="date"
          className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Description
        </label>
        <textarea
          placeholder="Short description about the trip"
          className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
          rows={3}
        />
      </div>

      <button
        type="submit"
        className="bg-black text-white px-4 py-2 rounded"
      >
        Create Trip
      </button>
    </form>
  );
}
