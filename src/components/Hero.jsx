export default function Hero() {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto text-center">
      <span className="text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
        Desenvolvimento Web Sob Medida
      </span>
      <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold text-zinc-900 leading-tight">
        Transforme visitantes em pedidos diretos no seu WhatsApp.
      </h1>
      <p className="mt-5 text-lg text-zinc-600 max-w-2xl mx-auto">
        Landing pages de alta conversão e catálogos com fechamento rápido. Venda todos os dias sem taxas abusivas de plataformas e sem burocracia para seu cliente.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <a 
          href="#demo" 
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3 rounded-lg shadow-sm transition"
        >
          Testar Demonstração
        </a>
        <a 
          href="#case" 
          className="bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-medium px-6 py-3 rounded-lg transition"
        >
          Ver Case da Gidriê
        </a>
      </div>
    </section>
  );
}
