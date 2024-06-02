import React from "react";
import Bg from "../../assets/aset-bg/bg-statistik.png";

export default function Statistik() {
  return (
    <>
      <main>
        <section className="relative w-full h-screen">
          <img className="w-full h-[26rem] object-cover" src={Bg} alt="background" />
          <div className="absolute inset-0 bg-black opacity-50 h-[26rem]"></div>
          <div className="relative justify-center items-center text-center top-10 ">
            <p>
              Pencatatan yang cermat membantu peternak dalam mengambil
              <br /> keputusan tepat untuk meningkatkan produktivitas dan memastikan <br /> kesejahteraan ikan.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
