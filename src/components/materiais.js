import React from "react";
import Vela4 from "./img/vela4.jpg";
import Flor1 from "./img/flor1.png";

function Materiais() {
  return (
    <div
      className="h-screen w-full verdao text-2xl flex flex-row justify-evenly items-center"
      style={{
        backgroundImage: `url(${Vela4})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full md:w-[66%] h-screen flex flex-col justify-evenly left-0 absolute bg-creme">
        <h1 className="quicksand-body text-xl lg:text-3xl h-auto flex flex-col right-0 relative items-center bg-creme px-[5%] text-justify leading-6 md:leading-10">
          <strong className=" top-0 py-4 dancing-script text-2xl lg:text-4xl">
            Nossa matéria-prima
          </strong>
          A cera de coco, usada em nossas velas, reflete nosso compromisso com
          pureza e sustentabilidade. Diferente da parafina, é uma alternativa
          natural que proporciona uma chama limpa e purificadora, liberando
          aromas gradualmente para uma experiência sensorial envolvente.
        </h1>

        <div className=" w-full h-[15%] hidden md:flex justify-center bg-creme">
          <img
            src={Flor1}
            alt="flor1"
            className="scale-50 md:scale-100 mt-0 bottom-[50%] hidden md:block"
          />
        </div>
        <h2 className="quicksand-body pt-4 text-xl lg:text-3xl h-auto flex right-0 relative justify-center bg-creme px-[5%] text-justify leading-6 md:leading-10">
          Nossos pavios de alta qualidade garantem uma combustão contínua e
          suave, preservando as fragrâncias até o fim. Com componentes
          superiores, cada vela oferece serenidade e um compromisso com a
          harmonia entre homem e natureza.
        </h2>
      </div>
    </div>
  );
}

export default Materiais;
