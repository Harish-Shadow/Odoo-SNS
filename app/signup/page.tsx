import SignupForm from "@/public/components/auth/SignupForm";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow">
        <h1 className="text-3xl font-bold text-center mb-2">
          Create Account
        </h1>

        <p className="text-center text-gray-600 mb-6">
          Start planning your trips in one place
        </p>

        <SignupForm />

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-black font-medium underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
