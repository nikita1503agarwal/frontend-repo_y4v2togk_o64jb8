function Structure() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">Structura concursului</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-white/90 backdrop-blur">
            <ul className="space-y-3 list-disc list-inside text-white/80">
              <li>Test grilă online, ușor de parcurs.</li>
              <li>Nivel: începător — fără cunoștințe avansate necesare.</li>
              <li>Număr estimativ întrebări: 20–30.</li>
              <li>Timp orientativ: 20–30 de minute.</li>
              <li>Corectare automată și feedback rapid.</li>
              <li>Concursul va fi lansat curând.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-white/90 backdrop-blur">
            <h3 className="font-semibold text-white mb-2">Cum te pregătești</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Revizuiește noțiuni de bază despre AI, LLM și rețele neuronale. Explorează resurse introductive și fii curios — acesta este cel mai important ingredient!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Structure;
