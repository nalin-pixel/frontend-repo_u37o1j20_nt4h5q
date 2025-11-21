import { Linkedin, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="footer" className="relative bg-slate-950 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-white text-xl font-semibold">JobSwiper</h3>
            <p className="mt-2 text-blue-100/70 max-w-md">A modern, swipe-first platform that matches candidates and teams with uncanny accuracy.</p>
          </div>
          <div className="md:justify-self-end flex items-center gap-3">
            <a href="#" className="size-9 rounded-lg bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-white/80 hover:text-white"> <Linkedin className="w-5 h-5" /> </a>
            <a href="#" className="size-9 rounded-lg bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-white/80 hover:text-white"> <Twitter className="w-5 h-5" /> </a>
            <a href="mailto:hello@jobswiper.app" className="size-9 rounded-lg bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-white/80 hover:text-white"> <Mail className="w-5 h-5" /> </a>
          </div>
        </div>
        <div className="mt-8 text-xs text-white/50">© {new Date().getFullYear()} JobSwiper — All rights reserved.</div>
      </div>
    </footer>
  )
}
