export default function Process() {
  const steps = [
    { n: '01', title: 'Alinhamento', desc: 'Entendimento rápido do seu catálogo e do seu público.' },
    { n: '02', title: 'Desenvolvimento', desc: 'Construção da interface responsiva e leve.' },
    { n: '03', title: 'Integração', desc: 'Configuração dos formatos de pedidos para seu WhatsApp.' },
    { n: '04', title: 'Publicação', desc: 'Lançamento no ar com domínio próprio.' }
  ];

  return (
    <section className="py-20 px-4 max-w-5xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-zinc-900">Como Funciona o Processo</h2>
      <div className="mt-12 grid sm:grid-cols-4 gap-6">
        {steps.map((s) => (
          <div key={s.n} className="p-4">
            <span className="text-3xl font-black text-zinc-200">{s.n}</span>
            <h4 className="font-bold text-zinc-900 mt-2">{s.title}</h4>
            <p className="text-zinc-600 text-sm mt-1">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
