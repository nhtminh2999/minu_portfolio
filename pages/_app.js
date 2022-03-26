import '../styles/globals.css'
import 'swiper/css'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence
      exitBeforeEnter
      initial={true}
    >
      <Component {...pageProps} />
    </AnimatePresence>
  )
}

export default MyApp
