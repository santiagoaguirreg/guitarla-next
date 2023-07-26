import { useRouter } from "next/router"

export default function Producto({guitarra}) {
    const router = useRouter()
  return (
    <div>[url]</div>
  )
}

export async function getStaticPaths() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
    const {data } = await respuesta.json()


    
    const paths = data.map(guitarra => ({
      params: {
        url: guitarra.attributes.url
      }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: {url}}) {

    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
    const {data: guitarra} = await respuesta.json()
  
    return {
      props: {
        guitarra
      }
    }
  }
  


// export async function getServerSideProps({query: {url}}) {

//     const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
//     const {data: guitarra} = await respuesta.json()
  
//     return {
//       props: {
//         guitarra
//       }
//     }
//   }
  