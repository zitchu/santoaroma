import React from "react";
import Logo from "./img/logo3.png";
import Flor4 from "./img/flor4.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

function Pedidos() {
  return (
    <div className="h-screen pt-[51px] w-full bg-marrom text-white text-2xl relative flex flex-col justify-center items-center z-[999]">
      <div className="flex flex-col items-center">
        <h1 className="px-[5%] pb-4 text-2xl md:text-3xl text-center quicksand-title">
          Conheça nossas redes, faça seu pedido
        </h1>
        <a
          href="https://wa.me/5561994161147?text=Olá,%20estou%20interessado(a)%20em%20velas%20aromáticas!"
          target="_blank"
          className="text-white text-shadow text-2xl md:text-3xl p-4 quicksand-title rounded cursor-pointer hover:text-gray-300 shadow-md hover:scale-105 transition duration-300"
        >
          WhatsApp <WhatsAppIcon  />
        </a>

        <a
          href="https://www.instagram.com/santo_aroma_bsb_/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-shadow text-2xl md:text-3xl p-4 quicksand-title rounded cursor-pointer hover:text-gray-300 shadow-md hover:scale-105 transition duration-300"
        >
          Instagram <InstagramIcon />
        </a>
        <img src={Logo} alt="Logo3" className="mt-4 scale-75" />
        <img
          src={Flor4}
          alt="Flor4"
          className="md:w-[100px] lg:w-[130px] xl:w-[150px] absolute right-0 mr-[10%] opacity-30 -mt-[10%] hidden md:block"
        />
      </div>
    </div>
  );
}

export default Pedidos;
