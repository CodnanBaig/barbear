import Image from 'next/image'
import Logo from '../components/Logo'
import ProductCard from '../components/ProductCard'

const products = [
  { name: 'HYBRID SHORT 01', category: 'MEN / TRAIN', price: 245, image: '/products/hybrid-shorts.webp', tag:'BESTSELLER' },
  { name: 'OVERSIZED TEE 01', category: 'MEN / LIFESTYLE', price: 195, image: '/products/oversize-black.webp' },
  { name: 'RIBBED SLEEVELESS', category: 'MEN / TRAIN', price: 175, image: '/products/ribbed-tank-grey.webp' },
  { name: 'RUN TANK 01', category: 'MEN / RUN', price: 165, image: '/products/run-tank.webp', tag:'NEW' },
  { name: 'CONTOUR TOP 01', category: 'WOMEN / STUDIO', price: 185, image: '/products/womens-contour.webp' },
  { name: 'SCULPT SET 01', category: 'WOMEN / TRAIN', price: 385, image: '/products/womens-set.webp', tag:'DROP 01' },
]

function Reveal({children, className=''}){ return <div className={`reveal ${className}`}>{children}</div> }

export default function Home(){
  return <main>
    <section className="hero">
      <div className="hero-media">
        <Image src="/editorial/hero-men.webp" alt="BARBEAR training apparel" fill priority sizes="100vw"/>
      </div>
      <div className="hero-noise"/>
      <header className="site-header">
        <Logo />
        <nav><a href="#men">MEN</a><a href="#women">WOMEN</a><a href="#system">PERFORMANCE</a><a href="#story">STORY</a></nav>
        <div className="header-actions"><button className="icon-button" aria-label="Shopping bag">BAG <span>0</span></button><button className="icon-button menu" aria-label="Menu">MENU</button></div>
      </header>
      <div className="hero-copy">
        <div className="eyebrow hero-in">ENGINEERED IN THE UAE — DROP 01</div>
        <h1><span className="hero-line one">FEAR</span><span className="outline hero-line two">NOTHING.</span></h1>
        <div className="hero-bottom hero-in late">
          <p>Premium performance apparel built for heat, pressure and relentless movement.</p>
          <a href="#men" className="button light">SHOP DROP 01 ↗</a>
        </div>
      </div>
      <div className="hero-index">01 / 06</div>
    </section>

    <div className="marquee"><div>BUILT TO MOVE ✦ MADE IN THE EMIRATES ✦ FEAR NOTHING ✦ BUILT TO MOVE ✦ MADE IN THE EMIRATES ✦ FEAR NOTHING ✦</div></div>

    <section className="intro" id="men">
      <Reveal><span className="section-kicker">DROP 01 / PERFORMANCE SYSTEM</span><h2>BUILT FOR THE<br/>WORK YOU <em>DON’T POST.</em></h2></Reveal>
      <Reveal delay={.12} className="intro-copy"><p>Technical cuts. Breathable construction. Zero compromise. Designed for high-output training and the hours nobody sees.</p><a href="#collection">VIEW COLLECTION ↗</a></Reveal>
    </section>

    <section className="collection" id="collection">{products.slice(0,3).map((p,i)=><ProductCard key={p.name} product={p} index={i}/>)}</section>

    <section className="manifesto" id="system">
      <div className="manifesto-media"><Image src="/editorial/women-training.jpg" alt="BARBEAR athlete" fill sizes="50vw"/></div>
      <div className="manifesto-copy">
        <Reveal><span className="section-kicker inverse">THE BARBEAR STANDARD</span><h2>FUNCTION<br/><em>WITH TEETH.</em></h2><p>Every line, cut and panel is there for a reason. Understated at rest. Aggressive in motion.</p></Reveal>
        <div className="spec-list"><div><span>01</span><b>AIRFLOW ENGINEERING</b><small>Ventilated where heat builds.</small></div><div><span>02</span><b>HIGH-OUTPUT FABRICS</b><small>Built to stretch, dry and recover.</small></div><div><span>03</span><b>BUILT FOR ABUSE</b><small>Training gear that earns its wear.</small></div></div>
      </div>
    </section>

    <section className="women" id="women">
      <div className="women-copy"><Reveal><span className="section-kicker">WOMEN / DROP 01</span><h2>SHARP LINES.<br/><em>ZERO DRAG.</em></h2><p>Body-led silhouettes engineered to move cleanly through every rep, run and reset.</p><a className="button dark" href="#women-products">SHOP WOMEN ↗</a></Reveal></div>
      <div className="women-media"><Image src="/editorial/women-crop.jpg" alt="BARBEAR women performance top" fill sizes="50vw"/></div>
    </section>

    <section className="collection second" id="women-products">{products.slice(3).map((p,i)=><ProductCard key={p.name} product={p} index={i}/>)}</section>

    <section className="story" id="story">
      <div className="story-bg"><Image src="/products/oversize-range.webp" alt="BARBEAR oversized collection" fill sizes="100vw"/></div>
      <div className="story-overlay"/>
      <div className="story-content"><Reveal><span className="section-kicker inverse">BORN IN HEAT / DUBAI</span><h2>NOT ATHLEISURE.<br/>A <em>UNIFORM.</em></h2><p>BARBEAR is performance wear for people who train hard, move fast and expect their gear to keep up. Built in the Emirates.</p><a href="#collection" className="text-link">DISCOVER BARBEAR ↗</a></Reveal></div>
    </section>

    <footer>
      <div className="footer-top"><Logo/><p>Performance apparel engineered in the Emirates.</p><a href="#" aria-label="Instagram">IG ↗</a></div>
      <div className="footer-word">BARBEAR</div>
      <div className="footer-bottom"><span>© 2026 BARBEAR</span><span>DUBAI, UNITED ARAB EMIRATES</span><div><a href="#">SHIPPING</a><a href="#">RETURNS</a><a href="#">PRIVACY</a></div></div>
    </footer>
  </main>
}
