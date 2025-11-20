import { Brain, Network, Cpu, BookOpen, ShieldCheck, Rocket } from 'lucide-react';

const items = [
  { icon: Brain, title: 'Bazele Inteligenței Artificiale', desc: 'Ce este AI, tipuri de învățare și concepte fundamentale pentru începători.' },
  { icon: BookOpen, title: 'Ce sunt Modelele de Limbaj (LLM)', desc: 'Cum funcționează modelele de limbaj mari și unde sunt folosite.' },
  { icon: Network, title: 'Rețele Neuronale', desc: 'Neuroni artificiali, straturi, funcții de activare și arhitecturi de bază.' },
  { icon: Cpu, title: 'Antrenare vs. Inferență', desc: 'Diferența dintre procesul de învățare și utilizare a unui model.' },
  { icon: ShieldCheck, title: 'Etică în AI', desc: 'Responsabilitate, bias, transparență și impact social.' },
  { icon: Rocket, title: 'Aplicații moderne ale AI', desc: 'Asistenți inteligenți, viziune computerizată, generare de conținut și multe altele.' },
];

function Domains() {
  return (
    <section className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none [background:radial-gradient(700px_200px_at_20%_15%,rgba(99,102,241,.25),transparent),radial-gradient(500px_200px_at_80%_85%,rgba(236,72,153,.2),transparent)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">Domeniile acoperite</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 text-white/90 backdrop-blur relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-fuchsia-500/10 to-sky-500/10 blur-2xl" />
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-white/10 border border-white/10">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-white">{title}</h3>
              </div>
              <p className="mt-3 text-white/70 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Domains;
