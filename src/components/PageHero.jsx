export default function PageHero({ eyebrow, title, copy, aside, image, imagePosition = 'center' }) {
  const heroStyle = image
    ? {
        '--page-hero-image': `url("${image}")`,
        '--page-hero-position': imagePosition,
      }
    : undefined

  return (
    <section className={`page-hero ${image ? 'page-hero--image' : ''}`} style={heroStyle}>
      <div className="container page-hero__grid">
        <div className="page-hero__title-block">
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
