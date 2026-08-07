import Link from 'next/link'
import CollectionHero from '../../components/CollectionHero'
import ProductCard from '../../components/ProductCard'
import Footer from '../../components/Footer'
import { products } from '../../lib/products'
import { SPORT_IMAGES } from '../../lib/visuals'

export const metadata = { title: 'Women' }

export default function WomenPage() {
  const womens = products.filter(p => p.gender === 'women')
  return <main>
    <CollectionHero eyebrow="WOMEN / DROP 01" title="FORM IN" outline="MOTION." image={SPORT_IMAGES.womenStrength} position="52% 42%" stat="TRAIN / STUDIO / EVERYDAY" />
    <section className="collection-intro collection-intro-women" data-reveal>
      <span className="eyebrow dark">WOMEN / SCULPT SYSTEM</span>
      <h2>SHARP LINES.<br/><em>ZERO DRAG.</em></h2>
      <p>Performance silhouettes built around the body in motion — supportive where needed, unrestricted everywhere else.</p>
    </section>
    <section className="filter-row"><span>{womens.length} PRODUCTS</span><div><button className="active">ALL</button><button>TRAIN</button><button>STUDIO</button></div><button>FILTER +</button></section>
    <section className="shop-grid shop-grid-two">{womens.map((p,i)=><ProductCard product={p} index={i} key={p.slug} large/>)}</section>
    <section className="women-editorial">
      <div className="women-editorial-copy" data-reveal><span>WOMEN / FIELD NOTE 01</span><h2>SCULPTED<br/>FOR <em>OUTPUT.</em></h2><p>Compression without restriction. Clean support. No ornamental engineering.</p><Link href="/performance">WHY IT WORKS ↗</Link></div>
      <div className="women-editorial-image" data-parallax="0.08" style={{ backgroundImage: `url("${SPORT_IMAGES.womenStretch}")` }} />
    </section>
    <Footer />
  </main>
}
