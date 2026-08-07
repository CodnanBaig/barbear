import './globals.css'
import MotionSystem from '../components/MotionSystem'

export const metadata = {
  title: {
    default: 'BARBEAR — Built in the Emirates',
    template: '%s — BARBEAR',
  },
  description: 'Premium performance apparel engineered in the Emirates for training, running and everything in between.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MotionSystem />
        {children}
      </body>
    </html>
  )
}
