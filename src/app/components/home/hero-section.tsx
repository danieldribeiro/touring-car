import Image from "next/image";
import Link from "next/link";
import { MdEast } from "react-icons/md";


export default function HeroSection() {
  return(
    <section className="py-40 px-4 h-full flex xl:flex-row flex-col items-center w-full lg:w-full xl:w-4/5 md:w-10/12">
      <div className="flex flex-col gap-y-4">
        <h1 className="lg:text-5xl xl:text-7xl font-bold text-5xl w-3/6">Qualidade, Segurança, Transparência.</h1>
        <p className="mt-4 text-2xl">Encontre seu veículo dos sonhos conosco!</p>
        <Link href='#' className="flex items-center font-bold mt-4">
          Conheça nossos modelos disponíveis 
          <MdEast className="ml-2 text-xl" />
        </Link>
      </div>
      <Image src='/porshe-gt4rs.svg' alt="Porshe GT4 RS" width={100} height={100} className="w-full xl:ml-40 md-0"/>
    </section>
  )
}