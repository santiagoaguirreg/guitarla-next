import Image from 'next/image'


export default function Header() {
  return (
    <header>
  
        <div className='contenedor'>
          <Image src="/img/logo.svg" width={300} height={300} />

        </div>

    </header>
  )
}
