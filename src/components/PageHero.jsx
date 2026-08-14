export default function PageHero({ eyebrow, title, copy, aside }) {
  return (
    <section className="page-hero">
      <div className="container page-hero__grid">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
        </div>
        <div className="page-hero__aside">
          <p>{copy}</p>
          {aside}
        </div>
      </div>
    </section>
  )
}
