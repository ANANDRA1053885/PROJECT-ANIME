"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X, TrendingUp, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const POPULAR_SEARCHES = ["Demon Slayer", "Jujutsu Kaisen", "One Piece", "Attack on Titan", "Chainsaw Man"];

const ALL_ANIME = [
  { id: 1, title: "Demon Slayer", genre: "Action / Fantasy", rating: 9.2, emoji: "🗡️" },
  { id: 2, title: "Jujutsu Kaisen", genre: "Action / Supernatural", rating: 9.0, emoji: "👊" },
  { id: 3, title: "Attack on Titan", genre: "Action / Drama", rating: 9.8, emoji: "⚔️" },
  { id: 4, title: "One Piece", genre: "Adventure / Fantasy", rating: 9.1, emoji: "🏴‍☠️" },
  { id: 5, title: "Chainsaw Man", genre: "Action / Horror", rating: 8.8, emoji: "🪚" },
  { id: 6, title: "Spy x Family", genre: "Comedy / Action", rating: 8.7, emoji: "🕵️" },
  { id: 7, title: "Fullmetal Alchemist", genre: "Action / Adventure", rating: 9.8, emoji: "⚗️" },
  { id: 8, title: "Hunter x Hunter", genre: "Action / Fantasy", rating: 9.4, emoji: "🎯" },
  { id: 9, title: "Vinland Saga", genre: "Action / Historical", rating: 9.3, emoji: "🛡️" },
  { id: 10, title: "Violet Evergarden", genre: "Drama / Fantasy", rating: 9.1, emoji: "💌" },
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [recent, setRecent] = useState<string[]>(["Naruto", "Bleach"]);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = query.length > 0
    ? ALL_ANIME.filter(a => a.title.toLowerCase().includes(query.toLowerCase()))
    : [];

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (!isOpen) onClose();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  const handleSelect = (title: string) => {
    setRecent(prev => [title, ...prev.filter(r => r !== title)].slice(0, 5));
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl mx-4"
          >
            <div className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">

              {/* Search Input */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10">
                <Search size={20} className="text-white/40 flex-shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search anime, characters, reviews..."
                  className="flex-1 bg-transparent text-white placeholder-white/30 outline-none text-base"
                />
                {query && (
                  <button onClick={() => setQuery("")} className="text-white/40 hover:text-white transition-colors">
                    <X size={18} />
                  </button>
                )}
                <kbd className="hidden sm:flex items-center gap-1 text-xs text-white/20 border border-white/10 rounded px-2 py-1">
                  ESC
                </kbd>
              </div>

              {/* Results */}
              <div className="max-h-96 overflow-y-auto">
                {query.length > 0 ? (
                  results.length > 0 ? (
                    <div className="p-2">
                      <div className="text-xs text-white/30 px-3 py-2 font-medium">
                        {results.length} results for "{query}"
                      </div>
                      {results.map((anime) => (
                        <Link key={anime.id} href={`/anime/${anime.id}`} onClick={() => handleSelect(anime.title)}>
                          <div className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
                            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-xl flex-shrink-0">
                              {anime.emoji}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-white font-medium text-sm group-hover:text-pink-300 transition-colors">
                                {anime.title}
                              </div>
                              <div className="text-white/40 text-xs">{anime.genre}</div>
                            </div>
                            <div className="text-yellow-400 text-sm font-bold">⭐ {anime.rating}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="p-8 text-center">
                      <div className="text-4xl mb-3">🔍</div>
                      <div className="text-white/40 text-sm">No results for "{query}"</div>
                    </div>
                  )
                ) : (
                  <div className="p-4 space-y-6">

                    {/* Recent Searches */}
                    {recent.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 px-2 mb-2">
                          <Clock size={14} className="text-white/30" />
                          <span className="text-xs text-white/30 font-medium">Recent</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {recent.map((term) => (
                            <button key={term}
                              onClick={() => setQuery(term)}
                              className="text-xs text-white/60 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded-full transition-all">
                              {term}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Popular Searches */}
                    <div>
                      <div className="flex items-center gap-2 px-2 mb-2">
                        <TrendingUp size={14} style={{ color: '#FF6B9D' }} />
                        <span className="text-xs text-white/30 font-medium">Trending Searches</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {POPULAR_SEARCHES.map((term) => (
                          <button key={term}
                            onClick={() => setQuery(term)}
                            className="text-xs font-medium px-3 py-1.5 rounded-full transition-all border"
                            style={{ backgroundColor: 'rgba(255,107,157,0.08)', borderColor: 'rgba(255,107,157,0.2)', color: '#FF6B9D' }}>
                            {term}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}