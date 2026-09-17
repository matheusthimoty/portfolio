import { siteConfig } from '../config/siteConfig'

export default function Hero() {
  const metrics = [
    { value: '0%', label: 'Sem comissão sobre o que você vende' },
    { value: '100%', label: 'Pedido organizado no seu WhatsApp' },
    { value: '5 a 7 dias', label: 'Prazo médio para colocar sua loja no ar' },
    { value: 'R$ 0', label: 'Sem taxas de aluguel por mês' },
  ]

  return (
    <section className="relative pt-16 pb-20 px-4 bg-white border-b border-slate-200/80 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-50/50 via-slate-50/20 to-transparent pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Badge amigável e direto */}
        <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 mb-6 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Para papelarias, docerias, vestuário, delivery e comércio local
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
          Pare de perder vendas no WhatsApp <br className="hidden sm:inline" />
          <span className="text-blue-600">
            sem pagar porcentagem sobre seus pedidos.
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Chega de enviar PDF pesado que ninguém abre ou perder tempo digitando
          preços repetidos. O cliente clica no link da sua bio, monta o pedido e
          manda a lista somada direto no seu atendimento.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3.5 justify-center items-center">
          <a
            href="#demo"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer"
          >
            Testar Demonstração na Prática
          </a>
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent('Olá equipe Thimotech! Quero entender como colocar o catálogo da minha loja no ar.')}`}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200/80 text-slate-800 font-semibold text-sm px-7 py-3.5 rounded-xl border border-slate-200 transition"
          >
            Tirar Dúvidas no WhatsApp
          </a>
        </div>

        {/* Métricas */}
        <div className="mt-14 pt-10 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-6 text-left sm:text-center">
          {metrics.map((m, idx) => (
            <div key={idx} className="space-y-1">
              <p className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {m.value}
              </p>
              <p className="text-xs text-slate-500 leading-snug font-medium">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
