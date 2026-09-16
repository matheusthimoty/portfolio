export default function Process() {
  const steps = [
    {
      step: '01',
      title: 'Diagnóstico & Alinhamento',
      text: 'Entendemos suas categorias, produtos e fluxo de entrega.',
    },
    {
      step: '02',
      title: 'Desenvolvimento Sob Medida',
      text: 'Construção da vitrine com sua identidade visual e regras de negócio.',
    },
    {
      step: '03',
      title: 'Conexão com WhatsApp & Testes',
      text: 'Validação do checkout automatizado e envio das mensagens.',
    },
    {
      step: '04',
      title: 'Publicação & Treinamento',
      text: 'Entrega da aplicação no ar pronta para colocar no link da sua bio.',
    },
  ]

  return (
    <section className="py-24 px-4 bg-white border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full uppercase tracking-wider">
            Metodologia
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Como funciona a implantação
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Processo ágil e transparente para colocar sua operação rodando em
            até 7 dias úteis.
          </p>
        </div>

        <div className="grid sm:grid-cols-4 gap-6">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="relative bg-slate-50 border border-slate-200/70 p-6 rounded-2xl"
            >
              <span className="text-3xl font-black text-slate-300 block">
                {st.step}
              </span>
              <h4 className="font-bold text-slate-900 text-sm mt-3">
                {st.title}
              </h4>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                {st.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
