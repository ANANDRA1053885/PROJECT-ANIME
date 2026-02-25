"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Heart, MessageCircle, Star, Users } from "lucide-react";

const APPEARANCES = [
  { id: 1, title: "Demon Slayer", role: "Main Character", episodes: 44, emoji: "🗡️" },
  { id: 2, title: "Demon Slayer: Mugen Train", role: "Main Character", episodes: 1, emoji: "🚂" },
  { id: 3, title: "Demon Slayer Season 2", role: "Main Character", episodes: 18, emoji: "🔥" },
];

const DISCUSSIONS = [
  { id: 1, title: "Tanjiro's breathing style — most versatile in the series?", replies: 234, votes: 891 },
  { id: 2, title: "How did Tanjiro master Sun Breathing so fast?", replies: 178, votes: 654 },
  { id: 3, title: "Tanjiro vs Gojo — who wins?", replies: 512, votes: 2341 },
  { id: 4, title: "Best Tanjiro moments ranked", replies: 98, votes: 445 },
];

export default function CharacterPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">

      {/* Back */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm">
          <ArrowLeft size={16} />
          Back
        </Link>
      </div>

      {/* Character Hero */}
      <div className="relative py-16 overflow-hidden">
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, rgba(255,107,157,0.1) 0%, rgba(255,140,66,0.05) 50%, black 100%)'
        }} />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(255,107,157,0.06)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-8 items-start">

            {/* Character Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-44 h-60 rounded-2xl flex items-center justify-center text-8xl flex-shrink-0 border border-white/10"
              style={{ background: 'linear-gradient(135deg, rgba(255,107,157,0.2), rgba(255,140,66,0.1))' }}
            >
              🗡️
            </motion.div>

            {/* Character Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex-1"
            >
              <div className="inline-flex items-center gap-2 text-sm font-medium px-3 py-1 rounded-full mb-3 border"
                style={{ backgroundColor: 'rgba(255,107,157,0.08)', borderColor: 'rgba(255,107,157,0.2)', color: '#FF6B9D' }}>
                Main Character
              </div>

              <h1 className="text-4xl sm:text-5xl font-black text-white mb-1">Tanjiro Kamado</h1>
              <p className="text-white/40 mb-4">竈門 炭治郎 • Demon Slayer</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {["Demon Slayer Corps", "Water Breathing", "Sun Breathing", "Protagonist"].map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 mb-6">
                {[
                  { icon: <Heart size={16} />, value: "98K", label: "Favourites" },
                  { icon: <Star size={16} />, value: "#4", label: "Character Rank" },
                  { icon: <Users size={16} />, value: "2.1M", label: "Fans" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center gap-2">
                    <span style={{ color: '#FF6B9D' }}>{stat.icon}</span>
                    <div>
                      <div className="text-white font-black">{stat.value}</div>
                      <div className="text-white/40 text-xs">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <button className="flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full transition-all hover:opacity-90 hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #FF6B9D, #FF8C42)' }}>
                  <Heart size={16} />
                  Add to Favourites
                </button>
                <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-full border border-white/10 transition-all">
                  <MessageCircle size={16} />
                  Discuss
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left Column */}
          <div className="lg:col-span-2 space-y-10">

            {/* About */}
            <section>
              <h2 className="text-xl font-black text-white mb-4">About</h2>
              <p className="text-white/60 leading-relaxed">
                Tanjiro Kamado is the main protagonist of Demon Slayer. He is a Demon Slayer in the 
                Demon Slayer Corps, who joined to find a cure for his sister Nezuko, who was turned 
                into a demon. Tanjiro is a young boy with a kind and determined personality. He is 
                caring and has a strong sense of justice, willing to protect anyone in danger.
              </p>
              <p className="text-white/60 leading-relaxed mt-4">
                He is a skilled combatant who primarily uses Water Breathing techniques, later 
                mastering the legendary Sun Breathing style passed down by his family. His unique 
                ability to smell emotions and detect openings in enemies makes him a formidable opponent.
              </p>
            </section>

            {/* Appearances */}
            <section>
              <h2 className="text-xl font-black text-white mb-4">Appearances</h2>
              <div className="space-y-3">
                {APPEARANCES.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  >
                    <Link href={`/anime/${item.id}`}>
                      <div className="flex items-center gap-4 bg-white/5 hover:bg-white/8 border border-white/10 hover:border-white/20 rounded-xl p-4 transition-all cursor-pointer group">
                        <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-2xl flex-shrink-0">
                          {item.emoji}
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-semibold group-hover:text-pink-300 transition-colors">
                            {item.title}
                          </div>
                          <div className="text-white/40 text-sm">{item.role} • {item.episodes} episodes</div>
                        </div>
                        <span className="text-xs font-medium px-3 py-1 rounded-full"
                          style={{ backgroundColor: 'rgba(255,107,157,0.1)', color: '#FF6B9D' }}>
                          {item.role}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Discussions */}
            <section>
              <h2 className="text-xl font-black text-white mb-4 flex items-center gap-2">
                <MessageCircle size={20} style={{ color: '#FF6B9D' }} />
                Community Discussions
              </h2>
              <div className="space-y-3">
                {DISCUSSIONS.map((thread, i) => (
                  <motion.div
                    key={thread.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                  >
                    <Link href={`/community/thread/${thread.id}`}>
                      <div className="flex items-center gap-4 bg-white/5 hover:bg-white/8 border border-white/10 hover:border-white/20 rounded-xl p-4 transition-all cursor-pointer group">
                        <div className="flex-1">
                          <div className="text-white font-medium text-sm group-hover:text-pink-300 transition-colors">
                            {thread.title}
                          </div>
                          <div className="flex items-center gap-4 mt-2">
                            <span className="text-white/30 text-xs flex items-center gap-1">
                              <MessageCircle size={10} /> {thread.replies} replies
                            </span>
                            <span className="text-white/30 text-xs">⬆️ {thread.votes.toLocaleString()}</span>
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

            {/* Character Details */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <h3 className="text-white font-bold mb-4">Character Details</h3>
              <div className="space-y-3">
                {[
                  { label: "Age", value: "15 → 16" },
                  { label: "Birthday", value: "July 14" },
                  { label: "Height", value: "165 cm" },
                  { label: "Hair Color", value: "Black / Red" },
                  { label: "Eye Color", value: "Dark Red" },
                  { label: "Affiliation", value: "Demon Slayer Corps" },
                  { label: "Rank", value: "Kanoe → Pillar" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between">
                    <span className="text-white/40 text-sm">{item.label}</span>
                    <span className="text-white text-sm font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Characters */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <h3 className="text-white font-bold mb-4">Related Characters</h3>
              <div className="space-y-3">
                {[
                  { name: "Nezuko Kamado", relation: "Sister", emoji: "🌸" },
                  { name: "Zenitsu Agatsuma", relation: "Friend", emoji: "⚡" },
                  { name: "Inosuke Hashibira", relation: "Friend", emoji: "🐗" },
                  { name: "Giyu Tomioka", relation: "Mentor", emoji: "💧" },
                ].map((char) => (
                  <div key={char.name} className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-lg">
                      {char.emoji}
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium group-hover:text-pink-300 transition-colors">
                        {char.name}
                      </div>
                      <div className="text-white/30 text-xs">{char.relation}</div>
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
