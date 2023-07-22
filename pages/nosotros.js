
import Layout from '../components/layout'
import Image from 'next/image'
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (

    <Layout
    title={'Nosotros'}
    description={"Página de Nosotros..."}
    >
       <main className='contenedor'>
          <h2 className='heading'> Nosotros</h2>

          <div className={styles.contenido}>

            <Image src="/img/nosotros.jpg" width={1000} height={800} alt='Imagen sobre nosotros' />
            <div>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat magna sit amet arcu sollicitudin, nec placerat nisi tincidunt. Curabitur quis nisi blandit felis venenatis mattis quis non tortor. Donec vestibulum justo placerat ante venenatis, a aliquam lectus viverra. 
              </p>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat magna sit amet arcu sollicitudin, nec placerat nisi tincidunt. Curabitur quis nisi blandit felis venenatis mattis quis non tortor. Donec vestibulum justo placerat ante venenatis, a aliquam lectus viverra. Quisque cursus quis tellus ut maximus. Curabitur libero elit, lobortis eu tincidunt eu, mollis eget elit.
              </p>
            </div>
          </div>
       </main>
    </Layout>
    
  )
}
