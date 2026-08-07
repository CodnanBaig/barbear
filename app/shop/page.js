import SiteHeader from '../../components/SiteHeader'
import ProductCard from '../../components/ProductCard'
import Footer from '../../components/Footer'
import { products } from '../../lib/products'

export const metadata = { title: 'Shop' }

export default function ShopPage() {
  return <main className="light-page">
    <SiteHeader theme="light" />
    <section className="shop-head" data-reveal>
      <span className="eyebrow dark">DROP 01 / FULL COLLECTION</span>
      <h1>SHOP <em>BARBEAR.</em></h1>
      <div><p>Performance essentials engineered in the Emirates.</p><span>{String(products.length).padStart(2,'0')} PIECES</span></div>
    </section>
    <section className="filter-row shop-filter"><span>COLLECTION</span><div><button className="active">ALL</button><button>MEN</button><button>WOMEN</button><button>TRAIN</button><button>RUN</button></div><button>SORT +</button></section>
    <section className="shop-grid shop-grid-all">{products.map((p,i)=><ProductCard product={p} index={i} key={p.slug}/>)}</section>
    <Footer />
  </main>
}
