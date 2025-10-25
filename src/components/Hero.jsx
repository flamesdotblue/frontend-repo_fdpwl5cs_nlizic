import { Rocket, Star, Swords } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-cyan-50" />
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
          <div className="relative">
            <div className="aspect-square rounded-2xl border border-slate-200 bg-white shadow-sm p-4">
              <ChessPreview />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChessPreview() {
  const files = ["a","b","c","d","e","f","g","h"];
  const ranks = [8,7,6,5,4,3,2,1];
  const startPieces = new Map([
    ["a8","♜"],["b8","♞"],["c8","♝"],["d8","♛"],["e8","♚"],["f8","♝"],["g8","♞"],["h8","♜"],
    ["a7","♟"],["b7","♟"],["c7","♟"],["d7","♟"],["e7","♟"],["f7","♟"],["g7","♟"],["h7","♟"],
    ["a2","♙"],["b2","♙"],["c2","♙"],["d2","♙"],["e2","♙"],["f2","♙"],["g2","♙"],["h2","♙"],
    ["a1","♖"],["b1","♘"],["c1","♗"],["d1","♕"],["e1","♔"],["f1","♗"],["g1","♘"],["h1","♖"],
  ]);

  return (
    <div className="grid grid-cols-8 grid-rows-8 w-full h-full rounded-xl overflow-hidden">
      {ranks.map(r => files.map((f, i) => {
        const square = `${f}${r}`;
        const isDark = (i + r) % 2 === 0;
        return (
          <div key={square} className={`${isDark ? 'bg-emerald-200' : 'bg-emerald-50'} flex items-center justify-center text-2xl select-none`}>
            <span className="">
              {startPieces.get(square) || ''}
            </span>
          </div>
        );
      }))}
    </div>
  );
}
