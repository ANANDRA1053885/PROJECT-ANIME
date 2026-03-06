"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">

      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.png"
          alt="Hero Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay so text is readable */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(90deg, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.3) 100%)'
        }} />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32"
          style={{ background: 'linear-gradient(to bottom, transparent, #0a0a0a)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full mb-6 border"
            style={{ backgroundColor: 'rgba(255,107,157,0.08)', borderColor: 'rgba(255,107,157,0.2)', color: '#FF6B9D' }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#FF6B9D' }} />
            #1 Anime Community Platform
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 leading-none"
          >
            Your Universe of
            <span className="block" style={{
              background: 'linear-gradient(135deg, #FF6B9D, #FF8C42)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Anime Awaits
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/70 mb-10 max-w-xl leading-relaxed"
          >
            Discover, discuss, and dive deep into the world of anime.
            Join millions of fans tracking their favorites, sharing reviews,
            and connecting with the community.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/anime/jujutsu-kaisen"
              className="font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 hover:opacity-90 text-white"
              style={{ background: 'linear-gradient(135deg, #FF6B9D, #FF8C42)' }}
            >
              Explore Anime
            </Link>
            <Link href="/community"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full border border-white/10 transition-all duration-200 hover:scale-105 backdrop-blur-sm"
            >
              Join Community
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-8 mt-16"
          >
            {[
              { value: "50K+", label: "Anime Titles" },
              { value: "2M+", label: "Community Members" },
              { value: "10M+", label: "Reviews Written" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-black" style={{
                  background: 'linear-gradient(135deg, #FF6B9D, #FF8C42)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  {stat.value}
                </div>
                <div className="text-sm text-white/40 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}