export default function Bonus() {
  const bonuses = [
    {
      title: 'Treinamento Prático em Vídeo',
      desc: 'Tutorial passo a passo ensinando sua equipe a adicionar produtos e alterar preços.',
    },
    {
      title: 'Arte de QR Code para Balcão',
      desc: 'Arquivo pronto para impressão em alta qualidade para seus clientes acessarem na loja física.',
    },
    {
      title: 'Suporte Prioritário no Pós-Entrega',
      desc: 'Canal direto para acompanhamento e ajustes operacionais nas primeiras semanas.',
    },
  ]

  return (
    <section className="py-20 px-4 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white border border-slate-200/80 rounded-2xl p-8 sm:p-10 shadow-xs">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider">
              Incluso no Pacote
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
              Bônus Exclusivos de Implantação
            </h3>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {bonuses.map((b, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-100"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 block mb-2" />
                <h4 className="font-bold text-slate-900 text-sm">{b.title}</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
