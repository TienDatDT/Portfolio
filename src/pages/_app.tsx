import Footer from '@/components/Footer'
import HiredMe from '@/components/HiredMe'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${montserrat.variable} font-mont`}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <HiredMe />
    </main>
  )
}
