"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star, TrendingUp } from "lucide-react";

const TRENDING = [
  { id: 1, title: "Demon Slayer", genre: "Action / Fantasy", rating: 9.2, episodes: 44, color: "from-orange-500/20" },
  { id: 2, title: "Jujutsu Kaisen", genre: "Action / Supernatural", rating: 9.0, episodes: 47, color: "from-blue-500/20" },
  { id: 3, title: "Attack on Titan", genre: "Action / Drama", rating: 9.8, episodes: 87, color: "from-green-500/20" },
  { id: 4, title: "One Piece", genre: "Adventure / Fantasy", rating: 9.1, episodes: 1000, color: "from-yellow-500/20" },
  { id: 5, title: "Chainsaw Man", genre: "Action / Horror", rating: 8.8, episodes: 12, color: "from-red-500/20" },
  { id: 6, title: "Spy x Family", genre: "Comedy / Action", rating: 8.7, episodes: 37, color: "from-pink-500/20" },
];

export default function TrendingSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      
      {/* Section Header */}
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-red-500/10 rounded-lg">
            <TrendingUp className="text-red-500" size={20} />
          </div>
          <div>
            <h2 className="text-2xl font-black text-white">Trending Now</h2>
            <p className="text-sm text-white/40">Most popular this season</p>
          </div>
        </div>
        <Link href="/anime" className="text-sm text-red-400 hover:text-red-300 transition-colors font-medium">
          View All →
        </Link>
      </div>

      {/* Anime Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {TRENDING.map((anime, i) => (
          <motion.div
            key={anime.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <Link href={`/anime/${anime.id}`}>
              <div className={`relative bg-gradient-to-br ${anime.color} to-white/5 
                border border-white/10 rounded-2xl p-6 hover:border-white/20 
                transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
                hover:shadow-black/50 cursor-pointer group`}
              >
                {/* Rank */}
                <div className="absolute top-4 right-4 text-4xl font-black text-white/5 group-hover:text-white/10 transition-colors">
                  #{i + 1}
                </div>

                {/* Content */}
                <div className="flex items-start gap-4">
                  {/* Placeholder poster */}
                  <div className={`w-14 h-20 rounded-lg bg-gradient-to-b ${anime.color} to-transparent 
                    border border-white/10 flex-shrink-0 flex items-center justify-center`}>
                    <span className="text-2xl">🎌</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-white text-lg leading-tight truncate group-hover:text-red-400 transition-colors">
                      {anime.title}
                    </h3>
                    <p className="text-sm text-white/40 mt-1">{anime.genre}</p>
                    
                    <div className="flex items-center gap-4 mt-3">
                      <div className="flex items-center gap-1">
                        <Star size={14} className="text-yellow-400 fill-yellow-400" />
                        <span className="text-sm font-semibold text-white">{anime.rating}</span>
                      </div>
                      <span className="text-sm text-white/30">{anime.episodes} eps</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}