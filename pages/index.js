import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Home() {
  return (
<>

      <Layout
       title={'Inicio'}
       description={"Blog de música"}
      >
      <h1>
        Hola mundo
      </h1>

      <Link href="/nosotros"> Nosotros</Link>

      </Layout>

 </>
  )
}
