import Spline from '@splinetool/react-spline';

function Hero({ onStart }) {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden flex items-center justify-center">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for glow, non-blocking */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/10 to-slate-900"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <span className="inline-block px-3 py-1 rounded-full text-xs tracking-wider uppercase bg-white/10 text-white/80 border border-white/10 mb-4">Concurs de cultură generală în AI</span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_24px_rgba(168,85,247,0.25)]">
          AI Beginner Challenge 2025
        </h1>
        <p className="mt-5 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
          "Aprinde-ți curiozitatea și explorează mintea digitală" — un concurs prietenos ce te ghidează prin bazele inteligenței artificiale și neuro-inspirație.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button onClick={onStart} className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500 text-white font-semibold shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/40 transition-all duration-300 hover:scale-[1.03]">
            Începe Concursul
          </button>
          <a href="#despre" className="px-6 py-3 rounded-xl bg-white/10 text-white/90 backdrop-blur border border-white/10 hover:bg-white/15 transition">Află mai multe</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
