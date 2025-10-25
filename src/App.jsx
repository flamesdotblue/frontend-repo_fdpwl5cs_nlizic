import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProfileImport from "./components/ProfileImport";
import TimeControlSelector from "./components/TimeControlSelector";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProfileImport />
        <TimeControlSelector />
      </main>
      <footer className="border-t border-slate-200 py-6 text-center text-sm text-slate-600">
        Built for Karthik • Bullet • Blitz • Rapid
      </footer>
    </div>
  );
}
