export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 font-sans selection:bg-primary/30" style={{backgroundImage: "url('/bg.avif')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
      <div className="bg-card p-8 rounded-xl border border-border w-full max-w-md shadow-2xl shadow-primary/5">
        <h1 className="text-2xl font-bold mb-2 text-foreground">
          Forgot Password
        </h1>

        <p className="text-sm text-muted mb-6">
          Enter your email and we’ll send you reset instructions.
        </p>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full bg-secondary border border-border text-foreground px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-muted/50"
            />
          </div>

          <button className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
            Send Reset Link
          </button>
        </form>

        <div className="mt-6 text-center">
          <a href="/login" className="text-sm text-muted hover:text-primary transition-colors">
            Back to login
          </a>
        </div>
      </div>
    </div>
  );
}
