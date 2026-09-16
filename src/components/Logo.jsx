export default function Logo({ size = 'default', showBadge = true }) {
  const isSmall = size === 'sm'

  return (
    <div className="flex items-center gap-2.5 group select-none">
      {/* Ícone Vetorial Exclusivo Thimotech */}
      <div
        className={`relative flex items-center justify-center shrink-0 ${isSmall ? 'w-7 h-7' : 'w-8 h-8'}`}
      >
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-xs group-hover:scale-105 transition-transform duration-200"
        >
          {/* Base em Squircle com gradiente corporativo */}
          <rect width="36" height="36" rx="9" fill="url(#thimotech-gradient)" />

          {/* Símbolo "T" Geométrico Integrado */}
          <path
            d="M9 11.5C9 10.6716 9.67157 10 10.5 10H25.5C26.3284 10 27 10.6716 27 11.5V13C27 13.8284 26.3284 14.5 25.5 14.5H20.25V25C20.25 25.8284 19.5784 26.5 18.75 26.5H17.25C16.4216 26.5 15.75 25.8284 15.75 25V14.5H10.5C9.67157 14.5 9 13.8284 9 13V11.5Z"
            fill="white"
          />

          {/* Ponto / Nó de Conexão Ativa (Ciano Tecnológico) */}
          <circle
            cx="26"
            cy="10"
            r="2.75"
            fill="#38BDF8"
            stroke="#1E40AF"
            strokeWidth="1"
          />

          {/* Definição do Gradiente */}
          <defs>
            <linearGradient
              id="thimotech-gradient"
              x1="0"
              y1="0"
              x2="36"
              y2="36"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2563EB" />
              <stop offset="1" stopColor="#1D4ED8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Tipografia da Marca */}
      <div>
        <div className="flex items-center gap-1.5">
          <span
            className={`font-black text-slate-900 tracking-tight leading-none ${isSmall ? 'text-sm' : 'text-base'}`}
          >
            Thimotech
          </span>
          {showBadge && (
            <span className="text-[9px] font-extrabold text-blue-700 bg-blue-50 border border-blue-200/80 px-1.5 py-0.5 rounded uppercase tracking-wider">
              Sistemas
            </span>
          )}
        </div>
        <span className="text-[10px] text-slate-400 font-medium block uppercase tracking-wider mt-0.5">
          Soluções Digitais
        </span>
      </div>
    </div>
  )
}
