export default function Comparison() {
  const points = [
    {
      feature: 'Custos Recorrentes',
      platforms: 'R$ 50 a R$ 250/mês para sempre',
      custom: 'Sem mensalidade de plataforma (código seu)'
    },
    {
      feature: 'Taxas Sobre Vendas',
      platforms: 'Cobram de 1% a 3% por cada transação',
      custom: 'Zero comissão sobre seu faturamento'
    },
    {
      feature: 'Processo de Compra',
      platforms: 'Cadastros longos, recuperação de senha e abandono',
      custom: 'Pedido formatado direto no WhatsApp do cliente'
    },
    {
      feature: 'Velocidade no Celular',
      platforms: 'Pesado, com scripts extras e lentidão',
      custom: 'Carregamento instantâneo e código enxuto'
    },
    {
      feature: 'Flexibilidade de Regras',
      platforms: 'Preso aos limites dos temas prontos',
      custom: 'Adaptado exatamente à sua rotina de entregas'
    }
  ];

  return (
    <section className="py-20 px-4 max-w-5xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
          Economia Real
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mt-4">
          Por que ter uma solução própria em vez de plataformas prontas?
        </h2>
        <p className="text-zinc-600 text-sm mt-2">
          Evite pagar taxas em cima do seu faturamento ou mensalidades infinitas para ferramentas engessadas.
        </p>
      </div>

      <div className="overflow-x-auto border border-zinc-200 rounded-xl bg-white shadow-sm">
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="border-b border-zinc-200 bg-zinc-50/70">
              <th className="p-4 font-semibold text-zinc-700 w-1/3">Critério</th>
              <th className="p-4 font-semibold text-red-600 w-1/3">Plataformas Prontas</th>
              <th className="p-4 font-bold text-emerald-700 w-1/3 bg-emerald-50/50">Desenvolvimento Sob Medida</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200">
            {points.map((pt, i) => (
              <tr key={i} className="hover:bg-zinc-50/40 transition">
                <td className="p-4 font-medium text-zinc-900">{pt.feature}</td>
                <td className="p-4 text-zinc-600">{pt.platforms}</td>
                <td className="p-4 font-semibold text-emerald-800 bg-emerald-50/30">{pt.custom}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}