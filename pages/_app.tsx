import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Head from 'next/head'
export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Head>
        <title>My Blog - a new beginning for learners</title>
        <meta
          name="description"
          content="My blog is a blogging website where you can read different blogs uploded by users as well as you can create your own blog and post it as public so everyone can access it and read it. Come forward, contribute some blogs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/blog.ico" />
    </Head>
    <div className="container">
      
        <Navbar/>
        <Component {...pageProps} />
        <Footer/>
    </div>
  </>
}
