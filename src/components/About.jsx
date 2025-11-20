function About() {
  return (
    <section id="despre" className="relative py-20 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      <div className="absolute inset-0 pointer-events-none [background:radial-gradient(600px_200px_at_70%_20%,rgba(168,85,247,.25),transparent),radial-gradient(500px_150px_at_30%_80%,rgba(56,189,248,.18),transparent)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Despre concurs</h2>
            <p className="text-white/80 leading-relaxed">
              AI Beginner Challenge este un concurs tip grilă, dedicat elevilor începători care își doresc să înțeleagă bazele inteligenței artificiale. Vei întâlni întrebări accesibile despre LLM-uri, rețele neuronale și concepte fundamentale.
            </p>
            <p className="text-white/70 mt-4">
              Scopul nostru este să încurajăm interesul pentru AI, să cultivăm curiozitatea și să oferim un parcurs prietenos către concepte moderne — fără bariere tehnice.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Accesibil', desc: 'Explicații clare și termeni simpli, potrivit pentru nivel începător.' },
              { title: 'Relevant', desc: 'Subiecte actuale despre LLM-uri, antrenare și etică.' },
              { title: 'Interactiv', desc: 'Format online, feedback imediat după finalizare.' },
              { title: 'Inspirant', desc: 'Te încurajează să descoperi domeniul AI pe cont propriu.' }
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-2xl bg-white/5 border border-white/10 text-white/90 backdrop-blur hover:bg-white/7 transition">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
