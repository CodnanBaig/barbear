import Image from 'next/image'
import Link from 'next/link'
import SiteHeader from '../../components/SiteHeader'
import Footer from '../../components/Footer'

export const metadata = { title: 'Performance' }

export default function PerformancePage() {
  return <main className="performance-page">
    <section className="lab-hero">
      <SiteHeader theme="dark" absolute />
      <div className="lab-image" data-parallax="0.1"><Image src="/products/hybrid-shorts.webp" alt="BARBEAR technical shorts" fill priority sizes="100vw" /></div>
      <div className="lab-grid" />
      <div className="lab-hero-copy"><span>PERFORMANCE LAB / DXB</span><h1>BUILT TO<br/><em>OUTWORK.</em></h1><p>Material systems designed around sweat, heat, repetition and recovery.</p></div>
      <div className="lab-readout"><b>41°C</b><span>TEST ENVIRONMENT</span></div>
    </section>

    <section className="lab-intro" data-reveal><span>01 / DESIGN PRINCIPLE</span><h2>EVERY DETAIL<br/>HAS A <em>JOB.</em></h2><p>If it does not improve movement, airflow, durability or comfort, it does not belong on the garment.</p></section>

    <section className="lab-modules">
      <article data-reveal><div className="lab-number">01</div><div><span>AIRFLOW MAPPING</span><h3>COOL THE<br/>HOT ZONES.</h3><p>Open structures and mesh are placed where heat builds fastest — not wherever they look technical.</p></div><strong>VENT / 34%</strong></article>
      <article data-reveal><div className="lab-number">02</div><div><span>RANGE ARCHITECTURE</span><h3>MOVE PAST<br/>THE SEAM.</h3><p>Side splits, stretch directions and panel lines are developed around deep flexion and rotation.</p></div><strong>4-WAY / FULL</strong></article>
      <article data-reveal><div className="lab-number">03</div><div><span>RECOVERY</span><h3>SHAPE THAT<br/>COMES BACK.</h3><p>Fabric recovery keeps silhouettes controlled after hard sessions and repeat wears.</p></div><strong>24H / RESET</strong></article>
    </section>

    <section className="lab-break" data-progress>
      <div className="lab-break-media" data-parallax="0.12"><Image src="/editorial/hero-men.webp" alt="Athlete wearing BARBEAR" fill sizes="100vw" /></div>
      <div className="lab-break-copy" data-reveal><span>FIELD TEST / DUBAI</span><h2>HEAT IS PART<br/>OF THE <em>BRIEF.</em></h2></div>
    </section>

    <section className="lab-spec-table" data-reveal>
      <div className="spec-title"><span>BARBEAR SYSTEM / V1.0</span><h2>PERFORMANCE<br/><em>WITHOUT THEATER.</em></h2></div>
      <div className="spec-table">
        <div><span>01</span><b>FABRIC RECOVERY</b><strong>HIGH</strong></div>
        <div><span>02</span><b>AIRFLOW PRIORITY</b><strong>HEAT ZONES</strong></div>
        <div><span>03</span><b>BRANDING WEIGHT</b><strong>MINIMAL</strong></div>
        <div><span>04</span><b>MOVEMENT RANGE</b><strong>UNRESTRICTED</strong></div>
        <div><span>05</span><b>DESIGN ORIGIN</b><strong>UAE</strong></div>
      </div>
    </section>

    <section className="lab-cta"><span>READY TO TEST IT?</span><h2>WEAR THE<br/><em>SYSTEM.</em></h2><Link href="/shop" className="arrow-button arrow-button-light"><span>SHOP DROP 01</span><b>↗</b></Link></section>
    <Footer />
  </main>
}
