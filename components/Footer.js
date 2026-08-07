import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand"><Logo tone="light" /><p>Performance apparel for pressure, heat and movement. Built in the Emirates.</p></div>
        <div className="footer-links"><small>SHOP</small><Link href="/men">Men</Link><Link href="/women">Women</Link><Link href="/shop">All Products</Link></div>
        <div className="footer-links"><small>WORLD</small><Link href="/performance">Performance</Link><Link href="/story">Our Story</Link><a href="#">Instagram ↗</a></div>
        <div className="footer-news"><small>BARBEAR SIGNAL</small><p>Product drops, field notes and training culture. No noise.</p><form><input type="email" placeholder="EMAIL ADDRESS" aria-label="Email address"/><button type="submit">JOIN ↗</button></form></div>
      </div>
      <div className="footer-monogram" aria-hidden="true">B</div>
      <div className="footer-floor"><span>© 2026 BARBEAR</span><span>DUBAI, UNITED ARAB EMIRATES</span><div><a href="#">SHIPPING</a><a href="#">RETURNS</a><a href="#">PRIVACY</a></div></div>
    </footer>
  )
}
