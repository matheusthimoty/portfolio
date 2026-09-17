export default function Comparison() {
  const features = [
    {
      name: 'Taxa cobrada sobre cada venda',
      platform: '2% a 4% por pedido',
      ours: '0% (o lucro é 100% seu)',
    },
    {
      name: 'Mensalidade obrigatória',
      platform: 'R$ 99 a R$ 349 todo mês',
      ours: 'R$ 0 de mensalidade',
    },
    {
      name: 'Onde você atende o cliente',
      platform: 'Painéis complicados',
      ours: 'Direto no WhatsApp oficial da loja',
    },
    {
      name: 'Como você muda preços e itens',
      platform: 'Telas difíceis de mexer',
      ours: 'Fácil como mexer no Excel/Google',
    },
    {
      name: 'O cliente precisa baixar app?',
      platform: 'Sim ou fica pesado',
      ours: 'Não, abre na hora pelo link',
    },
    {
      name: 'Dono do sistema',
      platform: 'Você aluga eternamente',
      ours: 'O catálogo é da sua loja',
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
            Economia Real
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Plataformas de aluguel vs. Seu catálogo na Thimotech
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Entenda por que pequenos negócios lucram muito mais com um canal de
            venda direto e sem intermediários.
          </p>
        </div>

        <div className="overflow-hidden bg-white border border-slate-200/80 rounded-2xl shadow-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-100/60">
                <th className="py-4 px-6 text-xs font-bold text-slate-700 uppercase tracking-wider">
                  O que você avalia
                </th>
                <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider hidden sm:table-cell">
                  Plataformas Tradicionais
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
