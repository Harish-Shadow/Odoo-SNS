export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl font-bold max-w-3xl">
          Plan Trips.  
          Visualize Journeys.  
          Travel Smarter.
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          GlobeTrotter helps you plan multi-city trips, organize itineraries,
          track budgets, and share your travel plans effortlessly.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="/signup"
            className="bg-black text-white px-6 py-3 rounded-lg text-lg"
          >
            Get Started
          </a>

          <a
            href="/login"
            className="border border-black px-6 py-3 rounded-lg text-lg"
          >
            Login
          </a>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Smart Itineraries
            </h3>
            <p className="text-gray-600">
              Build day-wise plans across multiple cities with full clarity.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Budget Awareness
            </h3>
            <p className="text-gray-600">
              Know exactly where your money goes before the trip starts.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Share & Collaborate
            </h3>
            <p className="text-gray-600">
              Share itineraries with friends or reuse public trips.
            </p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 text-center px-6">
        <h2 className="text-3xl font-semibold mb-4">
          Your next journey starts with a plan
        </h2>

        <p className="text-gray-600 mb-8">
          Stop juggling apps and spreadsheets. Plan everything in one place.
        </p>

        <a
          href="/signup"
          className="bg-black text-white px-8 py-4 rounded-lg text-lg"
        >
          Create Your First Trip
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-sm text-gray-500 border-t">
        © 2026 GlobeTrotter. All rights reserved.
      </footer>
    </main>
  );
}
