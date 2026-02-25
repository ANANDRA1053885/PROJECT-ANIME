"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCircle, TrendingUp, Flame, Users, ChevronRight, ArrowUp } from "lucide-react";

const BOARDS = [
  { id: 1, icon: "🔥", title: "General Discussion", description: "Talk about anything anime related", threads: 12400, color: "rgba(255,107,157,0.1)" },
  { id: 2, icon: "⚔️", title: "Episode Discussions", description: "Spoiler discussions for airing episodes", threads: 8200, color: "rgba(255,140,66,0.1)" },
  { id: 3, icon: "📺", title: "Recommendations", description: "Find your next favourite anime", threads: 5600, color: "rgba(255,107,157,0.1)" },
  { id: 4, icon: "🎨", title: "Fan Art & Creativity", description: "Share your anime artwork and creations", threads: 3900, color: "rgba(255,140,66,0.1)" },
  { id: 5, icon: "🏆", title: "Rankings & Debates", description: "Who is the strongest? Best anime ever?", threads: 7100, color: "rgba(255,107,157,0.1)" },
  { id: 6, icon: "📰", title: "News & Announcements", description: "Latest anime news and season previews", threads: 2800, color: "rgba(255,140,66,0.1)" },
];

const TRENDING_THREADS = [
  { id: 1, title: "Who is objectively the strongest anime character ever?", board: "Rankings & Debates", replies: 847, votes: 2341, author: "SakuraNight", time: "2h ago", hot: true },
  { id: 2, title: "Demon Slayer Season 4 — First Impressions Thread", board: "Episode Discussions", replies: 623, votes: 1892, author: "OtakuLord99", time: "4h ago", hot: true },
  { id: 3, title: "Underrated anime that deserve more attention", board: "Recommendations", replies: 412, votes: 1204, author: "AnimePhilosopher", time: "6h ago", hot: false },
  { id: 4, title: "Attack on Titan ending — did it satisfy you?", board: "General Discussion", replies: 1203, votes: 3421, author: "TitanSlayer", time: "1d ago", hot: true },
  { id: 5, title: "Best anime OSTs of all time — ranked", board: "General Discussion", replies: 334, votes: 987, author: "MelodyOtaku", time: "1d ago", hot: false },
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">

      {/* Hero */}
      <div className="relative py-16 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(255,107,157,0.06) 0%, black 60%)' }} />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(255,107,157,0.05)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full mb-4 border"
              style={{ backgroundColor: 'rgba(255,107,157,0.08)', borderColor: 'rgba(255,107,157,0.2)', color: '#FF6B9D' }}>
              <Users size={14} />
              2M+ Members Online
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-3">
              Giron <span style={{ color: '#FF6B9D' }}>Community</span>
            </h1>
            <p className="text-white/50 text-lg max-w-xl">
              Join the conversation. Debate, discover, and connect with anime fans worldwide.
            </p>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-6 mt-8"
          >
            {[
              { icon: <MessageCircle size={16} />, value: "48K", label: "Threads Today" },
              { icon: <TrendingUp size={16} />, value: "124K", label: "Posts Today" },
              { icon: <Users size={16} />, value: "18K", label: "Online Now" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                <span style={{ color: '#FF6B9D' }}>{stat.icon}</span>
                <span className="text-white font-bold text-sm">{stat.value}</span>
                <span className="text-white/40 text-sm">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left — Boards + Trending */}
          <div className="lg:col-span-2 space-y-10">

            {/* Discussion Boards */}
            <section>
              <h2 className="text-xl font-black text-white mb-5 flex items-center gap-2">
                <MessageCircle size={20} style={{ color: '#FF6B9D' }} />
                Discussion Boards
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {BOARDS.map((board, i) => (
                  <motion.div
                    key={board.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                  >
                    <Link href={`/community/${board.id}`}>
                      <div className="flex items-center gap-4 p-4 rounded-xl border border-white/10 hover:border-white/20 transition-all hover:scale-[1.02] cursor-pointer"
                        style={{ backgroundColor: board.color }}>
                        <div className="text-2xl">{board.icon}</div>
                        <div className="flex-1 min-w-0">
                          <div className="text-white font-semibold text-sm">{board.title}</div>
                          <div className="text-white/40 text-xs mt-0.5 truncate">{board.description}</div>
                          <div className="text-xs mt-1" style={{ color: '#FF6B9D' }}>{board.threads.toLocaleString()} threads</div>
                        </div>
                        <ChevronRight size={16} className="text-white/20 flex-shrink-0" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Trending Threads */}
            <section>
              <h2 className="text-xl font-black text-white mb-5 flex items-center gap-2">
                <Flame size={20} style={{ color: '#FF8C42' }} />
                Trending Debates
              </h2>
              <div className="space-y-3">
                {TRENDING_THREADS.map((thread, i) => (
                  <motion.div
                    key={thread.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                  >
                    <Link href={`/community/thread/${thread.id}`}>
                      <div className="flex gap-4 p-4 bg-white/5 hover:bg-white/8 border border-white/10 hover:border-white/20 rounded-xl transition-all cursor-pointer group">

                        {/* Vote */}
                        <div className="flex flex-col items-center gap-1 flex-shrink-0">
                          <button className="p-1 rounded hover:bg-white/10 transition-colors">
                            <ArrowUp size={14} className="text-white/40 group-hover:text-white/60" />
                          </button>
                          <span className="text-xs font-bold text-white/60">{(thread.votes / 1000).toFixed(1)}k</span>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            {thread.hot && (
                              <span className="text-xs font-bold px-2 py-0.5 rounded-full"
                                style={{ backgroundColor: 'rgba(255,140,66,0.15)', color: '#FF8C42' }}>
                                🔥 HOT
                              </span>
                            )}
                            <span className="text-xs text-white/30 truncate">{thread.board}</span>
                          </div>
                          <h3 className="text-white font-semibold text-sm leading-snug group-hover:text-pink-300 transition-colors">
                            {thread.title}
                          </h3>
                          <div className="flex items-center gap-4 mt-2">
                            <span className="text-xs text-white/30">by {thread.author}</span>
                            <span className="text-xs text-white/30">{thread.time}</span>
                            <span className="text-xs text-white/30 flex items-center gap-1">
                              <MessageCircle size={10} />
                              {thread.replies} replies
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">

            {/* New Thread Button */}
            <button
              className="w-full font-bold py-3 rounded-full transition-all hover:opacity-90 hover:scale-105 text-white"
              style={{ background: 'linear-gradient(135deg, #FF6B9D, #FF8C42)' }}
            >
              + Start a Discussion
            </button>

            {/* Top Contributors */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <TrendingUp size={16} style={{ color: '#FF6B9D' }} />
                Top Contributors
              </h3>
              <div className="space-y-3">
                {[
                  { name: "SakuraNight", posts: 4821, avatar: "🌸" },
                  { name: "OtakuLord99", posts: 3654, avatar: "⚔️" },
                  { name: "TitanSlayer", posts: 2901, avatar: "🗡️" },
                  { name: "AnimePhilosopher", posts: 2344, avatar: "📚" },
                  { name: "MelodyOtaku", posts: 1987, avatar: "🎵" },
                ].map((user, i) => (
                  <div key={user.name} className="flex items-center gap-3">
                    <span className="text-white/40 text-xs w-4">{i + 1}</span>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm">
                      {user.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="text-white text-sm font-medium">{user.name}</div>
                      <div className="text-white/30 text-xs">{user.posts.toLocaleString()} posts</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Rules */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <h3 className="text-white font-bold mb-3">Community Rules</h3>
              <div className="space-y-2">
                {[
                  "Be respectful to all members",
                  "No spoilers without tags",
                  "Stay on topic per board",
                  "No spam or self promotion",
                  "Have fun and enjoy anime!",
                ].map((rule, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-white/50">
                    <span style={{ color: '#FF6B9D' }} className="font-bold flex-shrink-0">{i + 1}.</span>
                    {rule}
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