import { useState } from 'react';
import { demoProducts } from '../data/demoProducts';

export default function DemoCart() {
  const [cart, setCart] = useState([]);
  const [customerName, setCustomerName] = useState('');
  const [deliveryType, setDeliveryType] = useState('Retirada no Balcão');
  const [address, setAddress] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  const SEU_NUMERO_WHATSAPP = '5521999999999'; // Substitua pelo seu número

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    setToastMessage(`"${product.name}" adicionado!`);
    setTimeout(() => setToastMessage(''), 2200);
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = () => {
    if (cart.length === 0) return;

    const itemsList = cart.map((i) => `• ${i.name} — R$ ${i.price.toFixed(2)}`).join('\n');
    const localEntrega = deliveryType === 'Delivery' && address ? `\n*Endereço:* ${address}` : '';

    const message = `*NOVO PEDIDO (TESTE DE DEMO)*\n\n` +
      `*Cliente:* ${customerName || 'Visitante do Portfólio'}\n` +
      `*Modalidade:* ${deliveryType}${localEntrega}\n\n` +
      `*Itens Escolhidos:*\n${itemsList}\n\n` +
      `*Total: R$ ${total.toFixed(2)}*\n\n` +
      `_Olá Matheus, gostei da demonstração e quero orçar um sistema desse para minha empresa!_`;

    const url = `https://wa.me/${SEU_NUMERO_WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="demo" className="py-20 px-4 bg-zinc-50 border-y border-zinc-200 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            Experiência do Comprador
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mt-3">Teste o Fluxo em Tempo Real</h2>
          <p className="text-zinc-600 text-sm mt-2">
            Adicione itens fictícios, selecione o método de entrega e veja o pedido chegar montado e pronto para faturamento.
          </p>
        </div>

        {/* Notificação Flutuante (Toast) */}
        {toastMessage && (
          <div className="fixed top-20 right-6 z-40 bg-zinc-900 text-white text-xs font-medium px-4 py-2.5 rounded-lg shadow-xl animate-fade">
            {toastMessage}
          </div>
        )}

        {/* Grade de Produtos Fictícios */}
        <div className="grid sm:grid-cols-3 gap-4">
          {demoProducts.map((p) => (
            <div key={p.id} className="bg-white p-5 rounded-xl border border-zinc-200 flex flex-col justify-between shadow-sm hover:border-zinc-300 transition">
              <div>
                <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wide">Produto Fictício</span>
                <h4 className="font-semibold text-zinc-900 text-sm mt-1">{p.name}</h4>
                <p className="text-emerald-700 font-bold text-base mt-2">R$ {p.price.toFixed(2)}</p>
              </div>
              <button
                onClick={() => addToCart(p)}
                className="mt-4 w-full bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold py-2.5 rounded-lg transition"
              >
                + Adicionar ao Pedido
              </button>
            </div>
          ))}
        </div>

        {/* Painel de Fechamento do Carrinho */}
        <div className="mt-8 bg-white p-6 sm:p-8 rounded-2xl border border-zinc-200 shadow-sm">
          <div className="border-b border-zinc-100 pb-5 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
            <div>
              <h3 className="font-bold text-zinc-900 text-lg">Resumo do Pedido</h3>
              <p className="text-xs text-zinc-500">{cart.length} produto(s) adicionado(s)</p>
            </div>
            <p className="text-2xl font-black text-zinc-900">Total: R$ {total.toFixed(2)}</p>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-700 mb-1">Seu Nome (para o teste)</label>
              <input
                type="text"
                placeholder="Ex: Carlos Oliveira"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full text-sm border border-zinc-300 rounded-lg p-2.5 focus:outline-none focus:border-emerald-600"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-700 mb-1">Modalidade</label>
              <select
                value={deliveryType}
                onChange={(e) => setDeliveryType(e.target.value)}
                className="w-full text-sm border border-zinc-300 rounded-lg p-2.5 focus:outline-none focus:border-emerald-600 bg-white"
              >
                <option value="Retirada no Balcão">Retirada no Balcão (Grátis)</option>
                <option value="Delivery">Entrega / Delivery</option>
              </select>
            </div>
          </div>

          {deliveryType === 'Delivery' && (
            <div className="mt-4">
              <label className="block text-xs font-semibold text-zinc-700 mb-1">Endereço de Entrega</label>
              <input
                type="text"
                placeholder="Rua, Número e Bairro"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full text-sm border border-zinc-300 rounded-lg p-2.5 focus:outline-none focus:border-emerald-600"
              />
            </div>
          )}

          <div className="mt-6 pt-6 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={clearCart}
              disabled={cart.length === 0}
              className="text-xs text-zinc-400 hover:text-red-600 transition disabled:opacity-40"
            >
              Esvaziar Itens
            </button>

            <button
              onClick={handleCheckout}
              disabled={cart.length === 0}
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-sm transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Simular Pedido no WhatsApp →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}