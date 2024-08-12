import React from "react";
import Les1 from "./img/les1.jpg";
import Les2 from "./img/les2.jpg";
import Flor2 from "./img/flor2.png";

function Sobre() {
  return (
    <div
      className="bg-verde h-[100vh]  w-full text-black text-2xl flex  justify-center items-center"
      style={{
        backgroundImage: `url(${Les1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full md:w-[66%] h-full flex flex-col left-0 absolute justify-evenly items-center bg-rosa ">
        <h1 className="px-[5%] text-justify text-sm md:text-2xl leading-5 md:leading-10">
          Vivemos a vida para criar momentos especiais, para esses momentos
          tenho estado em constante sintonia com o clima e o ambiente em que
          estou. Para momentos especiais as velas aromáticas tem me acomapnhado
          e sua produção me ajuda a proporcionar esses momentos para mais
          pessoas.
        </h1>
        <h1 className="px-[5%] text-justify text-sm md:text-2xl leading-5 md:leading-10">
          <i>
            Minha relação com aromas e com um ambiente harmônico vem desde
            sempre, e da limpeza ao equilíbrio de tudo ao meu redor em meus
            ambientes, percebi que velas aromáticas complementam de forma
            perfeita um lugar onde busco estar em paz e tranquilidade. Quis
            fazer dessa paixão uma forma de ajudar outras pessoas a terem algo
            assim em seus ambientes.
          </i>
          <p>Lesllie</p>
        </h1>
        <div>
          <img src={Les2} alt="les2" className="h-[350px]" />
          <img
            src={Flor2}
            alt="flor2"
            className="w-[15%] right-0 absolute mr-[20%] mt-0 bottom-[10%] hidden md:block"
          />
        </div>
      </div>
    </div>
  );
}

export default Sobre;
