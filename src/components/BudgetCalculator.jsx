import { useState } from 'react'

export default function BudgetCalculator() {
  const [selectedItems, setSelectedItems] = useState([1]) // Começa com landing page marcada
  const SEU_NUMERO_WHATSAPP = '5521999999999' // Substitua pelo seu DDD + número

  const options = [
    {
      id: 1,
      title: 'Landing Page de Alta Conversão',
      desc: 'Página única focada em vendas/serviços, rápida e responsiva.',
      basePrice: 650,
    },
    {
      id: 2,
      title: 'Catálogo de Produtos com Carrinho',
      desc: 'Vitrine digital com fechamento de pedidos no WhatsApp.',
      basePrice: 850,
    },
    {
      id: 3,
      title: 'Configuração de Domínio e E-mail Profissional',
      desc: 'Auxílio na compra e apontamento de DNS (ex: contato@suaempresa.com.br).',
      basePrice: 150,
    },
    {
      id: 4,
      title: 'Suporte Prioritário & Manutenção Mensal',
      desc: 'Atualização periódica de produtos e banners após entrega.',
      basePrice: 200,
    },
  ]

  const toggleItem = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    )
  }

  const totalPrice = options
    .filter((opt) => selectedItems.includes(opt.id))
    .reduce((acc, curr) => acc + curr.basePrice, 0)

  const handleSendQuote = () => {
    if (selectedItems.length === 0) return

    const chosen = options
      .filter((opt) => selectedItems.includes(opt.id))
      .map((opt) => `• ${opt.title}`)
      .join('\n')

    const msg =
      `*SOLICITAÇÃO DE ORÇAMENTO PERSONALIZADO*\n\n` +
      `Tenho interesse nos seguintes serviços:\n${chosen}\n\n` +
      `*Estimativa inicial na calculadora:* R$ ${totalPrice.toFixed(2)}\n\n` +
      `Olá Matheus! Gostaria de conversar para alinhar detalhes e prazos do meu projeto.`

    const url = `https://wa.me/${SEU_NUMERO_WHATSAPP}?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank')
  }

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <div className="text-center max-w-xl mx-auto mb-10">
        <span className="text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
          Transparência Total
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mt-3">
          Simule o Investimento do Seu Projeto
        </h2>
        <p className="text-zinc-600 text-sm mt-2">
          Selecione os recursos necessários para o seu modelo de negócio e
          receba uma proposta objetiva.
        </p>
      </div>

      <div className="bg-white border border-zinc-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
        {options.map((opt) => {
          const isChecked = selectedItems.includes(opt.id)
          return (
            <label
              key={opt.id}
              onClick={() => toggleItem(opt.id)}
              className={`flex items-start justify-between p-4 rounded-xl border cursor-pointer transition select-none ${
                isChecked
                  ? 'border-emerald-600 bg-emerald-50/20'
                  : 'border-zinc-200 hover:border-zinc-300'
              }`}
            >
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => {}}
                  className="mt-1 h-4 w-4 rounded text-emerald-600 focus:ring-emerald-500 border-zinc-300"
                />
                <div>
                  <h4 className="font-bold text-zinc-900 text-sm">
                    {opt.title}
                  </h4>
                  <p className="text-xs text-zinc-500 mt-0.5">{opt.desc}</p>
                </div>
              </div>
              <span className="text-sm font-semibold text-zinc-900 shrink-0 ml-4">
                a partir de R$ {opt.basePrice}
              </span>
            </label>
          )
        })}

        <div className="mt-8 pt-6 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs text-zinc-500 uppercase tracking-wide">
              Investimento Estimado
            </span>
            <p className="text-2xl font-black text-zinc-900">
              {totalPrice > 0 ? `R$ ${totalPrice.toFixed(2)}` : 'R$ 0,00'}
            </p>
          </div>

          <button
            onClick={handleSendQuote}
            disabled={selectedItems.length === 0}
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-sm transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Enviar Simulação no WhatsApp →
          </button>
        </div>
      </div>
    </section>
  )
}
