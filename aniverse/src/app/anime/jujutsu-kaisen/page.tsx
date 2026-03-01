import Link from "next/link";
import { Star, Plus, ArrowLeft, MessageCircle, ThumbsUp, ThumbsDown } from "lucide-react";

export default function JujutsuKaisenPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>

      {/* Hero */}
      <div className="relative">
        <div className="h-72" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(255,107,157,0.1), black)' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-36 h-52 rounded-xl flex items-center justify-center flex-shrink-0 text-5xl shadow-2xl border border-white/10"
                style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.3), rgba(255,107,157,0.1))' }}>
                👊
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-3">
                  {["Action", "Supernatural", "2020"].map((tag) => (
                    <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full border"
                      style={{ backgroundColor: 'rgba(255,107,157,0.08)', borderColor: 'rgba(255,107,157,0.2)', color: '#FF6B9D' }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="text-4xl font-black text-white mb-2">Jujutsu Kaisen</h1>
                <p className="text-white/50 text-sm mb-4">呪術廻戦 • 47 Episodes • Ongoing</p>
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <Star className="fill-yellow-400 text-yellow-400" size={20} />
                    <span className="text-2xl font-black text-white">9.0</span>
                    <span className="text-white/40 text-sm">/10</span>
                  </div>
                  <span className="text-white/20">|</span>
                  <span className="text-white/50 text-sm">98K ratings</span>
                  <span className="text-white/20">|</span>
                  <span className="text-white/50 text-sm">Ranked #7</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button className="flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full transition-all hover:scale-105 hover:opacity-90"
                    style={{ background: 'linear-gradient(135deg, #FF6B9D, #FF8C42)' }}>
                    <Star size={16} /> Rate This Anime
                  </button>
                  <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-full border border-white/10 transition-all">
                    <Plus size={16} /> Add to Watchlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-10">

            <section>
              <h2 className="text-xl font-black text-white mb-4">Synopsis</h2>
              <p className="text-white/60 leading-relaxed">
                Yuji Itadori is a boy with tremendous physical strength. One day he swallows a cursed object —
                the finger of the demon Ryomen Sukuna — and becomes Sukuna's host. He is welcomed into the
                Tokyo Metropolitan Jujutsu Technical High School to exorcise demons and consume the remaining
                fingers of Sukuna, before being executed. A dark fantasy story of curses, sorcerers, and the
                thin line between life and death.
              </p>
            </section>

            <section>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-black text-white flex items-center gap-2">
                  <MessageCircle size={20} style={{ color: '#FF6B9D' }} />
                  Discussion Threads
                </h2>
                <button className="text-sm font-semibold px-4 py-2 rounded-full text-white hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #FF6B9D, #FF8C42)' }}>
                  + New Thread
                </button>
              </div>
              <div className="space-y-3">
                {[
                  { title: "Is Gojo the strongest character in anime history?", replies: 892, votes: 3421, hot: true },
                  { title: "Sukuna's true power — what are his limits?", replies: 445, votes: 1823, hot: true },
                  { title: "Season 3 predictions and theories", replies: 234, votes: 876, hot: false },
                  { title: "Best fight scenes ranked", replies: 178, votes: 654, hot: false },
                ].map((thread, i) => (
                  <div key={i} className="flex gap-4 bg-white/5 hover:bg-white/8 border border-white/10 hover:border-white/20 rounded-xl p-4 transition-all cursor-pointer group">
                    <div className="flex flex-col items-center gap-1 flex-shrink-0">
                      <ThumbsUp size={14} className="text-white/40" />
                      <span className="text-xs font-bold text-white/60">{thread.votes.toLocaleString()}</span>
                      <ThumbsDown size={14} className="text-white/40" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        {thread.hot && (
                          <span className="text-xs font-bold px-2 py-0.5 rounded-full"
                            style={{ backgroundColor: 'rgba(255,140,66,0.15)', color: '#FF8C42' }}>
                            🔥 HOT
                          </span>
                        )}
                      </div>
                      <h3 className="text-white font-semibold text-sm group-hover:text-pink-300 transition-colors">
                        {thread.title}
                      </h3>
                      <span className="text-xs text-white/30 flex items-center gap-1 mt-2">
                        <MessageCircle size={10} /> {thread.replies} replies
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-4">Anime Details</h3>
              <div className="space-y-3">
                {[
                  { label: "Studio", value: "MAPPA" },
                  { label: "Season", value: "Fall 2020" },
                  { label: "Episodes", value: "47" },
                  { label: "Duration", value: "23 min/ep" },
                  { label: "Status", value: "Ongoing" },
                  { label: "Source", value: "Manga" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between">
                    <span className="text-white/40 text-sm">{item.label}</span>
                    <span className="text-white text-sm font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-4">Rating Breakdown</h3>
              <div className="space-y-2">
                {[
                  { stars: 5, percent: 68 },
                  { stars: 4, percent: 20 },
                  { stars: 3, percent: 8 },
                  { stars: 2, percent: 2 },
                  { stars: 1, percent: 2 },
                ].map((item) => (
                  <div key={item.stars} className="flex items-center gap-2">
                    <span className="text-white/40 text-xs w-3">{item.stars}</span>
                    <Star size={10} className="text-yellow-400 fill-yellow-400 flex-shrink-0" />
                    <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full rounded-full"
                        style={{ width: `${item.percent}%`, background: 'linear-gradient(135deg, #FF6B9D, #FF8C42)' }} />
                    </div>
                    <span className="text-white/30 text-xs w-6">{item.percent}%</span>
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