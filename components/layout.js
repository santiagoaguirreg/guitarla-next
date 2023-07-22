import Head from "next/head"

export default function Layout({children, title="", description}) {
  return (
    <>
    <Head>
     <title>{ `Guitar La - ${title}`}</title>
     <meta name="description" content={description} />
    </Head>
    <h1>
        Desde Layout
    </h1>
    {children}
    </>
  )
}
