"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <a href="/" className="text-xl font-bold">
            GlobeTrotter
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-6 items-center">
            <a href="/dashboard" className="text-sm hover:underline">
              Dashboard
            </a>
            <a href="/trips" className="text-sm hover:underline">
              Trips
            </a>
            <a href="/profile" className="text-sm hover:underline">
              Profile
            </a>
            <a
              href="/login"
              className="bg-black text-white px-4 py-1.5 rounded text-sm"
            >
              Login
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="flex flex-col px-4 py-3 gap-3">
            <a href="/dashboard" onClick={() => setOpen(false)}>
              Dashboard
            </a>
            <a href="/trips" onClick={() => setOpen(false)}>
              Trips
            </a>
            <a href="/profile" onClick={() => setOpen(false)}>
              Profile
            </a>
            <a
              href="/login"
              className="bg-black text-white px-4 py-2 rounded text-center"
              onClick={() => setOpen(false)}
            >
              Login
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
