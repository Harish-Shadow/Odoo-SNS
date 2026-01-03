import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        {/* Abstract Background Decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10"></div>

        <h1 className="text-5xl md:text-7xl font-bold max-w-4xl tracking-tight mb-6">
          Plan Trips. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">
            Visualize Journeys.
          </span> <br />
          Travel Smarter.
        </h1>

        <p className="mt-6 text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
          GlobeTrotter helps you plan multi-city trips, organize itineraries,
          track budgets, and share your travel plans effortlessly.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Link
            href="/signup"
            className="group relative px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
          >
            Get Started
            <span className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-white/40 transition-all"></span>
          </Link>


        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 px-6 bg-secondary/20 border-y border-border">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <FeatureCard
            title="Smart Itineraries"
            desc="Build day-wise plans across multiple cities with full clarity."
            icon={<MapIcon />}
          />
          <FeatureCard
            title="Budget Awareness"
            desc="Know exactly where your money goes before the trip starts."
            icon={<WalletIcon />}
          />
          <FeatureCard
            title="Share & Collaborate"
            desc="Share itineraries with friends or reuse public trips."
            icon={<ShareIcon />}
          />
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-24 text-center px-6 bg-background">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
          Your next journey starts with a plan
        </h2>

        <p className="text-muted mb-10 max-w-xl mx-auto text-lg">
          Stop juggling apps and spreadsheets. Plan everything in one place.
        </p>

        <Link
          href="/signup"
          className="inline-block px-10 py-5 bg-foreground text-background font-bold rounded-full text-xl hover:bg-foreground/90 transition-all"
        >
          Create Your First Trip
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-sm text-muted border-t border-border bg-card">
        © 2026 GlobeTrotter. All rights reserved.
      </footer>
    </main>
  );
}

function FeatureCard({ title, desc, icon }: { title: string, desc: string, icon: React.ReactNode }) {
  return (
    <div className="bg-card border border-border p-8 rounded-2xl hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all group">
      <div className="w-12 h-12 mx-auto mb-6 bg-secondary rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted leading-relaxed">
        {desc}
      </p>
    </div>
  )
}

// Icons
function MapIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" /><line x1="8" y1="2" x2="8" y2="18" /><line x1="16" y1="6" x2="16" y2="22" /></svg>
}
function WalletIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5" /><path d="M16 12h5" /><path d="M16 8h5" /><path d="M16 16h5" /></svg>
}
function ShareIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>
}
