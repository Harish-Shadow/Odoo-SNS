import LoginForm from "@/public/components/auth/LoginForm";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 font-sans selection:bg-primary/30 overflow-y-hidden" style={{backgroundImage: "url('/bg.avif')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
            <div className="w-full max-w-md bg-card p-8 rounded-xl shadow-2xl shadow-primary/5 border border-border overflow-hidden">
                <h1 className="text-3xl font-bold text-center mb-2 text-foreground">
                    Welcome Back
                </h1>

                <p className="text-center text-muted mb-8">
                    Login to continue planning your journey
                </p>

                <LoginForm />

                <p className="text-center text-sm text-muted mt-6">
                    Don’t have an account?{" "}
                    <Link href="/signup" className="text-primary font-medium underline hover:text-primary/80 transition-colors">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}
