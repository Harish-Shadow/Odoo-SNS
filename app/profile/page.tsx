import ProfileCard from "@/public/components/common/ProfileCard";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">
              Your Profile
            </span>
          </h1>
          <p className="text-muted">Manage your account settings and preferences.</p>
        </header>

        <div className="max-w-lg">
          <ProfileCard />
        </div>
      </div>
    </div>
  );
}
