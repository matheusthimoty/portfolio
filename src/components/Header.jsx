export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <span className="font-bold text-lg text-zinc-900 tracking-tight">Matheus Thimoteo</span>
        <nav className="hidden md:flex gap-6 text-sm text-zinc-600 font-medium">
          <a href="#servicos" className="hover:text-zinc-900 transition">Serviços</a>
          <a href="#case" className="hover:text-zinc-900 transition">Case Gidriê</a>
          <a href="#demo" className="hover:text-zinc-900 transition">Demonstração</a>
          <a href="#faq" className="hover:text-zinc-900 transition">Dúvidas</a>
        </nav>
        <a 
          href="#contato" 
          className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition"
        >
          Pedir Orçamento
        </a>
      </div>
    </header>
  );
}
