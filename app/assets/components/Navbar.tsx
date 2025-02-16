"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";

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
      <nav className="absolute top-0 left-0 right-0 z-30">
        <ul className="flex justify-center gap-6 p-10 text-zinc-800 ">
          <li>
            <Link href="/" className="hover:text-zinc-600">
              Home
            </Link>
          </li>
          <li>
            <a href="#" className="hover:text-zinc-600">
              <Link href="/" className="hover:text-zinc-600">
                Quem somos
              </Link>
            </a>
          </li>
          <li>
            <Link href="/" className="hover:text-zinc-600">
              Tratamentos
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-zinc-600">
              Contato
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-zinc-600">
              Onde estamos
            </Link>
          </li>
        </ul>
      </nav>

      <div className="allWaves flex justify-center  items-center">
        {" "}
        <div className="textDiv absolute w-full h-48 bg-zinc-50 opacity-50 top-1/2 -translate-y-1/2"></div>
        <div className="textDiv w-full p-10 relative">
          <h1 className="text-8xl text-zinc-800 text-center opacity-100">
            Se sinta nas nuvens...
          </h1>
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
