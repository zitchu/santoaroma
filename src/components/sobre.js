import React from "react";
import Les1 from "./img/les1.png";
import Les2 from "./img/les2.png";
import Flor2 from "./img/flor2.png";

function Sobre() {
  return (
    <div
      className="bg-verde h-screen w-full verdao text-2xl flex justify-center items-center "
      style={{
        backgroundImage: `url(${Les2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full lg:w-[60%] h-screen flex flex-col right-0 absolute justify-evenly items-center bg-rosa ">
        <h1 className="quicksand-body px-[5%] h-auto text-justify text-sm md:text-lg lg:text-2xl flex flex-col leading-4 md:leading-6">
          <p className="top-0 py-4 dancing-script text-lg md:text-2xl lg:text-4xl">
            Penso que...
          </p>
          Criamos momentos especiais em sintonia com o ambiente. As velas
          aromáticas me acompanham nesses momentos, e produzir essas velas me
          permite compartilhá-los com mais pessoas.
        </h1>
        <h1 className="quicksand-body h-auto px-[5%] text-justify text-sm md:text-lg lg:text-2xl leading-4 md:leading-6">
          <i>
            Sempre tive uma conexão com aromas e ambientes harmoniosos. Percebi
            que velas aromáticas complementam perfeitamente os espaços onde
            busco paz e tranquilidade. Transformei essa paixão em uma maneira de
            ajudar outras pessoas a criarem ambientes assim.
          </i>
          <p className="text-end">Lesllie</p>
        </h1>
        <div className="relative flex justify-center items-center">
          <img src={Les1} alt="les2" className="w-[300px]" />
        </div>
        <img
          src={Flor2}
          alt="flor2"
          className="w-[10%] absolute right-0 mr-[15%] mt-0 bottom-[10%] hidden md:block"
        />
      </div>
    </div>
  );
}

export default Sobre;
