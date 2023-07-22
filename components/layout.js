import Head from "next/head"
import Header from "./header"
import Footer from "./footer"

export default function Layout({children, title="", description}) {
  return (
    <>
    <Head>
     <title>{ `Guitar La - ${title}`}</title>
     <meta name="description" content={description} />
    </Head>

    <Header />
    {children}
    <Footer />
    </>
  )
}
