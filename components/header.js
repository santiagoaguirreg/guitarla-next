import Image from 'next/image'
import styles from '../styles/header.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'


export default function Header() {

  const router = useRouter();

  return (
    <header className={styles.header}>
  
        <div className={`contenedor ${styles.barra}`}>

          <Link href={'/'}>
         
          <Image src="/img/logo.svg" width={300} height={40} alt="Logo principal"/>
   
          </Link>
          <nav className={styles.navegacion}>
            <Link className={router.pathname === '/' ? styles.active : '' } href='/'>
                Inicio
            </Link>

            <Link className={router.pathname === '/nosotros' ? styles.active : '' } href="/nosotros">
              Nosotros
            </Link>

            <Link className={router.pathname === '/tienda' ? styles.active : '' } href="/tienda">
             Tienda
            </Link>

            <Link className={router.pathname === '/blog' ? styles.active : '' } href="/blog">
              Blog
            </Link>
          </nav>

        </div>

    </header>
  )
}
