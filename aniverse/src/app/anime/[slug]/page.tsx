import Link from "next/link";
import { Star, Plus, ArrowLeft, MessageCircle, ThumbsUp, ThumbsDown } from "lucide-react";

export default function AnimeDetailPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm">
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>

      {/* Hero Banner */}
      <div className="relative">
        <div className="h-72" style={{ background: 'linear-gradient(135deg, rgba(255,107,157,0.15), rgba(255,140,66,0.1), black)' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <div className="flex flex-col sm:flex-row gap-6 items-start">

              {/* Poster */}
              <div className="w-36 h-52 rounded-xl flex items-center justify-center flex-shrink-0 text-5xl shadow-2xl border border-white/10"
                style={{ background: 'linear-gradient(135deg, rgba(255,107,157,0.2), rgba(255,140,66,0.1))' }}>
                🗡️
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-3">
                  {["Action", "Fantasy", "2021"].map((tag) => (
                    <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full border"
                      style={{ backgroundColor: 'rgba(255,107,157,0.08)', borderColor: 'rgba(255,107,157,0.2)', color: '#FF6B9D' }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <h1 className="text-4xl font-black text-white mb-2">Demon Slayer</h1>
                <p className="text-white/50 text-sm mb-4">Kimetsu no Yaiba • 44 Episodes • Finished Airing</p>

                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <Star className="fill-yellow-400 text-yellow-400" size={20} />
                    <span className="text-2xl font-black text-white">9.2</span>
                    <span className="text-white/40 text-sm">/10</span>
                  </div>
                  <span className="text-white/20">|</span>
                  <span className="text-white/50 text-sm">128K ratings</span>
                  <span className="text-white/20">|</span>
                  <span className="text-white/50 text-sm">Ranked #3</span>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button className="flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full transition-all hover:scale-105 hover:opacity-90"
                    style={{ background: 'linear-gradient(135deg, #FF6B9D, #FF8C42)' }}>
                    <Star size={16} />
                    Rate This Anime
                  </button>
                  <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-full border border-white/10 transition-all">
                    <Plus size={16} />
                    Add to Watchlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left Column */}
          <div className="lg:col-span-2 space-y-10">

            {/* Synopsis */}
            <section>
              <h2 className="text-xl font-black text-white mb-4">Synopsis</h2>
              <p className="text-white/60 leading-relaxed">
                It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living,
                finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko,
                the sole survivor, has been transformed into a demon herself. Though devastated by this grim
                reality, Tanjiro resolves to become a demon slayer so that he can turn his sister back into
                a human, and kill the demon that massacred his family.
              </p>
            </section>

            {/* Discussion Threads */}
            <section>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-black text-white flex items-center gap-2">
                  <MessageCircle size={20} style={{ color: '#FF6B9D' }} />
                  Discussion Threads
                </h2>
                <button className="text-sm font-semibold px-4 py-2 rounded-full transition-all hover:opacity-90 text-white"
                  style={{ background: 'linear-gradient(135deg, #FF6B9D, #FF8C42)' }}>
                  + New Thread
                </button>
              </div>
              <div className="space-y-3">
                {[
                  { title: "Who is the strongest Hashira?", replies: 234, votes: 891, hot: true },
                  { title: "Mugen Train ending — did it hit differently for you?", replies: 412, votes: 1.2, hot: true },
                  { title: "Nezuko's demon powers explained", replies: 98, votes: 445, hot: false },
                  { title: "Best animation moments in the series", replies: 176, votes: 623, hot: false },
                  { title: "Season 4 predictions and theories", replies: 301, votes: 987, hot: true },
                ].map((thread, i) => (
                  <div key={i} className="flex gap-4 bg-white/5 hover:bg-white/8 border border-white/10 hover:border-white/20 rounded-xl p-4 transition-all cursor-pointer group">
                    <div className="flex flex-col items-center gap-1 flex-shrink-0">
                      <button className="p-1 rounded hover:bg-white/10 transition-colors">
                        <ThumbsUp size={14} className="text-white/40 group-hover:text-white/60" />
                      </button>
                      <span className="text-xs font-bold text-white/60">{thread.votes}</span>
                      <button className="p-1 rounded hover:bg-white/10 transition-colors">
                        <ThumbsDown size={14} className="text-white/40" />
                      </button>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        {thread.hot && (
                          <span className="text-xs font-bold px-2 py-0.5 rounded-full"
                            style={{ backgroundColor: 'rgba(255,140,66,0.15)', color: '#FF8C42' }}>
                            🔥 HOT
                          </span>
                        )}
                      </div>
                      <h3 className="text-white font-semibold text-sm leading-snug group-hover:text-pink-300 transition-colors">
                        {thread.title}
                      </h3>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-xs text-white/30 flex items-center gap-1">
                          <MessageCircle size={10} /> {thread.replies} replies
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Reviews */}
            <section>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-black text-white flex items-center gap-2">
                  <Star size={20} style={{ color: '#FF6B9D' }} />
                  Community Reviews
                </h2>
                <button className="text-sm font-semibold px-4 py-2 rounded-full transition-all hover:opacity-90 text-white"
                  style={{ background: 'linear-gradient(135deg, #FF6B9D, #FF8C42)' }}>
                  + Write Review
                </button>
              </div>
              <div className="space-y-4">
                {[
                  { user: "SakuraNight", rating: 10, text: "Absolutely breathtaking animation and emotional storytelling. The Mugen Train arc had me in tears!", avatar: "🌸" },
                  { user: "OtakuLord99", rating: 9, text: "One of the best shounen anime ever made. The character development is top notch.", avatar: "⚔️" },
                  { user: "AnimePhilosopher", rating: 8, text: "Great visuals and action, though the pacing can be slow at times. Still highly recommended.", avatar: "📚" },
                ].map((review) => (
                  <div key={review.user} className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lg">
                        {review.avatar}
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">{review.user}</div>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} size={12}
                              className={i < Math.floor(review.rating / 2) ? "text-yellow-400 fill-yellow-400" : "text-white/20"} />
                          ))}
                        </div>
                      </div>
                      <div className="ml-auto text-white font-black">{review.rating}<span className="text-white/30 text-sm">/10</span></div>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed">{review.text}</p>
                    <div className="flex items-center gap-4 mt-3 pt-3 border-t border-white/5">
                      <button className="flex items-center gap-1 text-white/30 hover:text-white/60 text-xs transition-colors">
                        <ThumbsUp size={12} /> Helpful
                      </button>
                      <button className="flex items-center gap-1 text-white/30 hover:text-white/60 text-xs transition-colors">
                        <ThumbsDown size={12} /> Not Helpful
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">

            {/* Details */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-4">Anime Details</h3>
              <div className="space-y-3">
                {[
                  { label: "Studio", value: "ufotable" },
                  { label: "Season", value: "Spring 2019" },
                  { label: "Episodes", value: "44" },
                  { label: "Duration", value: "23 min/ep" },
                  { label: "Status", value: "Finished" },
                  { label: "Source", value: "Manga" },
                  { label: "Rating", value: "PG-13" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between">
                    <span className="text-white/40 text-sm">{item.label}</span>
                    <span className="text-white text-sm font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rating Breakdown */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-4">Rating Breakdown</h3>
              <div className="space-y-2">
                {[
                  { stars: 5, percent: 72 },
                  { stars: 4, percent: 18 },
                  { stars: 3, percent: 6 },
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

            {/* Related Discussions */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <MessageCircle size={16} style={{ color: '#FF6B9D' }} />
                Hot Topics
              </h3>
              <div className="space-y-3">
                {[
                  "Who is the strongest Hashira?",
                  "Mugen Train ending discussion",
                  "Season 4 predictions",
                  "Best Tanjiro moments",
                ].map((topic) => (
                  <div key={topic} className="text-white/60 hover:text-white text-sm cursor-pointer transition-colors py-2 border-b border-white/5 last:border-0 hover:text-pink-300">
                    {topic}
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