import Image from 'next/image'
import SiteHeader from './SiteHeader'

export default function CollectionHero({ eyebrow, title, outline, image, position = '50% 50%', stat }) {
  return (
    <section className="collection-hero">
      <SiteHeader theme="dark" absolute />
      <div className="collection-hero-media" data-parallax="0.09"><Image src={image} alt="" fill priority sizes="100vw" style={{ objectPosition: position }} /></div>
      <div className="collection-hero-overlay" />
      <div className="collection-hero-copy">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}<em>{outline}</em></h1>
        {stat && <p>{stat}</p>}
      </div>
      <div className="hero-scroll">SCROLL <i /></div>
    </section>
  )
}
