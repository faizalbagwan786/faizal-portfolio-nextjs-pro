export function Section({ title, subtitle, children, id }: { title: string; subtitle?: string; children: React.ReactNode; id?: string; }) {
  return (
    <section id={id} className="space-y-3">
      <h2 className="text-2xl font-semibold">{title}</h2>
      {subtitle && <p className="opacity-80">{subtitle}</p>}
      {children}
    </section>
  );
}
