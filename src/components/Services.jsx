export default function Services() {
  const services = [
    {
      title: 'Vitrine Online com a Sua Marca',
      desc: 'Um link rápido e bonito com seus produtos organizados por categorias, pronto para colocar na bio do Instagram.',
      badge: 'Visual Próprio',
    },
    {
      title: 'Envio do Pedido Somado no WhatsApp',
      desc: 'O cliente clica, monta o carrinho e a mensagem chega para você com o nome dele, endereço e valor exato calculado.',
      badge: 'Sem Erros de Conta',
    },
    {
      title: 'Ícone de Aplicativo no Celular do Cliente',
      desc: 'O cliente pode adicionar o ícone da sua loja na tela inicial do celular como se fosse um app, sem precisar de loja de aplicativos.',
      badge: 'Praticidade',
    },
    {
      title: 'Cadastro dos Primeiros Produtos & Suporte',
      desc: 'Entregamos o catálogo já com seus primeiros produtos cadastrados e ensinamos sua equipe a atualizar tudo com facilidade.',
      badge: 'Pronto para Rodar',
    },
  ]

  return (
    <section className="py-24 px-4 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full uppercase tracking-wider">
            Tudo Incluso
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            O que você recebe pronto para começar a vender
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
