import Link from 'next/link'
import Layout from '../components/layout'

export default function Nosotros() {
  return (

    <Layout
    title={'Nosotros'}
    description={"Página de Nosotros..."}
    >
        <Link href="/"> Inicio</Link>
    </Layout>
    
  )
}
