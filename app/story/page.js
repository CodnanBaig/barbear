import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../components/Logo'
import SiteHeader from '../../components/SiteHeader'
import Footer from '../../components/Footer'

export const metadata = { title: 'Our Story' }

export default function StoryPage() {
  return <main>
    <section className="story-hero">
      <SiteHeader theme="dark" absolute />
      <div className="story-hero-media" data-parallax="0.1"><Image src="/products/oversize-range.webp" alt="BARBEAR collection" fill priority sizes="100vw" /></div>
      <div className="story-hero-overlay" />
      <div className="story-hero-copy"><span>OUR STORY / UNITED ARAB EMIRATES</span><h1>BORN IN<br/><em>HEAT.</em></h1><p>BARBEAR started with a simple belief: performance wear can be technically serious without looking like equipment.</p></div>
    </section>

    <section className="origin-section">
      <div className="origin-title" data-reveal><span>01 / ORIGIN</span><h2>DUBAI IS NOT<br/>A <em>BACKDROP.</em></h2></div>
      <div className="origin-copy" data-reveal><p>It is part of the design problem. High temperatures, air-conditioned interiors, long days, hard sessions and a culture that moves between sport and city without changing identity.</p><p>BARBEAR is built for that reality — a performance uniform with enough restraint to live beyond the gym.</p></div>
    </section>

    <section className="brand-board">
      <div className="brand-tile brand-tile-black"><Logo tone="light"/><span>PRIMARY / BLACK</span></div>
      <div className="brand-tile brand-tile-brown"><Logo tone="light"/><span>FIELD / BROWN</span></div>
      <div className="brand-tile brand-tile-bone"><Logo tone="dark"/><span>BASE / BONE</span></div>
      <div className="brand-tile brand-tile-sand"><Logo tone="dark"/><span>SAND / UAE</span></div>
    </section>

    <section className="beliefs">
      <div className="beliefs-head" data-reveal><span>02 / BELIEF SYSTEM</span><h2>THE BARBEAR<br/><em>CODE.</em></h2></div>
      <div className="belief-list">
        <article data-reveal><span>01</span><h3>FUNCTION FIRST.</h3><p>Design has to earn its way onto the garment.</p></article>
        <article data-reveal><span>02</span><h3>QUIET CONFIDENCE.</h3><p>Strong product does not need to shout from every angle.</p></article>
        <article data-reveal><span>03</span><h3>BUILT FOR REPEAT.</h3><p>The best gear becomes a uniform, not a special occasion.</p></article>
      </div>
    </section>

    <section className="story-end"><div data-reveal><span>03 / NEXT</span><h2>THIS IS<br/>DROP <em>ONE.</em></h2><p>The system starts here. Training, running and everyday performance — one language, built in the Emirates.</p><Link href="/shop" className="arrow-button arrow-button-light"><span>SHOP THE FIRST DROP</span><b>↗</b></Link></div></section>
    <Footer />
  </main>
}
