import { useState } from 'react'
import { siteConfig } from '../config/siteConfig'

export default function NicheSelector() {
  const niches = [
    {
      id: 'papelaria',
      label: 'Papelarias & Personalizados',
      icon: '📐',
      title: 'Catálogo de Produtos com Variações e Fotos Claras',
      description:
        'Permita que seus clientes escolham miolos, capas, gramaturas e temas sem precisar trocar 50 fotos soltas no WhatsApp.',
      features: [
        'Filtros por categorias e coleções',
        'Campo para personalização de nome',
        'Visual limpo com fotos nítidas',
      ],
    },
    {
      id: 'food',
      label: 'Docerias, Marmitas & Delivery',
      icon: '🧁',
      title: 'Cardápio Digital com Cálculo Automático',
      description:
        'O cliente seleciona os sabores, adicionais, escolhe entre entrega ou retirada e chega com o endereço pronto.',
      features: [
        'Sem cobrança de taxa de 12% a 27% por pedido',
        'Itens organizados por combos e dias da semana',
        'Aviso de taxa de entrega',
      ],
    },
    {
      id: 'varejo',
      label: 'Lojas de Roupas & Acessórios',
      icon: '👕',
      title: 'Vitrine Virtual com Variações de Tamanho e Cor',
      description:
        'Substitua os stories com preços perdidos por um link fixo e rápido na bio com seu estoque em tempo real.',
      features: [
        'Opção de grade (P, M, G) nos itens',
        'Carregamento instantâneo no 4G/5G',
        'Integração direta com o WhatsApp',
      ],
    },
  ]

  const [activeNiche, setActiveNiche] = useState(niches[0])

  const handleNicheContact = () => {
    const msg = `Olá equipe Thimotech! Vi as soluções para o segmento de *${activeNiche.label}* no site e gostaria de entender a implantação no meu negócio.`
    window.open(
      `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(msg)}`,
      '_blank',
    )
  }

  return (
    <section
      id="nichos"
      className="py-24 px-4 bg-white border-b border-slate-200/80"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full uppercase tracking-wider">
            Soluções Setoriais
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Projetado para o seu modelo de negócio
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Veja como a solução da Thimotech se adapta à rotina de atendimento
            do seu segmento.
          </p>
        </div>

        {/* Abas */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {niches.map((n) => (
            <button
              key={n.id}
              onClick={() => setActiveNiche(n)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                activeNiche.id === n.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-50 text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900'
              }`}
            >
              <span>{n.icon}</span>
              {n.label}
            </button>
          ))}
        </div>

        {/* Card do Nicho */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-10 shadow-xs">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                {activeNiche.title}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {activeNiche.description}
              </p>
              <div className="space-y-2 pt-2">
                {activeNiche.features.map((f, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    {f}
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col justify-center">
              <button
                onClick={handleNicheContact}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-4 rounded-xl shadow-xs hover:shadow-md transition text-center cursor-pointer"
              >
                Solicitar para meu Comércio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
