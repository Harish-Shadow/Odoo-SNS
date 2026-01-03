export default function TripCard({ trip }: any) {
  return (
    <div className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors overflow-hidden">
      {/* Hover Glow Effect */}
      <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all"></div>

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {trip.name}
          </h2>
          <span className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-md border border-border">
            {trip.cities} {trip.cities === 1 ? 'City' : 'Cities'}
          </span>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted">
            <CalendarIcon />
            <span>{trip.startDate} – {trip.endDate}</span>
          </div>

          <div className="pt-4 border-t border-border flex justify-between items-center">
            <div className="flex -space-x-2">
              {/* Avatars or decoration */}
              <div className="w-8 h-8 rounded-full bg-secondary border border-card flex items-center justify-center text-xs text-muted">
                You
              </div>
            </div>

            <LinkWrapper id={trip.id} />
          </div>
        </div>
      </div>
    </div>
  );
}

function LinkWrapper({ id }: { id: string | number }) {
  return (
    <a
      href={`/trips/${id}`}
      className="text-sm font-medium text-primary hover:text-primary/80 flex items-center gap-1 group/link"
    >
      View Trip
      <span className="group-hover/link:translate-x-1 transition-transform">→</span>
    </a>
  )
}

function CalendarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
  )
}
