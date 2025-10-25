import { Bot, Settings } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-sm">
            <Bot className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <p className="text-sm text-slate-500">Lichess-ready</p>
            <h1 className="text-lg font-semibold tracking-tight">Karthik Chess Bot</h1>
          </div>
        </div>
        <nav className="flex items-center gap-3 text-slate-600">
          <a href="#train" className="px-3 py-2 rounded-md hover:bg-slate-100">Training</a>
          <a href="#play" className="px-3 py-2 rounded-md hover:bg-slate-100">Play</a>
          <a href="#setup" className="px-3 py-2 rounded-md hover:bg-slate-100 flex items-center gap-2"><Settings className="h-4 w-4"/>Setup</a>
        </nav>
      </div>
    </header>
  );
}
