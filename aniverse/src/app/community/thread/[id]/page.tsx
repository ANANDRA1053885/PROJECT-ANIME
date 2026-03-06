"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ThumbsUp, ThumbsDown, MessageCircle, Share2, Flag, Send } from "lucide-react";

const REPLIES = [
  {
    id: 1,
    user: "OtakuLord99",
    avatar: "⚔️",
    time: "2h ago",
    content: "Gojo is clearly the strongest. His Infinity alone makes him virtually untouchable. No other character in any anime has a passive defense that strong.",
    upvotes: 1243,
    downvotes: 89,
    replies: 12,
    pinned: true,
  },
  {
    id: 2,
    user: "TitanSlayer",
    avatar: "🗡️",
    time: "3h ago",
    content: "People always forget about Zeno from Dragon Ball. He literally erased entire universes with a thought. No technique, no effort. Just pure existence-level power.",
    upvotes: 987,
    downvotes: 234,
    replies: 8,
    pinned: false,
  },
  {
    id: 3,
    user: "AnimePhilosopher",
    avatar: "📚",
    time: "4h ago",
    content: "The question itself is flawed. Each anime has its own power scaling system. Comparing across universes is like comparing apples to galaxies. That said — Gojo wins in his own universe easily.",
    upvotes: 876,
    downvotes: 123,
    replies: 15,
    pinned: false,
  },
  {
    id: 4,
    user: "SakuraNight",
    avatar: "🌸",
    time: "5h ago",
    content: "Can we talk about how Muzan literally wiped out entire demon slayer corps generations? He's been alive for 1000 years and only lost once. That kind of longevity is insane.",
    upvotes: 654,
    downvotes: 98,
    replies: 6,
    pinned: false,
  },
  {
    id: 5,
    user: "MelodyOtaku",
    avatar: "🎵",
    time: "6h ago",
    content: "Saitama. End of discussion. The entire point of his character is that he has no equal. The manga literally shows him surviving in space and jumping back from the moon.",
    upvotes: 2341,
    downvotes: 445,
    replies: 34,
    pinned: false,
  },
];

export default function ThreadPage() {
  const [comment, setComment] = useState("");
  const [votes, setVotes] = useState<Record<number, "up" | "down" | null>>({});

  const handleVote = (id: number, direction: "up" | "down") => {
    setVotes(prev => ({
      ...prev,
      [id]: prev[id] === direction ? null : direction
    }));
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">

      {/* Back */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link href="/community" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm">
          <ArrowLeft size={16} />
          Back to Community
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Thread Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6"
        >
          {/* Board tag */}
          <div className="flex items-center gap-2 mb-4">
            <Link href="/community">
              <span className="text-xs font-medium px-3 py-1 rounded-full border"
                style={{ backgroundColor: 'rgba(255,107,157,0.08)', borderColor: 'rgba(255,107,157,0.2)', color: '#FF6B9D' }}>
                🏆 Rankings & Debates
              </span>
            </Link>
            <span className="text-xs font-bold px-2 py-0.5 rounded-full"
              style={{ backgroundColor: 'rgba(255,140,66,0.15)', color: '#FF8C42' }}>
              🔥 HOT
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-black text-white mb-4 leading-tight">
            Who is objectively the strongest anime character ever?
          </h1>

          {/* Author info */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lg">
              🌸
            </div>
            <div>
              <div className="text-white font-semibold text-sm">SakuraNight</div>
              <div className="text-white/30 text-xs">Posted 2h ago • 847 replies • 2.3K votes</div>
            </div>
          </div>

          {/* Thread Body */}
          <p className="text-white/70 leading-relaxed mb-5">
            I've been having this debate with my friends for weeks now and we can't agree.
            Some say Gojo Satoru, others say Zeno, some say Saitama (but he's a joke character so does he count?).
            What does the Giron community think? Let's settle this once and for all with actual arguments —
            no powerscaling without evidence! 👊
          </p>

          {/* Thread Actions */}
          <div className="flex items-center gap-4 pt-4 border-t border-white/10">
            <div className="flex items-center gap-1 bg-white/5 rounded-full px-3 py-1.5">
              <button className="text-white/40 hover:text-green-400 transition-colors">
                <ThumbsUp size={14} />
              </button>
              <span className="text-white/60 text-sm font-medium mx-1">2.3K</span>
              <button className="text-white/40 hover:text-red-400 transition-colors">
                <ThumbsDown size={14} />
              </button>
            </div>
            <button className="flex items-center gap-1.5 text-white/40 hover:text-white transition-colors text-sm">
              <Share2 size={14} /> Share
            </button>
            <button className="flex items-center gap-1.5 text-white/40 hover:text-red-400 transition-colors text-sm ml-auto">
              <Flag size={14} /> Report
            </button>
          </div>
        </motion.div>

        {/* Reply Count */}
        <div className="flex items-center gap-2 mb-4">
          <MessageCircle size={16} style={{ color: '#FF6B9D' }} />
          <span className="text-white font-bold">847 Replies</span>
          <span className="text-white/30 text-sm ml-auto">Sort: Top Voted</span>
        </div>

        {/* Replies */}
        <div className="space-y-4 mb-8">
          {REPLIES.map((reply, i) => (
            <motion.div
              key={reply.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`bg-white/5 border rounded-2xl p-5 transition-all ${reply.pinned ? 'border-pink-500/30' : 'border-white/10'}`}
            >
              {reply.pinned && (
                <div className="text-xs font-bold mb-3 flex items-center gap-1"
                  style={{ color: '#FF6B9D' }}>
                  📌 Pinned Reply
                </div>
              )}

              {/* Reply Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-base">
                  {reply.avatar}
                </div>
                <div className="flex-1">
                  <div className="text-white font-semibold text-sm">{reply.user}</div>
                  <div className="text-white/30 text-xs">{reply.time}</div>
                </div>
              </div>

              {/* Reply Content */}
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                {reply.content}
              </p>

              {/* Reply Actions */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 bg-white/5 rounded-full px-3 py-1">
                  <button
                    onClick={() => handleVote(reply.id, "up")}
                    className="transition-colors"
                    style={{ color: votes[reply.id] === "up" ? '#4ade80' : 'rgba(255,255,255,0.3)' }}
                  >
                    <ThumbsUp size={13} />
                  </button>
                  <span className="text-white/50 text-xs font-medium mx-1">
                    {reply.upvotes + (votes[reply.id] === "up" ? 1 : 0)}
                  </span>
                  <button
                    onClick={() => handleVote(reply.id, "down")}
                    className="transition-colors"
                    style={{ color: votes[reply.id] === "down" ? '#ef4444' : 'rgba(255,255,255,0.3)' }}
                  >
                    <ThumbsDown size={13} />
                  </button>
                </div>
                <button className="flex items-center gap-1 text-white/30 hover:text-white/60 text-xs transition-colors">
                  <MessageCircle size={12} /> {reply.replies} replies
                </button>
                <button className="text-white/20 hover:text-red-400 text-xs transition-colors ml-auto">
                  <Flag size={12} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comment Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-5 sticky bottom-4"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
              style={{ background: 'linear-gradient(135deg, #FF6B9D, #FF8C42)' }}>
              🌸
            </div>
            <span className="text-white/60 text-sm font-medium">Join the debate</span>
          </div>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share your opinion... Who do you think is the strongest?"
            className="w-full bg-white/5 border border-white/10 focus:border-pink-500/50 text-white placeholder-white/20 rounded-xl px-4 py-3 outline-none transition-all text-sm resize-none"
            rows={3}
          />
          <div className="flex items-center justify-between mt-3">
            <span className="text-white/20 text-xs">{comment.length}/500</span>
            <button
              disabled={comment.length === 0}
              className="flex items-center gap-2 text-white font-semibold px-5 py-2 rounded-full transition-all hover:opacity-90 hover:scale-105 disabled:opacity-30 disabled:scale-100 text-sm"
              style={{ background: 'linear-gradient(135deg, #FF6B9D, #FF8C42)' }}
            >
              <Send size={14} />
              Post Reply
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}