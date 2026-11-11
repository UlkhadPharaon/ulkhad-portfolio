export function SectionHeading({ index, eyebrow, title, intro }: { index: string; eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="section-heading reveal">
      <div className="section-heading__meta"><span className="section-index">{index}</span><span className="eyebrow">{eyebrow}</span></div>
      <div className="section-heading__body"><h2>{title}</h2>{intro && <p>{intro}</p>}</div>
    </div>
  );
}
