export default function Comparison() {
  const features = [
    {
      name: 'Taxa sobre pedidos faturados',
      platform: '2% a 4% por venda',
      ours: '0% (Margem integral sua)',
    },
    {
      name: 'Mensalidade obrigatória',
      platform: 'R$ 99 a R$ 349 / mês',
      ours: 'R$ 0 de mensalidade',
    },
    {
      name: 'Canal de fechamento do pedido',
      platform: 'Painel complexo',
      ours: 'Direto no seu WhatsApp oficial',
    },
    {
      name: 'Gestão de catálogo e valores',
      platform: 'Painéis burocráticos',
      ours: 'Fácil como uma planilha Google',
    },
    {
      name: 'Acesso sem download de app',
      platform: 'Limitado',
      ours: 'Link web com ícone PWA',
    },
    {
      name: 'Propriedade da aplicação',
      platform: 'Aluguel contínuo',
      ours: 'Solução própria definitiva',
    },
  ]

  return (
    <section
      id="comparativo"
      className="py-24 px-4 bg-slate-50 border-b border-slate-200/80"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full text-xs font-semibold text-blue-700 mb-3">
            Análise de Custo-Benefício
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Plataformas Tradicionais vs. Soluções Thimotech
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Entenda a diferença entre alugar um software com comissão mensal e
            ter seu próprio canal de vendas direto.
          </p>
        </div>

        <div className="overflow-hidden bg-white border border-slate-200/80 rounded-2xl shadow-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-100/60">
                <th className="py-4 px-6 text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Critério
                </th>
                <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider hidden sm:table-cell">
                  Plataformas Padrão
                </th>
                <th className="py-4 px-6 text-xs font-extrabold text-blue-700 uppercase tracking-wider bg-blue-50/50">
                  Thimotech Soluções
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
              {features.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 transition">
                  <td className="py-4 px-6 font-semibold text-slate-900">
                    {item.name}
                  </td>
                  <td className="py-4 px-6 text-slate-500 hidden sm:table-cell">
                    {item.platform}
                  </td>
                  <td className="py-4 px-6 font-bold text-emerald-800 bg-blue-50/30">
                    {item.ours}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
