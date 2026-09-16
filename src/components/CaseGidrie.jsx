export default function CaseGidrie() {
  const highlights = [
    {
      label: 'Tempo médio de fechamento',
      before: '18 minutos',
      after: '3 minutos',
    },
    {
      label: 'Erros na anotação de itens',
      before: 'Frequentes',
      after: 'Zero erros',
    },
    {
      label: 'Custo mensal de plataforma',
      before: 'R$ 299/mês',
      after: 'R$ 0,00',
    },
  ]

  return (
    <section
      id="case"
      className="py-24 px-4 bg-white border-b border-slate-200/80"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Coluna de Narrativa de Negócio */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full text-xs font-semibold text-slate-700">
              Estudo de Caso Real
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Como a Papelaria Gidriê eliminou gargalos no atendimento
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Com dezenas de modelos de cadernos, planners e coleções sazonais,
              o atendimento dependia de enviar fotos soltas pelo chat e somar
              valores à mão.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Com a implementação da vitrine web própria, os clientes selecionam
              especificações diretamente no link da bio e chegam à conversa com
              a lista pronta e o total calculado.
            </p>

            <div className="pt-3">
              <a
                href="https://gidre.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 hover:underline"
              >
                Acessar projeto em produção →
              </a>
            </div>
          </div>

          {/* Cartão de Resultados e Métricas */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-7 shadow-xs">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-5">
              Impacto Direto na Operação
            </h3>

            <div className="space-y-4">
              {highlights.map((h, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/70 p-4 rounded-xl"
                >
                  <span className="text-xs font-medium text-slate-500 block">
                    {h.label}
                  </span>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-xs text-red-500 line-through font-medium">
                      {h.before}
                    </span>
                    <span className="text-sm font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                      {h.after}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
