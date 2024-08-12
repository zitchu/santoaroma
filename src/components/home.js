import React from "react";
import Logo from "./img/logo3.png";
import Vela3 from "./img/vela3.jpg";
import Flor3 from "./img/flor3.png";

function Home() {
  return (
    <div
      className="bg-verde h-[100vh]  w-full text-white text-2xl flex  justify-center items-center "
      style={{
        backgroundImage: `url(${Vela3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-[66%] h-full flex flex-col left-0 absolute justify-center items-center bg-verde ">
        <img src={Logo} alt="Logo" className="" />
        <img
          src={Flor3}
          alt="flor3"
          className="w-[15%] bottom-0 absolute mb-[5%]"
        />
      </div>
    </div>
  );
}

export default Home;
