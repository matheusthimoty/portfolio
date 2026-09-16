import { useState } from 'react'
import { demoProducts } from '../data/demoProducts'
import { siteConfig } from '../config/siteConfig'

export default function DemoCart() {
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [cart, setCart] = useState([])
  const [customerName, setCustomerName] = useState('')
  const [deliveryType, setDeliveryType] = useState('Retirada no Balcão')
  const [address, setAddress] = useState('')
  const [toastMessage, setToastMessage] = useState('')

  const categories = ['Todos', 'Papelaria', 'Doceria', 'Festas']

  const filteredProducts =
    selectedCategory === 'Todos'
      ? demoProducts
      : demoProducts.filter((item) => item.category === selectedCategory)

  const addToCart = (product) => {
    setCart((prev) => [...prev, product])
    setToastMessage(`"${product.name}" adicionado.`)
    setTimeout(() => setToastMessage(''), 2200)
  }

  const clearCart = () => setCart([])
  const total = cart.reduce((acc, item) => acc + item.price, 0)

  const handleCheckout = () => {
    if (cart.length === 0) return

    const itemsList = cart
      .map((i) => `• [${i.category}] ${i.name} — R$ ${i.price.toFixed(2)}`)
      .join('\n')

    const localEntrega =
      deliveryType === 'Delivery' && address
        ? `\n*Endereço de Entrega:* ${address}`
        : ''

    const message =
      `*SIMULAÇÃO DE PEDIDO (CATÁLOGO THIMOTECH)*\n\n` +
      `*Cliente:* ${customerName || 'Visitante da Plataforma'}\n` +
      `*Modalidade:* ${deliveryType}${localEntrega}\n\n` +
      `*Itens Solicitados:*\n${itemsList}\n\n` +
      `*Total Consolidado: R$ ${total.toFixed(2)}*\n\n` +
      `_Olá equipe Thimotech! Testei a demonstração no site e gostaria de entender como implantar esse sistema no meu comércio._`

    window.open(
      `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank',
    )
  }

  return (
    <section
      id="demo"
      className="py-24 px-4 bg-slate-50 border-b border-slate-200/80 relative"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full text-xs font-semibold text-blue-700 mb-3">
            Módulo de Autoatendimento
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Experiência de Compra Simples e Intuitiva
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Seu cliente visualiza os itens por categorias, adiciona ao carrinho
            e envia o pedido formatado direto no WhatsApp da sua loja.
          </p>
        </div>

        {toastMessage && (
          <div className="fixed top-20 right-6 z-50 bg-slate-900 text-white text-xs font-medium px-4 py-2.5 rounded-xl shadow-lg border border-slate-700">
            {toastMessage}
          </div>
        )}

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900'
              }`}
            >
              {cat === 'Todos' ? 'Todos os Segmentos' : cat}
            </button>
          ))}
        </div>

        {/* Cards de Produto */}
        <div className="grid sm:grid-cols-3 gap-5">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                  {p.category}
                </span>
                <h4 className="font-bold text-slate-900 text-base mt-3 leading-snug">
                  {p.name}
                </h4>
                <p className="text-xs text-slate-500 mt-1">{p.detail}</p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 font-medium block">
                    Valor
                  </span>
                  <span className="text-lg font-black text-slate-900">
                    R$ {p.price.toFixed(2)}
                  </span>
                </div>
                <button
                  onClick={() => addToCart(p)}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-3.5 py-2 rounded-lg transition shadow-2xs cursor-pointer"
                >
                  Adicionar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Terminal do Checkout */}
        <div className="mt-10 bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center pb-6 border-b border-slate-100 gap-3">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Simulador de Pedido
              </span>
              <h3 className="text-lg font-extrabold text-slate-900 mt-0.5">
                Resumo da Compra
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {cart.length} item(ns) no carrinho
              </p>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-xs text-slate-400 font-medium block">
                Total Estimado
              </span>
              <span className="text-2xl sm:text-3xl font-black text-slate-900">
                R$ {total.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Nome do Cliente
              </label>
              <input
                type="text"
                placeholder="Ex: Vanessa Ramos"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full text-sm border border-slate-200 rounded-xl p-3 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-blue-600 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Tipo de Atendimento
              </label>
              <select
                value={deliveryType}
                onChange={(e) => setDeliveryType(e.target.value)}
                className="w-full text-sm border border-slate-200 rounded-xl p-3 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-blue-600 transition"
              >
                <option value="Retirada no Balcão">
                  Retirada no Balcão / Loja Física
                </option>
                <option value="Delivery">Entrega / Delivery Local</option>
              </select>
            </div>
          </div>

          {deliveryType === 'Delivery' && (
            <div className="mt-4">
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Endereço de Entrega
              </label>
              <input
                type="text"
                placeholder="Rua, número, complemento e bairro"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full text-sm border border-slate-200 rounded-xl p-3 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-blue-600 transition"
              />
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={clearCart}
              disabled={cart.length === 0}
              className="text-xs font-semibold text-slate-400 hover:text-red-600 transition disabled:opacity-30 cursor-pointer"
            >
              Limpar seleção
            </button>

            <button
              onClick={handleCheckout}
              disabled={cart.length === 0}
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-xs hover:shadow-md transition disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z" />
              </svg>
              Testar Envio no WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
