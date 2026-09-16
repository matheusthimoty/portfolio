export default function Services() {
  return (
    <section id="servicos" className="py-16 px-4 bg-zinc-50 border-y border-zinc-200">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-zinc-900">Soluções para Negócios</h2>
        <div className="mt-12 grid sm:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
            <h3 className="text-xl font-bold text-zinc-900">Landing Pages Rápidas</h3>
            <p className="mt-2 text-zinc-600 text-sm">Páginas de destino focadas em converter tráfego de anúncios e redes sociais em contatos reais no WhatsApp.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
            <h3 className="text-xl font-bold text-zinc-900">Catálogo & Carrinho WhatsApp</h3>
            <p className="mt-2 text-zinc-600 text-sm">O cliente escolhe produtos, vê o total atualizado e fecha o pedido com mensagem organizada no seu WhatsApp.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
