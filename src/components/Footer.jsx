export default function Footer() {
  return (
    <footer id="contato" className="py-16 px-4 bg-zinc-900 text-white text-center">
      <h3 className="text-2xl font-bold">Pronto para aumentar suas vendas?</h3>
      <p className="text-zinc-400 text-sm mt-2">Vamos colocar seu catálogo ou página no ar sem complicações.</p>
      <div className="mt-6">
        <a 
          href="https://wa.me/5521999999999" 
          target="_blank" 
          rel="noreferrer"
          className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-3 rounded-lg transition"
        >
          Conversar pelo WhatsApp
        </a>
      </div>
      <p className="mt-12 text-xs text-zinc-500">© Matheus Thimoteo. Desenvolvedor Web.</p>
    </footer>
  );
}
