export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4">
          Forgot Password
        </h1>

        <p className="text-sm text-gray-600 mb-4">
          Enter your email and we’ll send you reset instructions.
        </p>

        <input
          type="email"
          placeholder="you@example.com"
          className="w-full border px-3 py-2 rounded mb-4"
        />

        <button className="w-full bg-black text-white py-2 rounded">
          Send Reset Link
        </button>
      </div>
    </div>
  );
}
