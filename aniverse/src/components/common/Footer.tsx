import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/50 backdrop-blur-sm mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/">
              <span className="text-2xl font-black tracking-tight">
                GIR<span style={{ color: '#FF6B9D' }}>ON</span>
              </span>
            </Link>
            <p className="text-white/40 text-sm mt-3 leading-relaxed">
              The ultimate anime community. Discuss, rate, and connect with fans worldwide.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-5">
              {["𝕏", "📘", "📸", "💬"].map((icon, i) => (
                <button key={i}
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-sm transition-all hover:scale-110">
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Explore</h4>
            <div className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Trending Anime", href: "/" },
                { label: "Community Forum", href: "/community" },
                { label: "Anime Rankings", href: "/" },
                { label: "Latest News", href: "/" },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="block text-sm text-white/40 hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Anime */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Popular Anime</h4>
            <div className="space-y-3">
              {[
                { label: "Demon Slayer", href: "/anime/demon-slayer" },
                { label: "Jujutsu Kaisen", href: "/anime/jujutsu-kaisen" },
                { label: "Attack on Titan", href: "/anime/attack-on-titan" },
                { label: "One Piece", href: "/anime/one-piece" },
                { label: "Chainsaw Man", href: "/anime/demon-slayer" },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="block text-sm text-white/40 hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Account */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Account</h4>
            <div className="space-y-3">
              {[
                { label: "Sign In", href: "/login" },
                { label: "Create Account", href: "/register" },
                { label: "My Profile", href: "/profile" },
                { label: "My Watchlist", href: "/profile" },
                { label: "Settings", href: "/profile" },
              ].map((link) => (
                <Link key={link.label} href={