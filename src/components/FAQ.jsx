import { useState } from 'react'

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null)

  const questions = [
    {
      q: 'Preciso pagar mensalidade depois que o sistema for entregue?',
      a: 'Não. A Thimotech trabalha com modelo de implantação sob medida e entrega definitiva. Você não paga aluguel de plataforma nem porcentagem sobre pedidos.',
    },
    {
      q: 'Como realizo a alteração de fotos, produtos e valores?',
      a: 'Você recebe acesso a uma planilha conectada diretamente ao sistema. Qualquer modificação reflete no catálogo em tempo real sem depender de equipe técnica.',
    },
    {
      q: 'O cliente precisa baixar aplicativo na App Store ou Google Play?',
      a: 'Não. O catálogo funciona diretamente por um link web instantâneo (ideal para a bio do Instagram e WhatsApp), com a opção de criar um ícone de atalho na tela do celular.',
    },
    {
      q: 'Qual é o prazo médio de entrega?',
      a: 'A estrutura básica, configuração de produtos iniciais e testes de envio são concluídos normalmente entre 5 e 7 dias úteis.',
    },
  ]

  return (
    <section
      id="faq"
      className="py-24 px-4 bg-slate-50 border-b border-slate-200/80"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full uppercase tracking-wider">
            Perguntas Frequentes
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-3">
            Tire suas dúvidas antes de começar
          </h2>
        </div>

        <div className="space-y-3">
          {questions.map((item, idx) => (
            <div
              key={idx}
              className="border border-slate-200/80 rounded-xl overflow-hidden bg-white shadow-2xs"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full py-4 px-5 text-left font-bold text-slate-900 text-sm sm:text-base flex justify-between items-center hover:bg-slate-50/50 transition cursor-pointer"
              >
                <span>{item.q}</span>
                <span className="text-slate-400 font-light text-xl ml-4">
                  {openIdx === idx ? '−' : '+'}
                </span>
              </button>
              {openIdx === idx && (
                <div className="px-5 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/30">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
