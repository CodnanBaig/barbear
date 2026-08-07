import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import SiteHeader from '../../../components/SiteHeader'
import ProductCard from '../../../components/ProductCard'
import Footer from '../../../components/Footer'
import { products, getProduct } from '../../../lib/products'

export function generateStaticParams() { return products.map(p => ({ slug: p.slug })) }

export async function generateMetadata({ params }) {
  const { slug } = await params
  const product = getProduct(slug)
  return product ? { title: product.name, description: product.description } : {}
}

export default async function ProductPage({ params }) {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) notFound()
  const related = products.filter(p => p.slug !== slug && p.gender === product.gender).slice(0,3)

  return <main className="product-page">
    <SiteHeader theme="light" />
    <section className="pdp-grid">
      <div className="pdp-gallery">
        <div className="pdp-image pdp-image-main"><Image src={product.image} alt={product.name} fill priority sizes="(max-width:900px) 100vw, 58vw" /></div>
        <div className="pdp-image"><Image src={product.altImage} alt={`${product.name} in motion`} fill sizes="(max-width:900px) 100vw, 58vw" /></div>
      </div>
      <aside className="pdp-buy">
        <span className="pdp-kicker">{product.category} / {product.tag}</span>
        <h1>{product.name}</h1>
        <strong className="pdp-price">AED {product.price}</strong>
        <p>{product.description}</p>
        <div className="size-head"><span>SELECT SIZE</span><button>SIZE GUIDE ↗</button></div>
        <div className="size-grid"><button>XS</button><button>S</button><button>M</button><button>L</button><button>XL</button></div>
        <button className="add-to-bag"><span>ADD TO BAG</span><b>AED {product.price}</b></button>
        <div className="pdp-details"><details open><summary>PRODUCT DETAILS <span>+</span></summary><ul>{product.details.map(d => <li key={d}>{d}</li>)}</ul></details><details><summary>DELIVERY & RETURNS <span>+</span></summary><p>Complimentary UAE delivery on qualifying orders. Easy returns within 14 days.</p></details></div>
      </aside>
    </section>
    <section className="pdp-manifesto" data-reveal><span>BARBEAR / {product.line}</span><h2>BUILT TO WORK.<br/><em>DESIGNED TO STAY.</em></h2></section>
    {related.length > 0 && <section className="related"><div className="related-head"><span>YOU MAY ALSO NEED</span><Link href="/shop">VIEW ALL ↗</Link></div><div className="shop-grid">{related.map((p,i)=><ProductCard product={p} index={i} key={p.slug}/>)}</div></section>}
    <Footer />
  </main>
}
