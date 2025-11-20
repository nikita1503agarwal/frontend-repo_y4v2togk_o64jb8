function Enroll() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-fuchsia-500/10 via-violet-500/5 to-sky-500/10">
      <div className="absolute inset-0 pointer-events-none [background:radial-gradient(700px_200px_at_80%_20%,rgba(14,165,233,.15),transparent),radial-gradient(600px_200px_at_20%_80%,rgba(236,72,153,.15),transparent)]" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Înscrieri</h2>
        <p className="text-white/80 mb-8">Înscrierile se vor deschide în curând. Rămâi aproape pentru anunțul oficial!</p>
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/10 border border-white/15 text-white/90 backdrop-blur">
          <span className="inline-block w-2 h-2 rounded-full bg-yellow-300 animate-pulse" />
          <span>În curând</span>
        </div>
      </div>
    </section>
  );
}

export default Enroll;
