"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginForm() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // UI-only redirect (mock login)
    router.replace("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Email */}
      <div>
        <label className="block text-sm font-medium mb-1 text-foreground">
          Email
        </label>
        <input
          type="email"
          required
          placeholder="you@example.com"
          className="w-full bg-secondary border border-border text-foreground px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium mb-1 text-foreground">
          Password
        </label>
        <input
          type="password"
          required
          placeholder="••••••••"
          className="w-full bg-secondary border border-border text-foreground px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:bg-primary/90 transition"
      >
        Login
      </button>

      {/* Forgot password */}
      <div className="text-right">
        <Link
          href="/forgot-password"
          className="text-sm text-muted underline hover:text-primary transition"
        >
          Forgot password?
        </Link>
      </div>
    </form>
  );
}
