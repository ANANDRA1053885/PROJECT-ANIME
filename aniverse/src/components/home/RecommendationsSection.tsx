"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, Star } from "lucide-react";

const RECOMMENDATIONS = [
  { id: 1, title: "Fullmetal Alchemist: Brotherhood", genre: "Action / Adventure", rating: 9.8, reason: "Since you like Demon Slayer", emoji: "⚗️" },
  { id: 2, title: "Hunter x Hunter", genre: "Action / Fantasy", rating: 9.4, reason: "Top rated shounen", emoji: "🎯" },
  { id: 3, title: "Vinland Saga", genre: "Action / Historical", rating: 9.3, reason: "Epic storytelling", emoji: "⚔️" },
  { id: 4, title: "Violet Evergarden", genre: "Drama / Fantasy", rating: 9.1, reason: "Emotional masterpiece", emoji: "💌" },
];

export default function RecommendationsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg" style={{ backgroundColor: 'rgba(255,140,66,0.1)' }}>
            <Sparkles size={20} style={{ color: '#FF8C42' }} />
          </div>
          <div>
            <h2 className="text-2xl font-black text-white">Recommended For You</h2>
            <p className="text-sm text-white/40">Handpicked based on your taste</p>
          </div>
        </div>
        <Link href="/anime" className="text-sm font-medium hover:opacity-80 transition-opacity"
          style={{ color: '#FF6B9D' }}>
          View All →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {RECOMMENDATIONS.map((anime, i) => (
          <motion.div
            key={anime.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <Link href={`/anime/${anime.id}`}>
              <div className="bg-white/5 hover:bg-white/8 border border-white/10 hover:border-white/20 rounded-2xl p-5 transition-all hover:scale-[1.02] cursor-pointer group">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center text-3xl mb-4">
                  {anime.emoji}
                </div>
                <h3 className="text-white font-bold text-sm leading-snug group-hover:text-pink-300 transition-colors mb-1">
                  {anime.title}
                </h3>
                <p className="text-white/40 text-xs mb-3">{anime.genre}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star size={12} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-white font-bold text-sm">{anime.rating}</span>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: 'rgba(255,107,157,0.1)', color: '#FF6B9D' }}>
                    ✨ For You
                  </span>
                </div>
                <p className="text-white/30 text-xs mt-2">{anime.reason}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}