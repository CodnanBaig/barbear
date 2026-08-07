import Image from 'next/image'
import Link from 'next/link'

export default function ProductCard({ product, index = 0, large = false }) {
  return (
    <article className={`product-card ${large ? 'product-card-large' : ''}`} data-reveal style={{ '--delay': `${Math.min(index * 70, 280)}ms` }}>
      <Link href={`/product/${product.slug}`} className="product-visual">
        <Image src={product.image} alt={product.name} fill sizes={large ? '(max-width: 800px) 100vw, 50vw' : '(max-width: 800px) 100vw, 33vw'} />
        <div className="product-shade" />
        {product.tag && <span className="product-tag">{product.tag}</span>}
        <span className="product-cta">VIEW PRODUCT <b>↗</b></span>
      </Link>
      <div className="product-info">
        <div><small>{product.category}</small><h3>{product.name}</h3></div>
        <strong>AED {product.price}</strong>
      </div>
    </article>
  )
}
