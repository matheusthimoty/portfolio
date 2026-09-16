import { siteConfig } from '../config/siteConfig'

export default function SheetManagement() {
  const steps = [
    {
      num: '01',
      title: 'Abra sua Planilha',
      desc: 'Acesse pelo computador ou aplicativo do Google Planilhas no celular.',
    },
    {
      num: '02',
      title: 'Edite Nomes e Valores',
      desc: 'Altere preços, descrições ou adicione novas fotos de produtos em segundos.',
    },
    {
      num: '03',
      title: 'Sincronização Automática',
      desc: 'Seu catálogo reflete as mudanças na hora, sem precisar de suporte técnico.',
    },
  ]

  return (
    <section className="py-24 px-4 bg-white border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full uppercase tracking-wider">
            Gestão Descomplicada
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Gerencie seu estoque como uma planilha do dia a dia
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Sem painéis burocráticos ou sistemas de cadastro complexos. Você
            mantém o controle total da sua operação.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200/80 p-6 rounded-2xl"
            >
              <span className="text-2xl font-black text-blue-600 block">
                {s.num}
              </span>
              <h4 className="font-bold text-slate-900 text-base mt-2">
                {s.title}
              </h4>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent('Olá equipe Thimotech! Gostaria de saber mais sobre a integração com Google Planilhas.')}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-blue-600 transition"
          >
            Dúvidas sobre como funciona a atualização? Fale conosco →
          </a>
        </div>
      </div>
    </section>
  )
}
