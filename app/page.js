import Image from 'next/image'
import Link from 'next/link'
import SiteHeader from '../components/SiteHeader'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'
import { products } from '../lib/products'
import { SPORT_IMAGES } from '../lib/visuals'

export default function Home() {
  return (
    <main>
      <section className="home-hero" data-progress>
        <SiteHeader theme="dark" absolute />
        <div className="home-hero-image" data-parallax="0.12">
          <Image src={SPORT_IMAGES.heroMen} alt="Athlete training outdoors" fill priority sizes="100vw" />
        </div>
        <div className="home-hero-grid" aria-hidden="true" />
        <div className="home-hero-wash" />
        <div className="home-hero-copy">
          <span className="eyebrow hero-kicker">DROP 01 / BUILT IN THE EMIRATES</span>
          <h1><span>FEAR</span><em>NOTHING.</em></h1>
          <div className="hero-deck">
            <p>Performance apparel engineered for heat, pressure and relentless movement.</p>
            <Link href="/shop" className="arrow-button arrow-button-light"><span>SHOP DROP 01</span><b>↗</b></Link>
          </div>
        </div>
        <div className="hero-side-note"><span>DXB / 25.2048° N</span><span>55.2708° E / UAE</span></div>
        <div className="hero-scroll">SCROLL TO ENTER <i /></div>
      </section>

      <section className="statement-shell">
        <div className="ticker ticker-dark"><div>BUILT FOR HEAT&nbsp; ✦ &nbsp;ENGINEERED FOR PRESSURE&nbsp; ✦ &nbsp;FEAR NOTHING&nbsp; ✦ &nbsp;BUILT FOR HEAT&nbsp; ✦ &nbsp;ENGINEERED FOR PRESSURE&nbsp; ✦ &nbsp;FEAR NOTHING&nbsp; ✦ &nbsp;</div></div>
        <div className="statement" data-reveal>
          <div className="statement-index">01 / MANIFESTO</div>
          <h2>NOT MADE TO<br/>LOOK <i>ACTIVE.</i><br/><em>MADE TO MOVE.</em></h2>
          <div className="statement-copy">
            <p>BARBEAR lives where training apparel meets design discipline. Technical enough to perform. Precise enough to become the uniform you reach for every day.</p>
            <Link href="/story" className="under-link">WHY BARBEAR ↗</Link>
          </div>
        </div>
      </section>

      <section className="drop-section">
        <div className="section-head" data-reveal>
          <div><span className="eyebrow dark">DROP 01 / THE SYSTEM</span><h2>THE <em>ESSENTIALS.</em></h2></div>
          <Link href="/shop" className="round-link"><span>VIEW ALL</span><b>↗</b></Link>
        </div>
        <div className="featured-grid">
          {products.slice(0, 4).map((product, index) => <ProductCard product={product} index={index} key={product.slug} large={index < 2} />)}
        </div>
      </section>

      <section className="pressure-section" data-progress>
        <div className="pressure-media" data-parallax="0.11"><Image src={SPORT_IMAGES.womenStrength} alt="Athlete strength training" fill sizes="100vw" /></div>
        <div className="pressure-overlay" />
        <div className="pressure-ghost" aria-hidden="true">PRESSURE</div>
        <div className="pressure-copy" data-reveal>
          <span className="eyebrow">PERFORMANCE / 001</span>
          <h2>BUILT FOR<br/><em>PRESSURE.</em></h2>
          <p>Four-way movement. Heat-first ventilation. Recovery engineered into every panel.</p>
          <Link href="/performance" className="arrow-button arrow-button-outline"><span>ENTER PERFORMANCE LAB</span><b>↗</b></Link>
        </div>
        <div className="pressure-specs">
          <div><strong>4-WAY</strong><span>STRETCH RECOVERY</span></div>
          <div><strong>24/7</strong><span>COMFORT SYSTEM</span></div>
          <div><strong>DXB</strong><span>HEAT TESTED</span></div>
        </div>
      </section>

      <section className="category-gates">
        <Link href="/men" className="category-gate category-men" data-reveal>
          <Image src={SPORT_IMAGES.sprintMoody} alt="Shop BARBEAR men" fill sizes="50vw" />
          <div className="category-mask" />
          <span>01 / MEN</span>
          <h3>TRAIN.<br/>RUN.<br/><em>REPEAT.</em></h3>
          <b>SHOP MEN ↗</b>
        </Link>
        <Link href="/women" className="category-gate category-women" data-reveal>
          <Image src={SPORT_IMAGES.womenStretch} alt="Shop BARBEAR women" fill sizes="50vw" />
          <div className="category-mask" />
          <span>02 / WOMEN</span>
          <h3>SCULPT.<br/>MOVE.<br/><em>OWN IT.</em></h3>
          <b>SHOP WOMEN ↗</b>
        </Link>
      </section>

      <section className="codes-section">
        <div className="codes-sticky" data-reveal>
          <span className="eyebrow dark">BARBEAR / FIELD CODE</span>
          <h2>DESIGN<br/>THAT <em>EARNS</em><br/>ITS PLACE.</h2>
        </div>
        <div className="codes-list">
          <article data-reveal><span>01</span><div><h3>AIRFLOW, WHERE IT MATTERS.</h3><p>Ventilation is mapped around heat zones, not added as decoration.</p></div></article>
          <article data-reveal><span>02</span><div><h3>STRUCTURE WITHOUT DRAG.</h3><p>Silhouettes stay sharp while the fabric moves through full range.</p></div></article>
          <article data-reveal><span>03</span><div><h3>BRANDING UNDER CONTROL.</h3><p>The mark is present, never louder than the product.</p></div></article>
          <article data-reveal><span>04</span><div><h3>BUILT FOR THE GULF.</h3><p>Heat, travel and daily use are part of the brief from day one.</p></div></article>
        </div>
      </section>

      <section className="editorial-band">
        <div className="editorial-img editorial-a" data-reveal><Image src={SPORT_IMAGES.trackStart} alt="Runner at the starting blocks" fill sizes="33vw" /></div>
        <div className="editorial-center" data-reveal>
          <span>BARBEAR / DUBAI</span>
          <h2>THE UNIFORM<br/><em>AFTER THE WORK.</em></h2>
          <p>From first rep to last light. One visual language, built across training and everyday movement.</p>
          <Link href="/story">READ THE STORY ↗</Link>
        </div>
        <div className="editorial-img editorial-b" data-reveal><Image src={SPORT_IMAGES.womenPortrait} alt="Athlete in performance wear" fill sizes="33vw" /></div>
      </section>

      <section className="final-cta">
        <div className="final-cta-line" aria-hidden="true">FEAR NOTHING / FEAR NOTHING / FEAR NOTHING /</div>
        <div className="final-cta-inner" data-reveal>
          <span className="eyebrow">DROP 01 AVAILABLE NOW</span>
          <h2>YOUR NEXT<br/><em>UNIFORM.</em></h2>
          <Link href="/shop" className="arrow-button arrow-button-light"><span>SHOP BARBEAR</span><b>↗</b></Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}
