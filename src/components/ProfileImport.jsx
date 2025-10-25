import { useState } from "react";
import { DownloadCloud } from "lucide-react";

export default function ProfileImport() {
  const [chessComProfiles, setChessComProfiles] = useState([
    "53_karthik",
    "5395Karthik",
    "Bee0205",
    "sniperbishops",
  ]);
  const [lichessProfiles, setLichessProfiles] = useState([
    "s_karthik",
    "s_karthi",
    "KarthikSajja",
  ]);
  const [status, setStatus] = useState("");

  const handleImport = (e) => {
    e.preventDefault();
    setStatus(
      "Queued import. We’ll fetch recent games from chess.com and lichess and prepare training."
    );
    // In a full app, this would call the backend to import and train.
  };

  const updateChessCom = (index, value) => {
    const next = [...chessComProfiles];
    next[index] = value;
    setChessComProfiles(next);
  };

  const updateLichess = (index, value) => {
    const next = [...lichessProfiles];
    next[index] = value;
    setLichessProfiles(next);
  };

  return (
    <section id="train" className="max-w-6xl mx-auto px-4 py-10">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <DownloadCloud className="h-5 w-5 text-emerald-600" />
          <h3 className="text-lg font-semibold">Import your games</h3>
        </div>
        <form onSubmit={handleImport} className="space-y-6">
          <div className="space-y-3">
            <h4 className="font-medium">chess.com profiles</h4>
            {chessComProfiles.map((p, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
                <label className="text-sm text-slate-600">Profile {idx + 1}</label>
                <input
                  value={p}
                  onChange={(e) => updateChessCom(idx, e.target.value)}
                  placeholder="chess.com username"
                  className="md:col-span-2 w-full px-3 py-2 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">lichess.org profiles</h4>
            {lichessProfiles.map((p, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
                <label className="text-sm text-slate-600">Profile {idx + 1}</label>
                <input
                  value={p}
                  onChange={(e) => updateLichess(idx, e.target.value)}
                  placeholder="lichess username"
                  className="md:col-span-2 w-full px-3 py-2 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2">
            <p className="text-sm text-slate-600">
              We’ll use these games to align the bot’s playing strength in bullet, blitz, and rapid.
            </p>
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md"
            >
              Import Games
            </button>
          </div>
          {status && (
            <p className="text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-2 rounded-md text-sm">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
