"use client";

import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";

const NEWS = [
  { id: 1, title: "Demon Slayer Season 4 Officially Confirmed for 2025", time: "2h ago", category: "Announcements", emoji: "🗡️" },
  { id: 2, title: "One Piece Reaches 1000th Episode Milestone", time: "5h ago", category: "Milestones", emoji: "🏴‍☠️" },
  { id: 3, title: "Jujutsu Kaisen Manga Ending Sparks Debate Online", time: "1d ago", category: "Manga", emoji: "👊" },
  { id: 4, title: "Studio Ghibli Announces New Feature Film", time: "2d ago", category: "Movies", emoji: "🎬" },
];

export default function NewsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg" style={{ backgroundColor: 'rgba(255,107,157,0.1)' }}>
            <Newspaper size={20} style={{ color: '#FF6B9D' }} />
          </div>
          <div>
            <h2 className="text-2xl font-black text-white">Latest News</h2>
            <p className="text-sm text-white/40">Stay up to date with anime world</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {NEWS.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="flex items-start gap-4 bg-white/5 hover:bg-white/8 border border-white/10 hover:border-white/20 rounded-xl p-4 cursor-pointer transition-all group"
          >
            <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-2xl flex-shrink-0">
              {item.emoji}
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-xs font-medium px-2 py-0.5 rounded-full mb-2 inline-block"
                style={{ backgroundColor: 'rgba(255,107,157,0.1)', color: '#FF6B9D' }}>
                {item.category}
              </span>
              <h3 className="text-white font-semibold text-sm leading-snug group-hover:text-pink-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-white/30 text-xs mt-1">{item.time}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}