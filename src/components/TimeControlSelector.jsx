import { Clock } from "lucide-react";
import { useState } from "react";

export default function TimeControlSelector() {
  const [mode, setMode] = useState("blitz");
  const [time, setTime] = useState(5);
  const [increment, setIncrement] = useState(0);

  return (
    <section id="play" className="max-w-6xl mx-auto px-4 py-10">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="h-5 w-5 text-emerald-600"/>
          <h3 className="text-lg font-semibold">Choose a time control</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="text-sm text-slate-600">Speed</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                {key:'bullet', label:'Bullet'},
                {key:'blitz', label:'Blitz'},
                {key:'rapid', label:'Rapid'},
              ].map(opt => (
                <button key={opt.key} onClick={() => setMode(opt.key)}
                  className={`px-3 py-2 rounded-md border text-sm ${mode===opt.key? 'bg-emerald-600 text-white border-emerald-600':'bg-white text-slate-800 border-slate-200 hover:bg-slate-50'}`}>
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm text-slate-600">Minutes</label>
            <input type="number" min={0} max={60} value={time}
              onChange={e=>setTime(parseInt(e.target.value||'0'))}
              className="w-full px-3 py-2 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"/>
            <p className="text-xs text-slate-500">Common: 1, 3, 5, 10</p>
          </div>
          <div className="space-y-2">
            <label className="text-sm text-slate-600">Increment (sec)</label>
            <input type="number" min={0} max={60} value={increment}
              onChange={e=>setIncrement(parseInt(e.target.value||'0'))}
              className="w-full px-3 py-2 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"/>
            <p className="text-xs text-slate-500">Common: 0, 2, 5</p>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <p className="text-slate-600 text-sm">Selected: {mode} • {time}+{increment}</p>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md">Start Demo</button>
        </div>
      </div>
    </section>
  );
}
