import React from "react";
import Vela4 from "./img/vela4.jpg";
import Flor1 from "./img/flor1.png";


function Materiais() {
  return (
    <div
      className="h-[100%] w-full text-black text-2xl flex flex-row justify-evenly items-center "
      style={{
        backgroundImage: `url(${Vela4})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full md:w-[50%] h-screen flex flex-col justify-evenly right-0 absolute overflow-auto">
        <h1 className="text-sm md:text-lg lg:text-2xl h-full flex right-0 relative justify-center items-center bg-creme px-[5%] text-justify leading-5 md:leading-10">
          A escolha da cera de coco como base para nossas velas reflete um
          compromisso com a pureza e a sustentabilidade. Diferente da parafina,
          que gera resíduos poluentes ao queimar, a cera de coco é uma
          alternativa natural e renovável, proporcionando uma chama limpa que
          purifica o ambiente. Sua queima lenta e uniforme permite que os aromas
          sejam liberados gradualmente, criando uma experiência sensorial
          prolongada e envolvente.
        </h1>
        <img
          src={Vela4}
          alt="eros"
          className="w-full inset-0 relative mr-[40%] mt-0 bottom-[50%] md:hidden "
        />
        <div className="">
          <img
            src={Flor1}
            alt="flor1"
            className="w-[15%] right-0 absolute mr-[40%] mt-0 bottom-[50%] hidden md:block"
          />
        </div>
        <h2 className="text-sm md:text-lg lg:text-2xl h-full flex right-0 relative justify-center items-center bg-creme px-[5%] text-justify leading-5 md:leading-10">
          Além disso, nossos pavios de alta qualidade são cuidadosamente
          selecionados para assegurar uma combustão contínua e sem resíduos.
          Essa atenção aos detalhes resulta em uma queima mais duradoura e
          suave, preservando a essência das fragrâncias até o último instante.
          Ao optar por componentes superiores, garantimos que cada vela ofereça
          não apenas uma atmosfera de serenidade, mas também um compromisso com
          a harmonia entre o homem e a natureza. agradável.
        </h2>
      </div>
    </div>
  );
}

export default Materiais;
