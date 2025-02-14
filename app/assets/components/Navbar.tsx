"use client";
import React, { useEffect, useState } from "react";

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
        <ul className="flex justify-center gap-6 p-10 text-zinc-50 ">
          <li>
            <a href="#" className="hover:text-zinc-600">Sobre</a>
          </li>
          <li>
            <a href="#" className="hover:text-zinc-600">Contato</a>
          </li>
          <li>
            <a href="#" className="hover:text-zinc-600">Tratamentos</a>
          </li>
          <li>
            <a href="#" className="hover:text-zinc-600">Onde estamos</a>
          </li>
        </ul>
      </nav>

      <div className="allWaves flex justify-center  items-center">
        <div>
          <h1 className="text-8xl text-zinc-50 ">Se sinta nas nuvens...</h1>
        </div>
        <div
          className="ondas"
          id="onda1"
          style={{ backgroundPositionX: `${scrollY * 4.5}px bottom` }}
        ></div>
        <div
          className="ondas"
          id="onda2"
          style={{ backgroundPosition: `${scrollY * -4.3}px bottom` }}
        ></div>
        <div
          className="ondas"
          id="onda3"
          style={{ backgroundPosition: `${scrollY * 2.7}px bottom` }}
        ></div>
        <div
          className="ondas"
          id="onda4"
          style={{ backgroundPosition: `${scrollY * -2.2}px bottom` }}
        ></div>
      </div>
      <div style={{ height: "200vh"}}>
        <p className="p-10">Role a página para ver o efeito...</p>
      </div>
    </div>
  );
}

export default Navbar;
