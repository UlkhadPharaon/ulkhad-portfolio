export function PageIntro({ index, label, title, description }: { index: string; label: string; title: string; description?: string }) {
  return (
    <section className="page-intro">
      <div className="page-intro__top"><span className="eyebrow">{index} / {label}</span><span className="micro-label">ULKHAD PHARAON — PORTFOLIO</span></div>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
      <div className="page-intro__base"><span>OUAGADOUGOU / BURKINA FASO</span><span>12°22’ N · 1°31’ W</span></div>
    </section>
  );
}
