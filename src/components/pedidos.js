import React from "react";
import Logo from "./img/logo3.png";
import Flor4 from "./img/flor4.png";

function Pedidos() {
  return (
    <div className="h-screen pt-[51px] w-full bg-marrom text-white text-2xl relative flex flex-col justify-center items-center z-[1000]">
      <div className="flex flex-col items-center">
        <h1 className="px-[5%] text-lg md:text-2xl text-center quicksand-title">
          Conheça nosso Instagram e faça seu pedido
        </h1>
        <a
          href="https://www.instagram.com/santo_aroma_bsb_/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white cursor-pointer hover:text-gray-300 hover:shadow-md hover:scale-105 transition duration-300"
        >
          <img src={Logo} alt="Logo3" className="mt-4" />
        </a>
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
