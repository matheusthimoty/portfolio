export default function Bonus() {
  const bonuses = [
    {
      title: 'Vídeo Ensinando a Mexer',
      desc: 'Um vídeo curto e prático mostrando como você mesmo adiciona ou altera preços no dia a dia.',
    },
    {
      title: 'Placa de QR Code para o Balcão',
      desc: 'Arquivo pronto para imprimir e colocar no seu balcão físico para os clientes abrirem na hora.',
    },
    {
      title: 'Acompanhamento Pós-Entrega',
      desc: 'Canal direto para tirar dúvidas e fazer ajustes operacionais com prioridade.',
    },
  ]

  return (
    <section className="py-20 px-4 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Card de Garantia de 15 Dias (Redução de Risco) */}
        <div className="bg-emerald-50/80 border-2 border-emerald-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-black text-2xl shrink-0 shadow-sm">
            ✓
          </div>
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-md">
              Compromisso de Entrega Thimotech
            </span>
            <h3 className="text-xl font-black text-slate-900 mt-1.5">
              Garantia de 15 Dias com Ajustes Ilimitados
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
              Após a entrega do catálogo, você tem 15 dias para testar na
              prática com seus clientes reais. Se precisar mudar cores, alterar
              ordem de produtos ou ajustar textos, fazemos tudo sem nenhum custo
              extra até ficar exatamente como você imaginou.
            </p>
          </div>
        </div>

        {/* Bônus */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-8 sm:p-10 shadow-xs">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full uppercase tracking-wider">
              Sem Custo Adicional
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
              Bônus Inclusos na Sua Implantação
            </h3>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {bonuses.map((b, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-100"
              >
                <span className="w-2 h-2 rounded-full bg-blue-600 block mb-2" />
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
