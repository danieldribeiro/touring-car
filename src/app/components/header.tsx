import Image from "next/image";
import Link from "next/link";
import "../globals.css";

export default function Header() {
  return (
    <header className="w-full xl:w-4/5 md:w-10/12 mx-auto flex justify-between items-center md:px-0 px-4">
      <Link href='/'>
        <Image src='/touring-cars-logo.svg' alt="Touring cars logo" width={120} height={120}/>
      </Link>
      <nav className="justify-between gap-x-10 font-semibold md:flex hidden">
        <Link href='#'>Sobre</Link>
        <Link href='#'>Contato</Link>
        <Link href='#'>Anunciar</Link>
        <Link href='#'>Estoque</Link>
      </nav>
      <nav className="md:hidden block">
        <span className="burger-menu block"></span>
      </nav>
    </header>
  )
}