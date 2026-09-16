import { siteConfig } from '../config/siteConfig'

export default function Hero() {
  const metrics = [
    { value: '0%', label: 'Comissão sobre vendas faturadas' },
    { value: '100%', label: 'Pedidos direto no WhatsApp oficial' },
    { value: '5 a 7 dias', label: 'Prazo médio de entrega e setup' },
    { value: 'R$ 0', label: 'Sem taxas mensais obrigatórias' },
  ]

  return (
    <section className="relative pt-16 pb-20 px-4 bg-white border-b border-slate-200/80 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-50/50 via-slate-50/20 to-transparent pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Badge Institucional */}
        <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 mb-6 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Sistemas de Autoatendimento & Catálogo Web para o Varejo
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
          Acelere as vendas da sua loja <br className="hidden sm:inline" />
          <span className="text-blue-600">sem pagar comissão por pedido.</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Substitua PDFs desorganizados e fotos soltas no chat por um catálogo
          web interativo, ultra rápido no celular e integrado diretamente ao seu
          WhatsApp de vendas.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3.5 justify-center items-center">
          <a
            href="#demo"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer"
          >
            Ver Demonstração do Sistema
          </a>
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent('Olá equipe Thimotech! Gostaria de entender como funciona a implantação na minha loja.')}`}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200/80 text-slate-800 font-semibold text-sm px-7 py-3.5 rounded-xl border border-slate-200 transition"
          >
            Falar com Consultor
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
