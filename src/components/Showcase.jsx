import { useEffect, useState } from 'react'
import { ThumbsUp, ThumbsDown, Star, Sparkles } from 'lucide-react'

const sampleJobs = [
  {
    id: 1,
    title: 'Senior Frontend Engineer',
    company: 'NovaLabs',
    tags: ['React', 'TypeScript', 'Design Systems'],
    score: 92,
  },
  {
    id: 2,
    title: 'Machine Learning Engineer',
    company: 'Atlas AI',
    tags: ['Python', 'LLMs', 'MLOps'],
    score: 88,
  },
  {
    id: 3,
    title: 'Product Designer',
    company: 'Orbit',
    tags: ['Figma', 'Prototyping', 'UX Research'],
    score: 85,
  },
]

export default function Showcase() {
  const [index, setIndex] = useState(0)
  const job = sampleJobs[index]

  const swipe = (dir) => {
    setIndex((i) => (i + 1) % sampleJobs.length)
  }

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % sampleJobs.length), 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="demo" className="relative py-20 md:py-28 bg-slate-950/95">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_100%_0%,rgba(168,85,247,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">See the swipe in action</h2>
          <p className="mt-4 text-blue-100/80 text-lg">A playful preview of how candidates explore roles and signal interest.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 md:p-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                <p className="text-blue-200/80">{job.company}</p>
              </div>
              <div className="inline-flex items-center gap-2 text-emerald-300 bg-emerald-500/10 px-3 py-1 rounded-full">
                <Sparkles className="w-4 h-4" /> Fit score {job.score}%
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {job.tags.map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/5 ring-1 ring-white/10 text-blue-100/90">{t}</span>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <button onClick={() => swipe('left')} className="rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-white py-3">Nope</button>
              <button className="rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-white py-3">Save</button>
              <button onClick={() => swipe('right')} className="rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white py-3">Like</button>
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 ring-1 ring-white/10 p-6 md:p-8">
            <h4 className="text-white font-semibold">How our AI decides</h4>
            <ul className="mt-4 space-y-3 text-blue-100/80">
              <li>• Skills overlap with your profile and goals</li>
              <li>• Culture and team preferences learned from your swipes</li>
              <li>• Market signals and career trajectory fit</li>
              <li>• Feedback loops that keep improving, every session</li>
            </ul>
            <div className="mt-6 text-sm text-white/60">
              This is a demo — in production we personalize rankings using multi-signal models and human-in-the-loop feedback.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
