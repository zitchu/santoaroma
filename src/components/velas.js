import React from "react";
import Vela1 from "./img/vela1.jpg";
import Flor1 from "./img/flor1.png";

function Velas() {
  return (
    <div
      className="h-[100vh]  w-full text-black text-2xl flex flex-row justify-evenly items-center"
      style={{
        backgroundImage: `url(${Vela1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full md:w-[66%] h-full flex flex-col justify-evenly right-0 absolute">
        <h1 className="text-sm md:text-2xl h-full flex right-0 relative justify-center items-center bg-azul px-[5%] text-justify leading-6 md:leading-10">
          As velas aromáticas têm o poder de transformar qualquer ambiente em um
          refúgio de tranquilidade e bem-estar. Cada chama acesa libera
          fragrâncias delicadas e envolventes, criando uma atmosfera que convida
          à introspecção e ao relaxamento. A suavidade dos aromas escolhidos com
          cuidado não apenas perfuma o espaço, mas também harmoniza os sentidos,
          evocando uma sensação de paz interior e serenidade.
        </h1>
        <img
          src={Vela1}
          alt="min"
          className="w-full inset-0 relative mr-[40%] mt-0 bottom-[50%] md:hidden "
        />
        <div className="transform scale-x-[-1]">
          <img
            src={Flor1}
            alt="flor1"
            className="w-[15%] right-0 absolute mr-[40%] mt-0 bottom-[50%] hidden md:block"
          />
        </div>
        <h2 className="text-sm md:text-2xl h-full flex right-0 relative justify-center items-center bg-azul px-[5%] text-justify leading-6 md:leading-10">
          A aromatização de ambientes com velas vai além de simplesmente
          perfumar; ela envolve a criação de um ambiente que promove equilíbrio
          e clareza mental. Ao utilizar matérias-primas sustentáveis,
          asseguramos que cada vela proporcione uma experiência olfativa pura e
          duradoura, sem agredir o meio ambiente. Assim, cada instante se torna
          uma oportunidade de renovar as energias e apreciar o momento presente.
        </h2>
      </div>
    </div>
  );
}

export default Velas;
