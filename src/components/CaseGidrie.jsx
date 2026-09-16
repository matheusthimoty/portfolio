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
          Substituição de atendimentos demorados por uma vitrine interativa que
          gera pedidos organizados.
        </p>
      </div>

      <div className="bg-white border border-zinc-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-12">
        {/* Antes vs Depois */}
        <div className="grid md:grid-cols-2 gap-8 pb-10 border-b border-zinc-200">
          <div className="bg-red-50/60 border border-red-100 p-6 rounded-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-red-700">
              O Gargalo Anterior
            </span>
            <ul className="mt-4 space-y-2 text-sm text-zinc-700">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✕</span>
                Envio manual de arquivos PDF pesados que os clientes tinham
                dificuldade de abrir.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✕</span>
                Horas diárias gastas somando pedidos e explicando
                disponibilidade de estoque.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✕</span>
                Abandono constante no chat por lentidão na confirmação dos
                valores.
              </li>
            </ul>
          </div>

          <div className="bg-emerald-50/60 border border-emerald-100 p-6 rounded-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              A Estrutura Desenvolvida
            </span>
            <ul className="mt-4 space-y-2 text-sm text-zinc-800">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                Catálogo web leve com busca instantânea e fotos organizadas por
                coleção.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                Carrinho simples onde o cliente calcula opções personalizadas
                com 2 toques.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                Mensagem formatada disparada para o WhatsApp pronta para gerar o
                Pix de cobrança.
              </li>
            </ul>
          </div>
        </div>

        {/* Mockup do Celular + Métricas */}
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 flex justify-center">
            {/* Moldura de Smartphone em CSS */}
            <div className="relative w-full max-w-[270px] h-[480px] bg-zinc-900 rounded-[38px] p-3 shadow-2xl border-4 border-zinc-800">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-zinc-800 rounded-full z-20" />
              <div className="w-full h-full bg-zinc-100 rounded-[28px] overflow-hidden flex flex-col border border-zinc-200">
                {/* Topo do App Simulado */}
                <div className="bg-white p-3 border-b border-zinc-200 text-center text-xs font-bold text-zinc-800 pt-5">
                  Gidriê Personalizados
                </div>
                {/* Conteúdo Simulado */}
                <div className="p-3 space-y-2.5 overflow-hidden text-xs">
                  <div className="bg-white p-2.5 rounded-lg border border-zinc-200 flex justify-between items-center shadow-xs">
                    <div>
                      <p className="font-semibold text-zinc-900">
                        Planner 2026
                      </p>
                      <p className="text-emerald-600 font-bold text-[11px]">
                        R$ 65,00
                      </p>
                    </div>
                    <span className="bg-zinc-900 text-white text-[10px] px-2 py-1 rounded font-medium">
                      + Carrinho
                    </span>
                  </div>
                  <div className="bg-white p-2.5 rounded-lg border border-zinc-200 flex justify-between items-center shadow-xs">
                    <div>
                      <p className="font-semibold text-zinc-900">
                        Caderno A5 Kraft
                      </p>
                      <p className="text-emerald-600 font-bold text-[11px]">
                        R$ 38,00
                      </p>
                    </div>
                    <span className="bg-zinc-900 text-white text-[10px] px-2 py-1 rounded font-medium">
                      + Carrinho
                    </span>
                  </div>
                  {/* Mensagem simulada de WhatsApp */}
                  <div className="bg-emerald-100/80 border border-emerald-200 p-2.5 rounded-lg mt-4 text-[11px] text-emerald-950">
                    <p className="font-bold text-[10px] uppercase text-emerald-800 mb-1">
                      Mensagem enviada pronta:
                    </p>
                    <p>• 1x Planner 2026</p>
                    <p>• 1x Caderno A5 Kraft</p>
                    <p className="font-bold mt-1">Total: R$ 103,00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 space-y-4">
            <div className="border border-zinc-200 p-5 rounded-xl">
              <span className="text-3xl font-black text-zinc-900">-70%</span>
              <h4 className="font-bold text-zinc-900 text-sm mt-1">
                Tempo de Atendimento Reduzido
              </h4>
              <p className="text-xs text-zinc-600 mt-1">
                O cliente já chega no WhatsApp sabendo o que quer e com o valor
                total aprovado.
              </p>
            </div>
            <div className="border border-zinc-200 p-5 rounded-xl">
              <span className="text-3xl font-black text-zinc-900">R$ 0</span>
              <h4 className="font-bold text-zinc-900 text-sm mt-1">
                Zero Comissões Sobre Vendas
              </h4>
              <p className="text-xs text-zinc-600 mt-1">
                Nenhum repasse de percentual a cada venda, ao contrário dos
                marketplaces e e-commerces comuns.
              </p>
            </div>
          </div>
        </div>

        {/* Depoimento / Prova Social */}
        <div className="bg-zinc-50 border border-zinc-200 p-6 rounded-xl relative">
          <svg
            className="w-8 h-8 text-zinc-300 absolute top-4 right-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-zinc-700 italic text-sm leading-relaxed max-w-2xl">
            "Antes a gente passava o dia mandando fotos e confirmando valores
            item por item no direct e no WhatsApp. Com o catálogo, as clientes
            já enviam a lista exata do que querem. Agilizou nosso atendimento e
            as vendas acontecem muito mais rápido."
          </p>
          <div className="mt-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm">
              G
            </div>
            <div>
              <p className="text-xs font-bold text-zinc-900">Equipe Gidriê</p>
              <p className="text-[11px] text-zinc-500">
                Papelaria & Artigos Personalizados
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
