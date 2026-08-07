import Link from 'next/link'
import SiteHeader from '../components/SiteHeader'

export default function NotFound(){return <main className="not-found"><SiteHeader theme="dark" absolute/><div><span>ERROR / 404</span><h1>OFF<br/><em>COURSE.</em></h1><p>This route does not exist in the BARBEAR system.</p><Link href="/" className="arrow-button arrow-button-light"><span>BACK HOME</span><b>↗</b></Link></div></main>}
