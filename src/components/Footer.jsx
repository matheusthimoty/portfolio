import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-slate-900 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left flex flex-col sm:flex-row items-center gap-4">
          <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/60 inline-block">
            <Logo size="sm" showBadge={false} />
          </div>
          <div>
            <p className="font-semibold text-slate-300 text-xs">
              Sistemas de autoatendimento e catálogos inteligentes para o
              varejo.
            </p>
          </div>
        </div>

        <div className="text-center sm:text-right text-slate-500">
          <p>
            © {new Date().getFullYear()} Thimotech. Todos os direitos
            reservados.
          </p>
          <p className="text-[11px] mt-0.5">
            Tecnologia sob medida para o comércio local.
          </p>
        </div>
      </div>
    </footer>
  )
}
