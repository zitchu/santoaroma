import { useRef } from "react";
import "./App.css";
import Velas from "./components/velas";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Materiais from "./components/materiais";
import Pedidos from "./components/pedidos";
import Home from "./components/home";
import Logo from "./components/img/logo3.png";
import Sobre from "./components/sobre";

function App() {
  const parallax = useRef(null);
  return (
    <div>
      <Parallax ref={parallax} pages={5}>
        <ParallaxLayer sticky={{ start: 0, end: 4 }} style={{ height: "50px" }}>
          <div className="flex flex-row relative w-[100%] gap-1 bg-verde ">
            <div className="flex flex-row justify-center items-top w-full h-[50px] bg-slate-200 relative shadow-md ">
              <div
                onClick={() => parallax.current.scrollTo(0)}
                className="h-[50px] bg-verde w-full shadow-md relative hidden md:flex justify-center items-center cursor-pointer"
              >
                <img
                  src={Logo}
                  alt="Logo3"
                  className=" bg-verde max-w-[180px] hover:scale-105 transition duration-300"
                />
              </div>
              <div
                onClick={() => parallax.current.scrollTo(1)}
                className="h-[50px] flex flex-col cursor-pointer text-black hover:text-white text-center justify-center items-center font-semibold uppercase w-full bg-azul transition duration-300"
              >
                <div className=" text-lg ">Velas</div>
              </div>
              <div
                onClick={() => parallax.current.scrollTo(2)}
                className="h-[50px] flex flex-col cursor-pointer text-black hover:text-white text-center justify-center items-center font-semibold uppercase w-full bg-creme transition duration-300"
              >
                <div className=" text-lg">Nossos Materiais</div>
              </div>
              <div
                onClick={() => parallax.current.scrollTo(3)}
                className="h-[50px] flex flex-col cursor-pointer text-black hover:text-white text-center justify-center items-center font-semibold uppercase w-full bg-rosa transition duration-300"
              >
                <div className=" text-lg">Sobre</div>
              </div>
              <div
                onClick={() => parallax.current.scrollTo(4)}
                className="h-[50px] flex flex-col cursor-pointer text-black hover:text-white text-center justify-center items-center font-semibold uppercase w-full bg-marrom transition duration-300"
              >
                <div className=" text-lg">Pedidos</div>
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0}>
          <Home />
        </ParallaxLayer>
        <ParallaxLayer offset={1}>
          <Velas />
        </ParallaxLayer>
        <ParallaxLayer offset={2}>
          <Materiais />
        </ParallaxLayer>
        <ParallaxLayer offset={3}>
          <Sobre />
        </ParallaxLayer>
        <ParallaxLayer offset={4}>
          <Pedidos />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
