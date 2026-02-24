import Link from "next/link";
import { Star, Play, Plus, ArrowLeft, MessageCircle } from "lucide-react";

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
        <div className="h-72 bg-gradient-to-br from-orange-950/60 via-red-950/40 to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />

        {/* Anime Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <div className="flex flex-col sm:flex-row gap-6 items-start">

              {/* Poster */}
              <div className="w-36 h-52 rounded-xl bg-gradient-to-b from-orange-500/30 to-red-500/10 
                border border-white/10 flex items-center justify-center flex-shrink-0 text-5xl shadow-2xl">
                🎌
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-red-500/20 text-red-400 text-xs font-medium px-3 py-1 rounded-full border border-red-500/20">
                    Action
                  </span>
                  <span className="bg-white/5 text-white/60 text-xs font-medium px-3 py-1 rounded-full border border-white/10">
                    Fantasy
                  </span>
                  <span className="bg-white/5 text-white/60 text-xs font-medium px-3 py-1 rounded-full border border-white/10">
                    2021
                  </span>
                </div>

                <h1 className="text-4xl font-black text-white mb-2">Demon Slayer</h1>
                <p className="text-white/50 text-sm mb-4">Kimetsu no Yaiba • 44 Episodes • Finished Airing</p>

                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <Star className="text-yellow-400 fill-yellow-400" size={20} />
                    <span className="text-2xl font-black text-white">9.2</span>
                    <span className="text-white/40 text-sm">/10</span>
                  </div>
                  <span className="text-white/20">|</span>
                  <span className="text-white/50 text-sm">128K ratings</span>
                  <span className="text-white/20">|</span>
                  <span className="text-white/50 text-sm">Ranked #3</span>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 
                    text-white font-semibold px-6 py-3 rounded-full transition-all hover:scale-105">
                    <Play size={16} fill="white" />
                    Watch Now
                  </button>
                  <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 
                    text-white font-semibold px-6 py-3 rounded-full border border-white/10 transition-all">
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
                a human and kill the demon that massacred his family.
              </p>
            </section>

            {/* Episode List */}
            <section>
              <h2 className="text-xl font-black text-white mb-4">Episodes</h2>
              <div className="space-y-3">
                {[
                  { ep: 1, title: "Cruelty", duration: "23 min" },
                  { ep: 2, title: "Trainer Sakonji Urokodaki", duration: "23 min" },
                  { ep: 3, title: "Sabito and Makomo", duration: "23 min" },
                  { ep: 4, title: "Final Selection", duration: "23 min" },
                  { ep: 5, title: "My Own Steel", duration: "23 min" },
                ].map((ep) => (
                  <div key={ep.ep}
                    className="flex items-center gap-4 bg-white/5 hover:bg-white/10 
                      border border-white/10 rounded-xl p-4 transition-all cursor-pointer group">
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 
                      flex items-center justify-center text-red-400 font-bold text-sm flex-shrink-0">
                      {ep.ep}
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-medium group-hover:text-red-400 transition-colors">
                        {ep.title}
                      </div>
                      <div className="text-white/40 text-sm">{ep.duration}</div>
                    </div>
                    <Play size={16} className="text-white/20 group-hover:text-red-400 transition-colors" />
                  </div>
                ))}
              </div>
            </section>

            {/* Reviews */}
            <section>
              <h2 className="text-xl font-black text-white mb-4">Community Reviews</h2>
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
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">

            {/* Details */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-4">Details</h3>
              <div className="space-y-3">
                {[
                  { label: "Studio", value: "ufotable" },
                  { label: "Season", value: "Spring 2019" },
                  { label: "Episodes", value: "44" },
                  { label: "Duration", value: "23 min/ep" },
                  { label: "Status", value: "Finished" },
                  { label: "Source", value: "Manga" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between">
                    <span className="text-white/40 text-sm">{item.label}</span>
                    <span className="text-white text-sm font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Discussion */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <MessageCircle size={16} className="text-red-400" />
                Discussions
              </h3>
              <div className="space-y-3">
                {[
                  "Who is the strongest Hashira?",
                  "Mugen Train ending discussion",
                  "Season 3 predictions",
                ].map((topic) => (
                  <div key={topic} className="text-white/60 hover:text-white text-sm 
                    cursor-pointer transition-colors py-2 border-b border-white/5 last:border-0">
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

