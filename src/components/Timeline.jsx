function Timeline() {
  const items = [
    { title: 'Anunț oficial', date: 'În curând' },
    { title: 'Perioadă înscrieri', date: 'TBA' },
    { title: 'Desfășurarea concursului', date: 'TBA' },
    { title: 'Anunțarea rezultatelor', date: 'TBA' },
  ];

  return (
    <section className="relative py-20 bg-slate-950">
      <div className="relative max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">Timeline</h2>
        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-white/10" />
          <div className="space-y-8">
            {items.map((item, idx) => (
              <div key={idx} className="relative flex gap-4 sm:gap-8 items-start">
                <div className="mt-1 w-8 h-8 rounded-full bg-gradient-to-br from-fuchsia-500 to-sky-500 border-2 border-white/20 shadow-lg" />
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-white/90 w-full">
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="text-white/70 text-sm">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
