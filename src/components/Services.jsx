export default function Services() {
  const services = [
    {
      title: 'Catálogos & Vitrines Digitais',
      desc: 'Aplicações web completas, leves no celular e preparadas para transformar cliques no Instagram em vendas reais.',
      badge: 'Solução Core',
    },
    {
      title: 'Integração Direta com WhatsApp',
      desc: 'Estruturação do fechamento de pedido com mensagem organizada, dados do cliente e cálculo automático de valores.',
      badge: 'Automação',
    },
    {
      title: 'Configuração PWA (Atalho de App)',
      desc: 'Seu cliente salva o ícone da sua loja na tela do celular como se fosse um app oficial, sem passar pelas lojas de aplicativo.',
      badge: 'Tecnologia',
    },
    {
      title: 'Treinamento e Setup Inicial',
      desc: 'Subida dos primeiros produtos, configuração de domínio próprio e suporte para você dominar a atualização do catálogo.',
      badge: 'Implantação',
    },
  ]

  return (
    <section className="py-24 px-4 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full uppercase tracking-wider">
            Escopo de Entrega
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            O que está incluso na solução Thimotech
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 p-6 sm:p-7 rounded-2xl shadow-xs"
            >
              <span className="text-[10px] font-bold text-blue-700 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded uppercase tracking-wider">
                {item.badge}
              </span>
              <h4 className="text-lg font-bold text-slate-900 mt-3">
                {item.title}
              </h4>
              <p className="text-slate-600 text-sm mt-1.5 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
