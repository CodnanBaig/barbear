import Image from 'next/image'

export default function ProductCard({ product, index }) {
  return (
    <article className="product-card" style={{'--delay': `${index * 60}ms`}}>
      <div className="product-image-wrap">
        <Image src={product.image} alt={product.name} fill sizes="(max-width: 800px) 100vw, 33vw" className="product-image"/>
        <div className="product-overlay"><span>VIEW PRODUCT</span><span>↗</span></div>
        {product.tag && <span className="tag">{product.tag}</span>}
      </div>
      <div className="product-meta">
        <div><h3>{product.name}</h3><p>{product.category}</p></div>
        <strong>AED {product.price}</strong>
      </div>
    </article>
  )
}
