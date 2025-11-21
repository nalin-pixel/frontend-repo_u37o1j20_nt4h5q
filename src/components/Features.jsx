import { Brain, Sparkles, Users2, Swipe, ShieldCheck, Gauge, Building2 } from 'lucide-react'

const features = [
  {
    icon: Swipe,
    title: 'Swipe-first experience',
    desc: 'Candidates and employers both swipe to signal interest. No inbox overload — just high-intent matches.'
  },
  {
    icon: Brain,
    title: 'Contextual AI matching',
    desc: 'Our models learn preferences in real-time and rank opportunities by culture, skills, and career trajectory.'
  },
  {
    icon: Users2,
    title: 'Two-sided fit',
    desc: 'We optimize for mutual alignment. Both sides see why it’s a match with transparent reasoning.'
  },
  {
    icon: Gauge,
    title: 'Time-to-match boost',
    desc: 'Cut hiring cycles from weeks to days with automated screening and instant shortlists.'
  },
  {
    icon: ShieldCheck,
    title: 'Bias-aware signals',
    desc: 'Signals tuned to reduce noise and mitigate bias in shortlisting and outreach.'
  },
  {
    icon: Building2,
    title: 'ATS-friendly',
    desc: 'One-click export to your ATS and calendar. Works with your existing workflow.'
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 md:py-28 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_0%_0%,rgba(59,130,246,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Built for speed, tuned for fit</h2>
          <p className="mt-4 text-blue-100/80 text-lg">Everything you need to go from candidates to conversations, with signals that actually matter.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl p-6 bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition">
              <div className="size-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 text-white font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-blue-100/80 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
