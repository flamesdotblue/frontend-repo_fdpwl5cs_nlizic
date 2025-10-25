import { KeyRound, PlugZap, ShieldCheck } from "lucide-react";

export default function SetupSteps() {
  const steps = [
    {
      icon: <KeyRound className="h-5 w-5"/>,
      title: "Get a Lichess Bot token",
      desc: "Create a Lichess account named Karthik (or your preferred name) and request a Bot API token from lichess.org/account/oauth/app."
    },
    {
      icon: <PlugZap className="h-5 w-5"/>,
      title: "Connect and train",
      desc: "We’ll import your chess.com games, build an opening profile and style heuristics, and connect the bot to play on your behalf."
    },
    {
      icon: <ShieldCheck className="h-5 w-5"/>,
      title: "Go live",
      desc: "Choose bullet/blitz/rapid pools and allow challenges. You can pause or limit ratings any time."
    },
  ];

  return (
    <section id="setup" className="max-w-6xl mx-auto px-4 py-10">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Lichess setup at a glance</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {steps.map((s, i) => (
            <div key={i} className="rounded-xl border border-slate-200 p-4 bg-gradient-to-b from-white to-slate-50">
              <div className="h-10 w-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center mb-3">
                {s.icon}
              </div>
              <h4 className="font-semibold mb-1">{s.title}</h4>
              <p className="text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-slate-500">Note: Lichess requires Bot accounts to follow fair play and API terms. You may need to complete a short form and connect via OAuth.</p>
      </div>
    </section>
  );
}
