import { useState } from 'react'
import { siteConfig } from '../config/siteConfig'
import Logo from './Logo'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Marca com Logo */}
        <a href="#" className="focus:outline-none">
          <Logo />
        </a>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-semibold text-slate-600">
          <a href="#demo" className="hover:text-blue-600 transition">
            Demonstração
          </a>
          <a href="#nichos" className="hover:text-blue-600 transition">
            Segmentos
          </a>
          <a href="#case" className="hover:text-blue-600 transition">
            Casos Reais
          </a>
          <a href="#comparativo" className="hover:text-blue-600 transition">
            Comparativo
          </a>
          <a href="#faq" className="hover:text-blue-600 transition">
            Dúvidas
          </a>
        </nav>

        {/* CTA Principal */}
        <div className="hidden md:flex items-center">
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent('Olá equipe Thimotech! Gostaria de falar sobre a implantação de um catálogo digital.')}`}
            target="_blank"
            rel="noreferrer"
            className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2.5 rounded-lg shadow-xs transition"
          >
            Falar com Consultor
          </a>
        </div>

        {/* Botão Mobile */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-600 hover:text-slate-900"
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3">
          <a
            href="#demo"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-slate-700 py-1"
          >
            Demonstração
          </a>
          <a
            href="#nichos"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-slate-700 py-1"
          >
            Segmentos
          </a>
          <a
            href="#case"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-slate-700 py-1"
          >
            Casos Reais
          </a>
          <a
            href="#comparativo"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-slate-700 py-1"
          >
            Comparativo
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-slate-700 py-1"
          >
            Dúvidas
          </a>
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent('Olá equipe Thimotech! Gostaria de falar sobre o sistema.')}`}
            target="_blank"
            rel="noreferrer"
            className="block text-center w-full bg-blue-600 text-white font-bold text-sm py-3 rounded-lg mt-2"
          >
            Falar com Consultor
          </a>
        </div>
      )}
    </header>
  )
}
