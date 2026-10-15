export function SectionHeader({ title, subtitle, accent = "bg-sun" }) {
  return (
    <header className="mb-10 md:mb-14">
      <h2 className="font-display text-3xl uppercase leading-relaxed sm:text-4xl md:text-5xl">{title}</h2>
      <div className={`mt-3 h-2 w-24 border-2 border-ink ${accent}`} aria-hidden />
      {subtitle && <p className="mt-4 max-w-2xl text-lg leading-snug text-ink-soft sm:text-xl">{subtitle}</p>}
    </header>
  );
}

export default function Section({ id, className = "bg-paper", children, ...header }) {
  return (
    <section id={id} className={`scroll-mt-16 border-b-4 border-ink py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {header.title && <SectionHeader {...header} />}
        {children}
      </div>
    </section>
  );
}
