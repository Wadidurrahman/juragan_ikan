import React from "react";
import bg from "../../assets/aset-img/forum.png";
import Wa from "../../assets/icon/wa.svg";

export default function Forum() {
  const Discripsi = {
    isi: [
      "Bergabunglah dengan grup diskusi WhatsApp kami yang aktif, tempat para peternak ikan berkumpul untuk berbagi pengalaman, tips, dan informasi terkini seputar budidaya ikan.",
      "Dapatkan kesempatan untuk bertanya, belajar, dan berkolaborasi dengan sesama peternak yang berpengalaman. Jangan lewatkan kesempatan untuk meningkatkan pengetahuan dan keterampilan Anda dalam dunia budidaya ikan. Ayo bergabung sekarang untuk mendapatkan manfaatnya!",
    ],
  };

  return (
    <>
      <main>
        <div className="relative" style={{ width: "100%", height: "400px" }}>
          <div className="absolute inset-0 z-0 transform " style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", width: "100%", height: "100%" }}>
            <div className="absolute inset-0 bg-black opacity-20"></div>
          </div>
          <h1 className="font-bold text-5xl text-white text-center pt-24 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">Forum</h1>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between mt-12">
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center pb-20">
              <img width={100} height={100} src={Wa} className="py-10" alt="WhatsApp" />
              <button className="px-10 py-1 rounded-full text-white font-bold text-sm bg-teal-600 hover:bg-teal-700">Lanjutkan Obrolan Ke WhatsApp</button>
            </div>
            <div className="w-full md:w-1/2 px-6 md:px-0 flex flex-col items-center justify-center text-center py-20 bg-white">
              {Discripsi.isi.map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
              <p className="mt-2">
                Belum Punya WhatsApp?{" "}
                <a className="text-teal-600 font-semibold cursor-pointer" href="https://www.whatsapp.com/download?lang=id_ID">
                  Unduh sekarang
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
