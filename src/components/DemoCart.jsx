import { useState } from 'react';
import { demoProducts } from '../data/demoProducts';

export default function DemoCart() {
  const [cart, setCart] = useState([]);
  const SEU_NUMERO_WHATSAPP = '5521999999999'; // Substitua pelo seu DDD + número

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = () => {
    if (cart.length === 0) return;
    const itemsList = cart.map((i) => '- ' + i.name + ' (R$ ' + i.price.toFixed(2) + ')').join('\n');
    const message = 'Olá Matheus! Testei a demo no seu portfólio:\n\n' + itemsList + '\n\n*Total: R$ ' + total.toFixed(2) + '*\n\nGostaria de solicitar um orçamento para o meu negócio!';
    const url = 'https://wa.me/' + SEU_NUMERO_WHATSAPP + '?text=' + encodeURIComponent(message);
    window.open(url, '_blank');
  };

  return (
    <section id="demo" className="py-16 px-4 bg-zinc-50 border-y border-zinc-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-zinc-900">Teste o Fluxo de Compra</h2>
        <p className="text-center text-zinc-600 mt-2 text-sm">Adicione itens fictícios e veja a mensagem chegar pronta no WhatsApp.</p>
        
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          {demoProducts.map((p) => (
            <div key={p.id} className="bg-white p-4 rounded-lg border border-zinc-200 flex flex-col justify-between">
              <div>
                <h4 className="font-semibold text-zinc-900 text-sm">{p.name}</h4>
                <p className="text-emerald-700 font-bold mt-1">R$ {p.price.toFixed(2)}</p>
              </div>
              <button
                onClick={() => addToCart(p)}
                className="mt-4 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold py-2 rounded transition"
              >
                + Adicionar
              </button>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-white p-6 rounded-xl border border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs text-zinc-500 uppercase tracking-wide">Itens no carrinho: {cart.length}</span>
            <p className="text-xl font-bold text-zinc-900">Total: R$ {total.toFixed(2)}</p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={clearCart} 
              disabled={cart.length === 0}
              className="px-4 py-2 text-xs font-medium text-zinc-600 hover:text-zinc-900 disabled:opacity-40"
            >
              Limpar
            </button>
            <button
              onClick={handleCheckout}
              disabled={cart.length === 0}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-2.5 rounded-lg disabled:opacity-40 transition"
            >
              Testar Envio no WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}