"use client";

export default function ProfileCard() {
  return (
    <div className="group relative bg-card border border-border rounded-2xl p-8 shadow-2xl shadow-primary/5 hover:border-primary/30 transition-all overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-primary/20 transition-all"></div>

      {/* Avatar */}
      <div className="relative flex items-center gap-6 mb-8 z-10">
        <div className="w-20 h-20 rounded-full bg-secondary border-2 border-primary/20 flex items-center justify-center text-3xl font-bold text-primary shadow-lg shadow-black/50">
          S
        </div>

        <div>
          <h2 className="text-2xl font-bold text-foreground">Sunil Kumar</h2>
          <p className="text-primary font-medium">sunil@example.com</p>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-4 text-sm relative z-10">
        <div className="flex justify-between items-center p-4 rounded-xl bg-secondary/30 border border-border/50">
          <span className="text-muted">Role</span>
          <span className="font-semibold text-foreground">Traveler</span>
        </div>

        <div className="flex justify-between items-center p-4 rounded-xl bg-secondary/30 border border-border/50">
          <span className="text-muted">Trips Planned</span>
          <span className="font-semibold text-foreground">3</span>
        </div>

        <div className="flex justify-between items-center p-4 rounded-xl bg-secondary/30 border border-border/50">
          <span className="text-muted">Member Since</span>
          <span className="font-semibold text-foreground">2025</span>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-8 flex gap-4 relative z-10">
        <button className="flex-1 px-4 py-3 rounded-xl border border-border bg-card text-foreground font-medium hover:border-primary hover:text-primary transition-all hover:shadow-lg hover:shadow-primary/5">
          Edit Profile
        </button>

        <button className="flex-1 px-4 py-3 rounded-xl bg-rose-500/10 text-rose-500 font-medium hover:bg-rose-500 hover:text-white transition-all border border-transparent hover:border-rose-500">
          Logout
        </button>
      </div>
    </div>
  );
}
