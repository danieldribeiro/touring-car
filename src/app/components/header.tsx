import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full xl:w-4/5 md:w-10/12 mx-auto flex justify-between items-center">
      <Link href='/'>
        <Image src='/touring-cars-logo.svg' alt="Touring cars logo" width={120} height={120}/>
      </Link>
      <nav className="flex justify-between gap-x-10 font-semibold">
        <Link href='#'>Sobre</Link>
        <Link href='#'>Contato</Link>
        <Link href='#'>Anunciar</Link>
        <Link href='#'>Estoque</Link>
      </nav>
    </header>
  )
}