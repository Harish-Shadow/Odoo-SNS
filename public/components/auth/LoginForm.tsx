"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    router.push('/dashboard');
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium mb-1 text-foreground">
          Email
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full bg-secondary border border-border text-foreground px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-muted/50"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-foreground">
          Password
        </label>
        <input
          type="password"
          placeholder="••••••••"
          className="w-full bg-secondary border border-border text-foreground px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-muted/50"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg text-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
      >
        Login
      </button>

      <div className="text-right">
        <Link href="/forgot-password" className="text-sm text-muted underline hover:text-primary transition-colors">
          Forgot password?
        </Link>
      </div>
    </form>
  );
}
