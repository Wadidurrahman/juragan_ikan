import React from "react";
import Backgroundcover from "../../assets/aset-aboutus/bg-cover.png";
import Img1 from "../../assets/aset-aboutus/img1.png";
import Img2 from "../../assets/aset-aboutus/img2.png";
import Imgteam from "../../assets/aset-aboutus/imgteam1.jpg";
import Imgteam2 from "../../assets/aset-aboutus/imgteam2.jpg";
import Imgteam3 from "../../assets/aset-aboutus/imgteam3.jpg";
import Imgteam4 from "../../assets/aset-aboutus/imgteam4.jpg";
import Imgteam5 from "../../assets/aset-aboutus/imgteam5.jpg";

export default function Aboutus() {
  return (
    <>
      <main>
        <section className="relative w-full h-screen">
          <img className="w-full h-[26rem]" src={Backgroundcover} alt="bgcover" />
          <div className="absolute inset-0 bg-black opacity-50 h-[26rem]"></div>
          <h1 className="font-bold text-5xl poppins text-white absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Tentang Juragan Ikan</h1>
        </section>
        <section className="relative px-28 bottom-28 text-center">
          <div>
            <h1 className="text-2xl mb-5 font-semibold">Kisah Kami</h1>
            <p className="mb-5">
              Berawal dari tekad dan impian untuk memberdayakan para peternak ikan, Juragan Ikan hadir sebagai solusi inovatif dalam pengelolaan pencatatan peternakan. Kami memahami bahwa salah satu tantangan utama yang dihadapi banyak
              peternak ikan adalah kurangnya sistem pencatatan yang efektif. Penggunaan metode pencatatan manual yang masih banyak dilakukan seringkali tidak efisien dan rentan terhadap kesalahan. Hal ini dapat menghambat pelacakan kinerja
              peternakan, pengambilan keputusan yang tepat, dan peningkatan produktivitas.
            </p>
            <p className="mb-5">
              Didorong oleh keyakinan bahwa setiap orang berhak mengelola usahanya dengan mudah dan efisien, bebas dari stres dan kebingungan, Juragan Ikan hadir untuk membantu mewujudkan impian tersebut. Platform kami menyediakan alat yang
              diperlukan untuk mencapai kemandirian dan stabilitas keuangan yang lebih baik bagi para peternak ikan.
            </p>
            <p>Web Pencatatan Juragan Ikan dirancang khusus untuk membantu peternak ikan mengelola dan memantau kegiatan peternakan mereka dengan lebih efektif</p>
          </div>
        </section>
        <section className="flex justify-center items-center mb-8 gap-8">
          <img className="w-90 h-full shadow-xl rounded-lg" src={Img1} alt="element" />
          <img className="w-90 h-full shadow-xl rounded-lg" src={Img2} alt="element" />
        </section>
        <section className="text-center my-20">
          <h1 className="relative font-semibold text-3xl mb-10">Perkenalkan Tim Kami</h1>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center">
              <img className="w-40 h-52 rounded-lg mb-4 object-cover" src={Imgteam2} alt="Wadidur Rahman" />
              <div className="text-center">
                <h3 className="text-sm text-gray-500">Putri Lutfiasari</h3>
                <p className="text-sm text-gray-500">Hilster</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img className="w-40 h-52 rounded-lg mb-4 object-cover" src={Imgteam4} alt="Wadidur Rahman" />
              <div className="text-center">
                <h3 className="text-sm text-gray-500">Santi Fitria</h3>
                <p className="text-sm text-gray-500">Hipster</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img className="w-40 h-52 rounded-lg mb-4 object-cover" src={Imgteam3} alt="Wadidur Rahman" />
              <div className="text-center">
                <h3 className="text-sm text-gray-500">Jahnawi Kesianata</h3>
                <p className="text-sm text-gray-500">Hipster</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img className="w-40 h-52 rounded-lg mb-4 object-cover" src={Imgteam5} alt="Wadidur Rahman" />
              <div className="text-center">
                <h3 className="text-sm text-gray-500">Muhammad Fitrian Rasyid</h3>
                <p className="text-sm text-gray-500">Hacker</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img className="w-40 h-52 rounded-lg mb-4 object-cover" src={Imgteam} alt="Wadidur Rahman" />
              <div className="text-center">
                <h3 className="text-sm text-gray-500">Wadidur Rahman</h3>
                <p className="text-sm text-gray-500">Hacker</p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#224D54] flex flex-col lg:flex-row text-white gap-8 lg:gap-4 px-8 lg:px-36 py-10 my-20 items-start">
          <div className="lg:w-1/2  p-4 lg:p-10">
            <h2 className="font-semibold text-2xl mb-6">Visi Kami</h2>
            <p>Visi Juragan Ikan adalah menjadi platform manajemen peternakan ikan terdepan di Indonesia yang membantu para peternak ikan dalam meningkatkan produktivitas, keuntungan, dan keberlanjutan usaha mereka.</p>
          </div>
          <div className="lg:w-1/2 p-4 lg:p-10">
            <h2 className="font-semibold text-2xl mb-6">Misi Kami</h2>
            <ul className="list-decimal ml-4">
              <li className="mb-2">Mengembangkan platform manajemen peternakan ikan yang mudah digunakan, terjangkau, dan andal.</li>
              <li className="mb-2">Menyediakan fitur inovatif yang memberdayakan peternak ikan untuk membuat keputusan yang tepat.</li>
              <li className="mb-2">Menawarkan sumber daya edukasi dan pelatihan untuk meningkatkan praktik budidaya ikan.</li>
              <li>Berkolaborasi dengan para pemangku kepentingan untuk mendorong industri akuakultur yang berkembang dan berkelanjutan.</li>
            </ul>
          </div>
        </section>
        <section>
          <div className=" lg:flex-row gap-8 lg:gap-4 px-8 lg:px-36 py-4 my-20 items-start text-center">
            <div>
              <p className="mb-5">
                Juragan Ikan berkomitmen untuk memberdayakan peternak ikan di seluruh Indonesia. Budidaya ikan Anda dengan Juragan Ikan dan buka berbagai peluang baru.
                <br />
                Salam,
              </p>
              <h4>Tim Juragan Ikan</h4>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
