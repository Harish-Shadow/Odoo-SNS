import LoginForm from "@/public/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow">
        <h1 className="text-3xl font-bold text-center mb-2">
          Welcome Back
        </h1>

        <p className="text-center text-gray-600 mb-6">
          Login to continue planning your journey
        </p>

        <LoginForm />

        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <a href="/signup" className="text-black font-medium underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
