"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star, Bookmark, MessageCircle, Clock, TrendingUp, Settings, Edit } from "lucide-react";

const WATCHLIST = [
  { id: 1, title: "Demon Slayer", status: "Watching", progress: "32/44", emoji: "🗡️" },
  { id: 2, title: "Jujutsu Kaisen", status: "Completed", progress: "47/47", emoji: "👊" },
  { id: 3, title: "Attack on Titan", status: "Completed", progress: "87/87", emoji: "⚔️" },
  { id: 4, title: "One Piece", status: "Watching", progress: "850/1000+", emoji: "🏴‍☠️" },
  { id: 5, title: "Chainsaw Man", status: "Plan to Watch", progress: "0/12", emoji: "🪚" },
  { id: 6, title: "Spy x Family", status: "Watching", progress: "20/37", emoji: "🕵️" },
];

const ACTIVITY = [
  { action: "Reviewed", target: "Demon Slayer", time: "2h ago", emoji: "⭐" },
  { action: "Commented on", target: "Who is the strongest anime character?", time: "4h ago", emoji: "💬" },
  { action: "Added to watchlist", target: "Chainsaw Man", time: "1d ago", emoji: "📌" },
  { action: "Completed", target: "Attack on Titan", time: "2d ago", emoji: "✅" },
  { action: "Reviewed", target: "Jujutsu Kaisen", time: "3d ago", emoji: "⭐" },
];

const STATUS_COLORS: Record<string, string> = {
  "Watching": "#FF6B9D",
  "Completed": "#4ade80",
  "Plan to Watch": "#94a3b8",
};

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">

      {/* Profile Header Banner */}
      <div className="relative h-52 overflow-hidden">
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, rgba(255,107,157,0.3) 0%, rgba(255,140,66,0.2) 50%, black 100%)'
        }} />
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,107,157,0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,107,157,0.4) 1px, transparent 1px)`,
            backgroundSize: "40px 40px"
          }}
        />
        {/* Settings Button */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm px-4 py-2 rounded-full transition-all backdrop-blur-sm">
            <Settings size={14} />
            Settings
          </button>
          <button className="flex items-center gap-2 text-white text-sm px-4 py-2 rounded-full transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #FF6B9D, #FF8C42)' }}>
            <Edit size={14} />
            Edit Profile
          </button>
        </div>
      </div>

      {/* Avatar + Name */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row gap-6 -mt-16 mb-8">
          <div className="w-28 h-28 rounded-2xl border-4 border-[#0a0a0a] flex items-center justify-center text-5xl flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #FF6B9D, #FF8C42)' }}>
            🌸
          </div>
          <div className="pt-16 sm:pt-20">
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-2xl font-black text-white">SakuraNight</h1>
              <span className="text-xs font-bold px-3 py-1 rounded-full"
                style={{ background: 'linear-gradient(135deg, #FF6B9D, #FF8C42)', color: 'white' }}>
                PRO MEMBER
              </span>
            </div>
            <p className="text-white/40 text-sm mt-1">Anime enthusiast • Joined January 2022</p>
            <p className="text-white/60 text-sm mt-2 max-w-md">
              Living for shounen and slice of life. Currently obsessed with Demon Slayer. 🗡️
            </p>
          </div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10"
        >
          {[
            { value: "247", label: "Anime Watched", icon: "📺" },
            { value: "89", label: "Reviews Written", icon: "✍️" },
            { value: "1.2K", label: "Forum Posts", icon: "💬" },
            { value: "4821", label: "Total XP", icon: "⚡" },
          ].map((stat) => (
            <div key={stat.label}
              className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center hover:border-white/20 transition-all">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-2xl font-black text-white">{stat.value}</div>
              <div className="text-white/40 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-20">

          {/* Left — Watchlist + Reviews */}
          <div className="lg:col-span-2 space-y-10">

            {/* Watchlist */}
            <section>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-black text-white flex items-center gap-2">
                  <Bookmark size={20} style={{ color: '#FF6B9D' }} />
                  Watchlist
                </h2>
                <Link href="#" className="text-sm font-medium hover:opacity-80 transition-opacity"
                  style={{ color: '#FF6B9D' }}>
                  View All →
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {WATCHLIST.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="flex items-center gap-4 bg-white/5 border border-white/10 hover:border-white/20 rounded-xl p-4 transition-all"
                  >
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-2xl flex-shrink-0">
                      {item.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white font-semibold text-sm truncate">{item.title}</div>
                      <div className="text-white/40 text-xs mt-0.5">{item.progress} episodes</div>
                      <div className="text-xs font-medium mt-1" style={{ color: STATUS_COLORS[item.status] }}>
                        {item.status}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Reviews */}
            <section>
              <h2 className="text-xl font-black text-white flex items-center gap-2 mb-5">
                <Star size={20} style={{ color: '#FF6B9D' }} />
                Recent Reviews
              </h2>
              <div className="space-y-4">
                {[
                  { title: "Demon Slayer", rating: 10, text: "Absolutely breathtaking. The animation quality is unmatched and the emotional depth surprised me.", emoji: "🗡️" },
                  { title: "Jujutsu Kaisen", rating: 9, text: "Incredible fights and lovable characters. Gojo is one of the best written characters in anime.", emoji: "👊" },
                ].map((review) => (
                  <div key={review.title} className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-xl">
                        {review.emoji}
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-bold">{review.title}</div>
                        <div className="flex items-center gap-1 mt-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} size={12}
                              className={i < Math.floor(review.rating / 2) ? "fill-yellow-400 text-yellow-400" : "text-white/20"} />
                          ))}
                        </div>
                      </div>
                      <div className="text-2xl font-black text-white">
                        {review.rating}<span className="text-white/30 text-sm">/10</span>
                      </div>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed">{review.text}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">

            {/* Activity Feed */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <Clock size={16} style={{ color: '#FF6B9D' }} />
                Recent Activity
              </h3>
              <div className="space-y-4">
                {ACTIVITY.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm flex-shrink-0">
                      {item.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white/60 text-xs leading-relaxed">
                        <span className="text-white/80">{item.action}</span>{" "}
                        <span style={{ color: '#FF6B9D' }}>{item.target}</span>
                      </div>
                      <div className="text-white/30 text-xs mt-1">{item.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Favourite Genres */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <TrendingUp size={16} style={{ color: '#FF6B9D' }} />
                Favourite Genres
              </h3>
              <div className="space-y-3">
                {[
                  { genre: "Action", percent: 85 },
                  { genre: "Fantasy", percent: 72 },
                  { genre: "Slice of Life", percent: 60 },
                  { genre: "Romance", percent: 45 },
                  { genre: "Horror", percent: 30 },
                ].map((item) => (
                  <div key={item.genre}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-white/60">{item.genre}</span>
                      <span className="text-white/40">{item.percent}%</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${item.percent}%`,
                          background: 'linear-gradient(135deg, #FF6B9D, #FF8C42)'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
