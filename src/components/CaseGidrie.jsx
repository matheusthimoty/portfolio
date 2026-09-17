import { siteConfig } from '../config/siteConfig'

export default function CaseGidrie() {
  const targetUrl = siteConfig?.caseGidrieUrl || 'https://gidrie.vercel.app/'
  const displayUrl = targetUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')

  const highlights = [
    {
      label: 'Tempo atendendo cada cliente',
      before: '18 minutos',
      after: '3 minutos',
    },
    {
      label: 'Erros ao anotar valores ou pedidos',
      before: 'Quase diários',
      after: 'Zero erros',
    },
    {
      label: 'Comissão paga por venda',
      before: 'Taxa de app',
      after: 'R$ 0,00',
    },
  ]

  return (
    <section
      id="case"
      className="py-24 px-4 bg-white border-b border-slate-200/80"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full text-xs font-semibold text-slate-700">
              Caso Real em Produção
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Como a Papelaria Gidriê parou de somar pedidos à mão no chat
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Com dezenas de modelos de cadernos e planners, a loja gastava
              horas do dia tirando dúvidas de valores e somando orçamentos um a
              um na calculadora.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Com o catálogo criado pela Thimotech, o cliente escolhe os itens
              com fotos nítidas e clica para enviar. O atendente já recebe a
              mensagem com o nome, itens escolhidos e valor total pronto para
              cobrar o Pix.
            </p>

            <div className="p-3.5 bg-blue-50/60 border border-blue-100 rounded-xl text-xs text-blue-900 leading-relaxed font-medium">
              💡 <strong>Serve para o seu negócio:</strong> O mesmo formato é
              adaptado para docerias, lojas de roupas, marmitarias, pequenos
              mercados ou produtos artesanais.
            </div>

            <div className="pt-2">
              <a
                href={targetUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 hover:underline"
              >
                Abrir projeto da Gidriê no ar ({displayUrl}) →
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-7 shadow-xs">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-5">
              O que mudou na rotina da loja
            </h3>

            <div className="space-y-4">
              {highlights.map((h, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/70 p-4 rounded-xl"
                >
                  <span className="text-xs font-medium text-slate-500 block">
                    {h.label}
                  </span>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-xs text-red-500 line-through font-medium">
                      {h.before}
                    </span>
                    <span className="text-sm font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                      {h.after}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
