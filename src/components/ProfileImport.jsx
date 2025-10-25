import { useState } from "react";
import { DownloadCloud } from "lucide-react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "";

async function importFrom(source, username, limit = 50) {
  const endpoint = source === "chesscom" ? "/import/chesscom" : "/import/lichess";
  const res = await fetch(`${BACKEND_URL}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, limit }),
  });
  if (!res.ok) {
    const t = await res.text();
    throw new Error(t || `Failed to import from ${source} for ${username}`);
  }
  return res.json();
}

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
  const [loading, setLoading] = useState(false);

  const handleImport = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Starting import…");

    let total = 0;
    const details = [];

    try {
      for (const u of chessComProfiles.filter(Boolean)) {
        try {
          const r = await importFrom("chesscom", u.trim(), 50);
          total += r.inserted || 0;
          details.push(`chess.com/${u}: ${r.inserted || 0}`);
        } catch (err) {
          details.push(`chess.com/${u}: error`);
        }
      }
      for (const u of lichessProfiles.filter(Boolean)) {
        try {
          const r = await importFrom("lichess", u.trim(), 50);
          total += r.inserted || 0;
          details.push(`lichess/${u}: ${r.inserted || 0}`);
        } catch (err) {
          details.push(`lichess/${u}: error`);
        }
      }
      setStatus(`Imported ${total} games. ${details.join(" • ")}`);
    } catch (err) {
      setStatus("Import failed. Please verify usernames and try again.");
    } finally {
      setLoading(false);
    }
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
                  className="md:col-span-2 w-full px-3 py-2 rounded-md border border-solid border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
              disabled={loading}
              className={`px-4 py-2 rounded-md text-white ${loading ? "bg-emerald-400" : "bg-emerald-600 hover:bg-emerald-700"}`}
            >
              {loading ? "Importing…" : "Import Games"}
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
