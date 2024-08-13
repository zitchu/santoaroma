import "./App.css";
import Velas from "./components/velas";
import Materiais from "./components/materiais";
import Pedidos from "./components/pedidos";
import Home from "./components/home";
import Logo from "./components/img/logo3.png";
import Sobre from "./components/sobre";

function App() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex flex-row relative w-[100%] gap-1 bg-verde ">
        <div className="flex flex-row justify-center items-top w-full h-[50px] fixed bg-slate-200 shadow-md z-[1000]">
          <div
            onClick={() => scrollToSection("home")}
            className="h-[50px] bg-verde w-full shadow-md relative hidden md:flex justify-center items-center cursor-pointer"
          >
            <img
              src={Logo}
              alt="Logo3"
              className="bg-verde max-w-[180px] hover:scale-105 transition duration-300"
            />
          </div>
          <div
            onClick={() => scrollToSection("velas")}
            className="h-[50px] quicksand-title flex flex-col cursor-pointer text-black hover:text-white text-center justify-center items-center font-semibold  w-full bg-azul transition duration-300"
          >
            <div className="text-lg">Velas</div>
          </div>
          <div
            onClick={() => scrollToSection("materiais")}
            className="h-[50px] quicksand-title flex flex-col cursor-pointer text-black hover:text-white text-center justify-center items-center font-semibold  w-full bg-creme transition duration-300"
          >
            <div className="text-lg">Nossos Materiais</div>
          </div>
          <div
            onClick={() => scrollToSection("sobre")}
            className="h-[50px] quicksand-title flex flex-col cursor-pointer text-black hover:text-white text-center justify-center items-center font-semibold  w-full bg-rosa transition duration-300"
          >
            <div className="text-lg">Sobre</div>
          </div>
          <div
            onClick={() => scrollToSection("pedidos")}
            className="h-[50px] quicksand-title flex flex-col cursor-pointer text-black hover:text-white text-center justify-center items-center font-semibold  w-full bg-marrom transition duration-300"
          >
            <div className="text-lg">Pedidos</div>
          </div>
        </div>
      </div>

      <div id="home" className="section">
        <Home />
      </div>
      <div id="velas" className="section">
        <Velas />
      </div>
      <div id="materiais" className="section">
        <Materiais />
      </div>
      <div id="sobre" className="section">
        <Sobre />
      </div>
      <div id="pedidos" className="section">
        <Pedidos />
      </div>
    </div>
  );
}

export default App;
