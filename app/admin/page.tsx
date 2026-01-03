import Link from 'next/link';

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8 font-sans selection:bg-primary/30">
      {/* Header */}
      <header className="mb-12 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">
              Admin Dashboard
            </span>
          </h1>
          <p className="text-muted">Overview of system performance and activities.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/20 text-sm text-primary">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            System Online
          </div>
          <div className="h-10 w-10 rounded-full bg-secondary border border-border overflow-hidden relative">
            {/* Profile placeholder */}
            <div className="absolute inset-0 flex items-center justify-center text-secondary-foreground font-bold">A</div>
          </div>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <StatCard
          title="Total Users"
          value="1,248"
          change="+12.5%"
          isPositive={true}
          icon={<UsersIcon />}
        />
        <StatCard
          title="Active Sessions"
          value="432"
          change="+8.1%"
          isPositive={true}
          icon={<ActivityIcon />}
        />
        <StatCard
          title="Revenue"
          value="$12,450"
          change="+2.4%"
          isPositive={true}
          icon={<DollarSignIcon />}
        />
        <StatCard
          title="Server Load"
          value="24%"
          change="-3.2%"
          isPositive={true} // Lower is better usually, but green is good context here
          icon={<ServerIcon />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Main Content Area / Recent Activity */}
        <div className="lg:col-span-2 space-y-8">
          <SectionHeader title="Recent Activity" />
          <div className="bg-card/50 border border-border rounded-xl overflow-hidden backdrop-blur-sm">
            <ActivityItem user="Alice Smith" action="New subscription" time="2 min ago" />
            <ActivityItem user="Bob Jones" action="Ticket created #492" time="15 min ago" />
            <ActivityItem user="Server Bot" action="Backup completed" time="1 hour ago" />
            <ActivityItem user="Charlie Day" action="Login detected (New IP)" time="3 hours ago" />
          </div>
        </div>

        {/* Sidebar / Quick Actions */}
        <div className="space-y-8">
          <SectionHeader title="Quick Actions" />
          <div className="grid gap-4">
            <QuickActionCard href="/admin/analytics" title="View Analytics" icon={<BarChartIcon />} />
            <QuickActionCard href="#" title="User Management" icon={<UsersIcon />} disabled />
            <QuickActionCard href="#" title="System Settings" icon={<SettingsIcon />} disabled />
            <QuickActionCard href="#" title="Security Logs" icon={<ShieldIcon />} disabled />
          </div>
        </div>

      </div>
    </div>
  );
}

// --- Components ---

function StatCard({ title, value, change, isPositive, icon }: { title: string, value: string, change: string, isPositive: boolean, icon: React.ReactNode }) {
  return (
    <div className="bg-card/40 border border-border hover:border-primary/50 transition-colors p-6 rounded-xl group relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-50 text-secondary-foreground group-hover:text-primary/20 transition-colors">
        {icon}
      </div>
      <p className="text-secondary-foreground text-sm font-medium mb-1">{title}</p>
      <div className="flex items-end gap-3">
        <h3 className="text-3xl font-bold text-foreground tracking-tight">{value}</h3>
        <span className={`text-xs font-medium px-1.5 py-0.5 rounded ${isPositive ? 'bg-primary/10 text-primary' : 'bg-red-500/10 text-red-400'}`}>
          {change}
        </span>
      </div>
    </div>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
      <span className="w-1 h-6 bg-primary rounded-full inline-block"></span>
      {title}
    </h2>
  );
}

function ActivityItem({ user, action, time }: { user: string, action: string, time: string }) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-border last:border-0 hover:bg-secondary/50 transition-colors">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-linear-to-br from-secondary to-zinc-900 flex items-center justify-center text-xs text-foreground uppercase border border-border">
          {user.charAt(0)}
        </div>
        <div>
          <p className="text-sm text-foreground font-medium">{user}</p>
          <p className="text-xs text-muted">{action}</p>
        </div>
      </div>
      <span className="text-xs text-muted">{time}</span>
    </div>
  );
}

function QuickActionCard({ href, title, icon, disabled }: { href: string, title: string, icon: React.ReactNode, disabled?: boolean }) {
  const content = (
    <div className={`p-4 rounded-xl border flex items-center gap-3 transition-all ${disabled ? 'bg-secondary/20 border-border opacity-50 cursor-not-allowed' : 'bg-card border-border hover:border-primary text-secondary-foreground hover:text-primary hover:shadow-lg hover:shadow-primary/10 cursor-pointer'}`}>
      <div className="text-current">
        {icon}
      </div>
      <span className="font-medium text-sm">{title}</span>
      {!disabled && <span className="ml-auto text-xs opacity-0 group-hover:opacity-100 transition-opacity">→</span>}
    </div>
  );

  if (disabled) return content;

  return (
    <Link href={href} className="block group">
      {content}
    </Link>
  );
}

// --- Icons (Simple SVGs) ---

function UsersIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
  );
}

function ActivityIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
  );
}

function DollarSignIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
  );
}

function ServerIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>
  );
}

function BarChartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
  );
}

function SettingsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>
  );
}

function ShieldIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
  );
}
