import Header from '@/components/Header';
import { Poppins } from 'next/font/google';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700']
})

export default function App({ Component, pageProps }: AppProps) {
  return(
    <div className={poppins.className}>
    <Header/>
    <Component {...pageProps} />
    </div>
  ) 
}
