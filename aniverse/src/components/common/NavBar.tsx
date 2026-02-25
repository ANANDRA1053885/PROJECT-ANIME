"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search, Bell, User } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tight">
              GIR<span style={{ color: '#FF6B9D' }}>ON</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm text-white/70 hover:text-white transition-colors">Home</Link>
            <Link href="/anime" className="text-sm text-white/70 hover:text-white transition-colors">Anime</Link>
            <Link href="/community" className="text-sm text-white/70 hover:text-white transition-colors">Community</Link>
            <Link href="/profile" className="text-sm text-white/70 hover:text-white transition-colors">Profile</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 text-white/70 hover:text-white transition-colors">
              <Search size={18} />
            </button>
            <button className="p-2 text-white/70 hover:text-white transition-colors">
              <Bell size={18} />
            </button>
            <button style={{ backgroundColor: '#FF6B9D' }} className="flex items-center gap-2 hover:opacity-90 transition-opacity text-black text-sm font-bold px-4 py-2 rounded-full">
              <User size={16} />
              Sign In
            </button>
          </div>

          <button className="md:hidden p-2 text-white/70 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/95 px-4 py-4 flex flex-col gap-4">
          <Link href="/" className="text-sm text-white/70 hover:text-white" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/anime" className="text-sm text-white/70 hover:text-white" onClick={() => setIsOpen(false)}>Anime</Link>
          <Link href="/community" className="text-sm text-white/70 hover:text-white" onClick={() => setIsOpen(false)}>Community</Link>
          <Link href="/profile" className="text-sm text-white/70 hover:text-white" onClick={() => setIsOpen(false)}>Profile</Link>
          <button style={{ backgroundColor: '#FF6B9D' }} className="flex items-center justify-center gap-2 text-black text-sm font-bold px-4 py-2 rounded-full">
            <User size={16} />
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
}