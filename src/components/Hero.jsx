import { Rocket, Star, Swords } from "lucide-react";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium mb-4">
              <Star className="h-3.5 w-3.5"/>
              Personalized Chess Engine
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              Meet Karthik — a bot trained to play like you
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              Import your games, pick a time control, and let friends challenge your style.
              We’ll mirror your strength across bullet, blitz, and rapid.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#setup" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-md shadow-sm transition">
                <Rocket className="h-4 w-4"/>
                Configure Bot
              </a>
              <a href="#play" className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-900 px-4 py-2.5 rounded-md border border-slate-200">
                <Swords className="h-4 w-4"/>
                Play a Demo Game
              </a>
            </div>
          </div>
          <div className="relative aspect-square rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <Spline
              scene="https://prod.spline.design/UGnf9D1Hp3OG8vSG/scene.splinecode"
              style={{ width: "100%", height: "100%" }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
