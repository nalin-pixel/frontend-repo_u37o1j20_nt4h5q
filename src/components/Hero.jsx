import Spline from '@splinetool/react-spline'
import { Sparkles, Play, ArrowRight } from 'lucide-react'

function Badge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-white/5 ring-1 ring-white/10 text-blue-200 backdrop-blur">
      <Sparkles className="w-4 h-4 text-blue-300" />
      <span className="text-xs tracking-wide">AI-powered job matching</span>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(59,130,246,0.25),transparent),radial-gradient(1000px_500px_at_110%_10%,rgba(168,85,247,0.18),transparent)]">
      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient veil to improve contrast (doesn't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/20 to-slate-950/70" />

      {/* Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/20 ring-1 ring-white/10 flex items-center justify-center">
              <span className="text-white font-bold">JS</span>
            </div>
            <span className="text-white/90 font-semibold tracking-tight">JobSwiper</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="text-white/70 hover:text-white transition">Features</a>
            <a href="#demo" className="text-white/70 hover:text-white transition">Demo</a>
            <a href="#footer" className="text-white/70 hover:text-white transition">Contact</a>
            <a href="#" className="rounded-lg bg-white/10 hover:bg-white/20 text-white px-4 py-2 transition ring-1 ring-white/10">Sign in</a>
          </div>
        </div>

        {/* Hero copy */}
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 md:pt-16 md:pb-40">
          <div className="max-w-2xl">
            <Badge />
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Swipe your way to the perfect hire — or the perfect job
            </h1>
            <p className="mt-5 text-lg md:text-xl text-blue-100/90">
              Like your favorite dating app, but for careers. Our AI learns your preferences and recommends roles and candidates that truly fit — fast, fair, and fun.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#demo" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white px-5 py-3 font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition">
                <Play className="w-4 h-4" /> See it in action
              </a>
              <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 text-white px-5 py-3 font-semibold ring-1 ring-white/10 hover:bg-white/20 transition">
                Explore features <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-white/70">
              <div className="flex -space-x-2">
                {['A','B','C','D'].map((l, i) => (
                  <div key={i} className="size-7 rounded-full bg-white/10 ring-2 ring-white/20 flex items-center justify-center">{l}</div>
                ))}
              </div>
              <p>
                Trusted by candidates and teams to surface the best matches in minutes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
