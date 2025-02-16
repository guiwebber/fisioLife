import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <div className="w-full h-80 bg-slate-700 flex justify-evenly items-center text-center text-cyan-50 ">
      <div>
        <div>
          LOGO
        </div>
        <div className="m-10">
          <p className="font-sans text-red-300">
            Precisa entrar em contato com a gente?
          </p>
          <p className="font-sans">
            Atendimento de segunda a sexta, das 08h as 18h
          </p>
        </div>
        <p className="font-sans text-red-300">Siga-nos nas redes sociais</p>
        <div className="flex justify-center gap-4">
          <a href="https://wa.me/seu-numero" target="_blank">
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="w-7 text-green-500 hover:text-green-700"
            />
          </a>
          <a href="https://facebook.com/seu-perfil" target="_blank">
            <FontAwesomeIcon
              icon={faFacebook}
              className="w-7 text-blue-600 hover:text-blue-800"
            />
          </a>
          <a href="https://instagram.com/seu-perfil" target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              className="w-7 text-pink-500 hover:text-pink-700"
            />
          </a>
        </div>
      </div>
      <div>
        <h4>Telefone</h4>
        <p className="font-sans">(54) 9 9140-6029</p>
        <h4>Whatsapp</h4>
        <p className="font-sans">(54) 9 9140-6029</p>
        <h4>E-mail</h4>
        <p>guiwebber@email.com</p>
      </div>
      <div className="">
        <h1 className="font-sans">Onde estamos localizados</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d302.8323701249271!2d-52.22473536107748!3d-27.88506030221875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e2e2831a051827%3A0x367d627f67668bdf!2sAv.%20Severiano%20de%20Almeida%20-%20Get%C3%BAlio%20Vargas%2C%20RS%2C%2099900-000!5e0!3m2!1spt-BR!2sbr!4v1739717179699!5m2!1spt-BR!2sbr"
          width="300"
          height="200"
          style={{ border: "none" }} // Correção aqui
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Footer;
