export default function SectionWrapper({
  id,
  badge,
  title,
  subtitle,
  children,
  className = '',
  bgGray = false,
}) {
  return (
    <section
      id={id}
      className={`py-20 px-4 ${bgGray ? 'bg-zinc-50 border-y border-zinc-200/80' : 'bg-white'} ${className}`}
    >
      <div className="max-w-5xl mx-auto">
        {(badge || title) && (
          <div className="text-center max-w-2xl mx-auto mb-12">
            {badge && (
              <span className="text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                {badge}
              </span>
            )}
            {title && (
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mt-3 tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-zinc-600 text-sm sm:text-base mt-2 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
