"use client";

import { useState } from "react";
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold flex items-center gap-2 group">
            <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-black font-bold group-hover:scale-110 transition-transform">G</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:from-green-400 group-hover:to-emerald-500 transition-all">GlobeTrotter</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 items-center">
            <NavLink href="/dashboard">Dashboard</NavLink>
            <NavLink href="/trips">Trips</NavLink>
            <NavLink href="/profile">Profile</NavLink>
            <Link
              href="/login"
              className="px-5 py-2 rounded-full text-sm font-medium bg-white text-black hover:bg-green-500 hover:text-black transition-all shadow-lg hover:shadow-green-500/20"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-zinc-400 hover:text-white transition-colors"
            onClick={() => setOpen(!open)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-zinc-800 bg-black">
          <div className="flex flex-col px-4 py-4 gap-4">
            <MobileNavLink href="/dashboard" onClick={() => setOpen(false)}>Dashboard</MobileNavLink>
            <MobileNavLink href="/trips" onClick={() => setOpen(false)}>Trips</MobileNavLink>
            <MobileNavLink href="/profile" onClick={() => setOpen(false)}>Profile</MobileNavLink>
            <Link
              href="/login"
              className="bg-green-500 text-black px-4 py-3 rounded-lg text-center font-bold"
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-zinc-400 hover:text-green-400 transition-colors relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full"></span>
    </Link>
  )
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-lg font-medium text-zinc-400 hover:text-green-400 border-b border-zinc-900 pb-2"
    >
      {children}
    </Link>
  )
}
