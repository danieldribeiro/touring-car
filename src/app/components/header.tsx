'use client'

import Image from "next/image";
import Link from "next/link";
import "../globals.css";
import { useState } from "react";

export default function Header() {

  const [isOpen, setIsOpen] = useState(false)

  const handleToggleMenu = () => {
    setIsOpen(!isOpen)
  }

  console.log(isOpen)

  return (
    <header className="w-full lg:w-full xl:w-4/5 md:w-10/12 flex justify-between items-center md:px-0 px-4">
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
        <span className={isOpen ? "block open" : "block burger-menu"} onClick={() => handleToggleMenu()}></span>
      </nav>
    </header>
  )
}