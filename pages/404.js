import Layout from "../components/layout"
import Link from "next/link"

export default function Pagina404() {
  return (
    <Layout
     title="Pagina no encontrada"
    >
      <p className="error">Página no Encontrada</p>

      <Link className="error-enlace" href='/'>
        Ir a Inicio
      </Link>
    </Layout>
  )
}
