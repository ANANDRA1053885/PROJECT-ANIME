"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Check } from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  const passwordStrength = password.length === 0 ? 0 : password.length < 6 ? 1 : password.length < 10 ? 2 : 3;
  const strengthColors = ["", "#ef4444", "#FF8C42", "#4ade80"];
  const strengthLabels = ["", "Weak", "Good", "Strong"];

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4 py-12">

      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(255,107,157,0.06)' }} />
        <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(255,140,66,0.05)' }} />
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,107,157,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,107,157,0.3) 1px, transparent 1px)`,
            backgroundSize: "50px 50px"
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/">
            <span className="text-3xl font-black tracking-tight">
              GIR<span style={{ color: '#FF6B9D' }}>ON</span>
            </span>
          </Link>
          <h1 className="text-2xl font-black text-white mt-4">Join Giron</h1>
          <p className="text-white/40 text-sm mt-2">Create your account and join the community</p>
        </div>

        {/* Card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium px-4 py-3 rounded-xl transition-all">
              <span>🌐</span> Google
            </button>
            <button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium px-4 py-3 rounded-xl transition-all">
              <span>🐱</span> GitHub
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-white/30 text-xs">or create with email</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Inputs */}
          <div className="space-y-4 mb-6">

            {/* Username */}
            <div>
              <label className="text-white/60 text-sm font-medium mb-2 block">Username</label>
              <div className="relative">
                <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="SakuraNight"
                  className="w-full bg-white/5 border border-white/10 focus:border-pink-500/50 text-white placeholder-white/20 rounded-xl px-4 py-3 pl-11 outline-none transition-all text-sm"
                />
                {username.length > 3 && (
                  <Check size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-green-400" />
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-white/60 text-sm font-medium mb-2 block">Email</label>
              <div className="relative">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full bg-white/5 border border-white/10 focus:border-pink-500/50 text-white placeholder-white/20 rounded-xl px-4 py-3 pl-11 outline-none transition-all text-sm"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-white/60 text-sm font-medium mb-2 block">Password</label>
              <div className="relative">
                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 focus:border-pink-500/50 text-white placeholder-white/20 rounded-xl px-4 py-3 pl-11 pr-11 outline-none transition-all text-sm"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>

              {/* Password Strength */}
              {password.length > 0 && (
                <div className="mt-2">
                  <div className="flex gap-1 mb-1">
                    {[1, 2, 3].map((level) => (
                      <div key={level} className="flex-1 h-1 rounded-full transition-all"
                        style={{ backgroundColor: passwordStrength >= level ? strengthColors[passwordStrength] : 'rgba(255,255,255,0.1)' }} />
                    ))}
                  </div>
                  <span className="text-xs" style={{ color: strengthColors[passwordStrength] }}>
                    {strengthLabels[passwordStrength]}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Terms */}
          <p className="text-white/30 text-xs text-center mb-5">
            By creating an account you agree to our{" "}
            <span style={{ color: '#FF6B9D' }} className="cursor-pointer hover:opacity-80">Terms</span>
            {" "}and{" "}
            <span style={{ color: '#FF6B9D' }} className="cursor-pointer hover:opacity-80">Privacy Policy</span>
          </p>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 text-white font-bold py-3 rounded-xl transition-all hover:opacity-90 hover:scale-[1.02] disabled:opacity-50"
            style={{ background: 'linear-gradient(135deg, #FF6B9D, #FF8C42)' }}
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                Create Account <ArrowRight size={16} />
              </>
            )}
          </button>

          {/* Login Link */}
          <p className="text-center text-white/40 text-sm mt-6">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold hover:opacity-80 transition-opacity"
              style={{ color: '#FF6B9D' }}>
              Sign in
            </Link>
          </p>
        </div>

        {/* Perks */}
        <div className="grid grid-cols-3 gap-3 mt-6">
          {[
            { emoji: "💬", text: "Join discussions" },
            { emoji: "⭐", text: "Rate anime" },
            { emoji: "📋", text: "Track watchlist" },
          ].map((perk) => (
            <div key={perk.text} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
              <div className="text-xl mb-1">{perk.emoji}</div>
              <div className="text-white/40 text-xs">{perk.text}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}