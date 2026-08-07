import Link from 'next/link'
import CollectionHero from '../../components/CollectionHero'
import ProductCard from '../../components/ProductCard'
import Footer from '../../components/Footer'
import { products } from '../../lib/products'
import { SPORT_IMAGES } from '../../lib/visuals'

export const metadata = { title: 'Men' }

export default function MenPage() {
  const mens = products.filter(p => p.gender === 'men')
  return <main>
    <CollectionHero eyebrow="MEN / DROP 01" title="BUILT TO" outline="MOVE." image={SPORT_IMAGES.trackStart} position="50% 48%" stat="TRAIN / RUN / LIFESTYLE" />
    <section className="collection-intro" data-reveal>
      <span className="eyebrow dark">MEN / PERFORMANCE SYSTEM</span>
      <h2>NO OFF-DAYS.<br/><em>NO DEAD WEIGHT.</em></h2>
      <p>A tightly edited uniform for sessions, miles and everything between them. Built to take repeat use without losing its shape.</p>
    </section>
    <section className="filter-row"><span>{mens.length} PRODUCTS</span><div><button className="active">ALL</button><button>TRAIN</button><button>RUN</button><button>LIFESTYLE</button></div><button>FILTER +</button></section>
    <section className="shop-grid">{mens.map((p,i)=><ProductCard product={p} index={i} key={p.slug}/>)}</section>
    <section className="collection-quote"><span>THE MEN'S CODE / 001</span><h2>WHEN THE SESSION<br/>GETS UGLY, <em>THE GEAR<br/>STAYS CLEAN.</em></h2><Link href="/performance">EXPLORE THE SYSTEM ↗</Link></section>
    <Footer />
  </main>
}
