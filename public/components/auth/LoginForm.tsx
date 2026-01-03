"use client";

export default function LoginForm() {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Password
        </label>
        <input
          type="password"
          placeholder="••••••••"
          className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white py-2 rounded text-lg hover:opacity-90"
      >
        Login
      </button>

      <div className="text-right">
        <a href="#" className="text-sm text-gray-600 underline">
          Forgot password?
        </a>
      </div>
    </form>
  );
}
