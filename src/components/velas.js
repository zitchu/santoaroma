import React from "react";
import Vela1 from "./img/vela1.jpg";
import Flor1 from "./img/flor1.png";

function Velas() {
  return (
    <div
      className="h-screen w-full verdao text-2xl flex flex-row justify-evenly items-center"
      style={{
        backgroundImage: `url(${Vela1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full md:w-[66%] h-screen flex flex-col justify-evenly right-0 absolute bg-azul">
        <h1 className="quicksand-body text-xl lg:text-3xl h-auto flex flex-col right-0 relative items-center bg-azul px-[5%] text-justify leading-6 md:leading-10">
          <strong className="top-0 py-4 dancing-script text-2xl  lg:text-4xl">
            Velas Aromáticas
          </strong>
          As velas aromáticas transformam qualquer ambiente em um refúgio de
          tranquilidade. Cada chama libera fragrâncias suaves, criando uma
          atmosfera que promove introspecção e relaxamento, harmonizando os
          sentidos e evocando paz e serenidade.
        </h1>

        <div className="transform scale-x-[-1] w-full h-[15%] hidden md:flex justify-center bg-azul">
          <img
            src={Flor1}
            alt="flor1"
            className="scale-50 md:scale-100 top-0 bottom-[50%] "
          />
        </div>
        <h2 className="quicksand-body pt-4 text-xl lg:text-3xl h-auto flex right-0 relative justify-center bg-azul  px-[5%] text-justify leading-6 md:leading-10">
          Aromatizar ambientes com velas vai além de perfumar; cria um espaço de
          equilíbrio e clareza mental. Usando matérias-primas sustentáveis, cada
          vela oferece uma experiência olfativa pura e duradoura, renovando
          energias e valorizando o presente.
        </h2>
      </div>
    </div>
  );
}

export default Velas;
