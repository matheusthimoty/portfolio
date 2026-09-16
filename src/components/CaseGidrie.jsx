export default function CaseGidrie() {
  return (
    <section id="case" className="py-20 px-4 max-w-5xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
          Estudo de Caso
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mt-4">
          Gidriê — Papelaria & Personalizados
        </h2>
        <p className="text-zinc-600 text-sm mt-2">
          Como transformamos um atendimento manual lento em uma vitrine dinâmica com carrinho integrado para WhatsApp.
        </p>
      </div>

      <div className="bg-white border border-zinc-200 rounded-2xl p-6 sm:p-10 shadow-sm">
        {/* Comparativo de Situação */}
        <div className="grid md:grid-cols-2 gap-8 pb-10 border-b border-zinc-200">
          <div className="bg-red-50/60 border border-red-100 p-6 rounded-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-red-700">O Cenário Anterior</span>
            <ul className="mt-4 space-y-2 text-sm text-zinc-700">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✕</span>
                Envio repetitivo de catálogos pesados em PDF que ninguém baixava.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✕</span>
                Horas diárias gastas no WhatsApp apenas informando preços e disponibilidade.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✕</span>
                Desistência de clientes devido à lentidão no cálculo de múltiplos itens.
              </li>
            </ul>
          </div>

          <div className="bg-emerald-50/60 border border-emerald-100 p-6 rounded-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">A Solução Implementada</span>
            <ul className="mt-4 space-y-2 text-sm text-zinc-800">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                Catálogo web ultra-rápido com busca e navegação categorizada.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                Carrinho simples onde o cliente seleciona, revisa e calcula tudo sozinho.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                Mensagem fechada no WhatsApp já com itens discriminados e total final.
              </li>
            </ul>
          </div>
        </div>

        {/* Mockup e Métricas */}
        <div className="mt-10 grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2 bg-zinc-950 p-4 rounded-xl border border-zinc-800 flex flex-col items-center justify-center min-h-[260px] text-center text-zinc-400">
            <span className="text-xs text-zinc-500 font-mono mb-2">[ Espaço para Captura de Tela / Mockup ]</span>
            <p className="text-sm max-w-sm text-zinc-300">
              Interface minimalista responsiva rodando no celular e desktop, permitindo que até clientes leigos comprem em segundos.
            </p>
          </div>

          <div className="space-y-4">
            <div className="border border-zinc-200 p-4 rounded-xl">
              <span className="text-2xl font-black text-zinc-900">-70%</span>
              <p className="text-xs text-zinc-600 mt-1">De tempo gasto no atendimento tirando dúvidas básicas de preços.</p>
            </div>
            <div className="border border-zinc-200 p-4 rounded-xl">
              <span className="text-2xl font-black text-zinc-900">0%</span>
              <p className="text-xs text-zinc-600 mt-1">Taxas ou repasses cobrados sobre os pedidos finalizados.</p>
            </div>
            <div className="border border-zinc-200 p-4 rounded-xl">
              <span className="text-2xl font-black text-zinc-900">100%</span>
              <p className="text-xs text-zinc-600 mt-1">Adaptado para uso rápido via redes sociais e smartphones.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}