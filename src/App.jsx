import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Domains from './components/Domains';
import Structure from './components/Structure';
import Timeline from './components/Timeline';
import Enroll from './components/Enroll';

function App() {
  const [toast, setToast] = useState(false);

  const handleStart = () => {
    setToast(true);
  };

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(false), 2500);
    return () => clearTimeout(t);
  }, [toast]);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Navbar minimal */}
      <header className="sticky top-0 z-50 backdrop-blur bg-slate-950/60 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-fuchsia-500 to-sky-500 shadow-[0_0_24px_rgba(168,85,247,.8)]"></div>
            <span className="font-semibold">AI Beginner Challenge</span>
          </div>
          <nav className="hidden sm:flex gap-6 text-sm text-white/70">
            <a href="#despre" className="hover:text-white">Despre</a>
            <a href="#domenii" className="hover:text-white">Domenii</a>
            <a href="#structura" className="hover:text-white">Structură</a>
            <a href="#timeline" className="hover:text-white">Timeline</a>
            <a href="#inscrieri" className="hover:text-white">Înscrieri</a>
          </nav>
        </div>
      </header>

      <Hero onStart={handleStart} />

      <main>
        <div id="despre"><About /></div>
        <div id="domenii"><Domains /></div>
        <div id="structura"><Structure /></div>
        <div id="timeline"><Timeline /></div>
        <div id="inscrieri"><Enroll /></div>
      </main>

      <footer className="py-10 text-center text-white/60 text-sm border-t border-white/10">
        <p>© 2025 AI Beginner Challenge • Website de prezentare</p>
      </footer>

      {/* Toast "În curând" */}
      {toast && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-start sm:justify-end">
          <div className="bg-white/10 border border-white/15 backdrop-blur text-white px-4 py-3 rounded-xl shadow-xl">
            În curând
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
