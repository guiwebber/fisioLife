"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";
import dr from "../images/dr.png";
import fisio1 from "../images/fisio2.png";

function Navbar() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className="absolute top-0 left-0 right-0 z-30 bg-gray-900 rounded-b-xl border-b-4 border-gray-950 ">
        <ul className="flex justify-center gap-6 p-10 text-slate-50 ">
          <li>
            <Link href="/" className="hover:text-gray-950 transition">
              Início
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-gray-950 transition">
              Especialidades
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-gray-950 transition">
              Sobre
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-950 transition">
              Contato
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-gray-950 transition">
              Sociais
            </Link>
          </li>
        </ul>
      </nav>

      <div className="allWaves flex justify-center  items-center bg-gray-600">
        <div className="w-96 text-center">
          <h1 className="font-semibold text-3xl text-orange-500">
            Proporcionando mais qualidade de vida através do movimento.
          </h1>
          <p className="text-gray-700">
            Um espaço dedicado a atender homens e mulheres de todas as idades.
          </p>
          <button className="border-none bg-slate-100 text-gray-950 rounded-full py-2 px-5 my-4 font-bold hover:bg-gray-950 hover:text-gray-100 transition">
            Agendar agora
          </button>
        </div>
        <div>
          <Image
            src={fisio1}
            alt="Descrição da imagem"
            className="rounded-xl w-96 h-96 object-cover"
          />
        </div>
        <div
          className="ondas"
          id="onda1"
          style={{ backgroundPositionX: `${scrollY * 4}px bottom` }}
        ></div>
        <div
          className="ondas"
          id="onda2"
          style={{ backgroundPosition: `${scrollY * -3}px bottom` }}
        ></div>
        <div
          className="ondas"
          id="onda3"
          style={{ backgroundPosition: `${scrollY * 2}px bottom` }}
        ></div>
        <div
          className="ondas"
          id="onda4"
          style={{ backgroundPosition: `${scrollY * -2}px bottom` }}
        ></div>
      </div>
      <div className="flex flex-col  items-center ">
        <h1 className="p-10 text-4xl text-center">Fisioterapia</h1>
        <p className="max-w-5xl text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          deserunt porro magni atque sint praesentium provident, inventore
          voluptate quod molestiae, illo illum amet eius? Ratione recusandae
          accusamus animi enim maiores.
        </p>
      </div>
      <div className=" py-10 gap-7 flex flex-wrap justify-center items-center mx-auto my-32">
        <div className="flex flex-col gap-2">
          <Image
            src={img1}
            alt="Descrição da imagem"
            className="rounded-full w-40 h-60 object-cover"
          />
          <Image
            src={img2}
            alt="Descrição da imagem"
            className="rounded-full w-40 h-60 object-cover"
          />
          <Image
            src={img3}
            alt="Descrição da imagem"
            className="rounded-full w-40 h-60 object-cover"
          />
        </div>
        <div className="mb-40 flex flex-col gap-2">
          <Image
            src={img1}
            alt="Descrição da imagem"
            className="rounded-full w-40 h-60 object-cover"
          />
          <Image
            src={img4}
            alt="Descrição da imagem"
            className="rounded-full w-40 h-60 object-cover"
          />
          <Image
            src={img5}
            alt="Descrição da imagem"
            className="rounded-full w-40 h-60 object-cover"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Image
            src={img3}
            alt="Descrição da imagem"
            className="rounded-full w-40 h-60 object-cover"
          />
          <Image
            src={img4}
            alt="Descrição da imagem"
            className="rounded-full w-40 h-60 object-cover"
          />
          <Image
            src={img5}
            alt="Descrição da imagem"
            className="rounded-full w-40 h-60 object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
