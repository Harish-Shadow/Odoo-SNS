import SignupForm from "@/public/components/auth/SignupForm";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 font-sans selection:bg-primary/30">
      <div className="w-full max-w-md bg-card p-8 rounded-xl shadow-2xl shadow-primary/5 border border-border">
        <h1 className="text-3xl font-bold text-center mb-2 text-foreground">
          Create Account
        </h1>

        <p className="text-center text-muted mb-8">
          Start planning your trips in one place
        </p>

        <SignupForm />

        <p className="text-center text-sm text-muted mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-primary font-medium underline hover:text-primary/80 transition-colors">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
