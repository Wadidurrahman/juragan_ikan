import React from "react";
import Slider from "react-slick";
import Backgroundcover from "../../assets/aset-landingpage/Background.png";
import Iconikan from "../../assets/Asetpencatatan/icon ikan.png";
import Iconpakan from "../../assets/Asetpencatatan/icon pakan.png";
import Iconpenjualan from "../../assets/Asetpencatatan/icon penjualan.png";
import Iconpemasukan from "../../assets/icon/iconpemasukan.png";
import Iconpengeluaran from "../../assets/icon/iconpengeluaran.png";
import Imgside from "../../assets/aset-landingpage/img-aset.png";
import Imgartikel2 from "../../assets/aset-landingpage/img-artikel2.jpg";
import Imgartikel3 from "../../assets/aset-landingpage/img-artikel3.jpg";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Judul = {
  judul: ["Juragan", "Ikan"],
  Discripsi: ["Juragan Ikan hadir sebagai solusi manajemen peternakan ikan yang komprehensif untuk membantu peternak mencapai hasil yang optimal dan memastikan kesejahteraan ikan"],
};

const artikel = {
  isi: [
    "Berawal dari tekad dan impian untuk memberdayakan para peternak ikan, Juragan Ikan hadir sebagai solusi inovatif dalam pengelolaan pencatatan peternakan. Kami memahami bahwa salah satu tantangan utama yang dihadapi banya peternak ikan adalah kurangnya sistem pencatatan yang efektif. Penggunaan metode pencatatan manual yang masih banyak dilakukan seringkali tidak efisien dan rentan terhadap kesalahan. Hal ini dapat menghambat pelacakan kinerjapeternakan, pengambilan keputusan yang tepat, dan peningkatan produktivitas.",
    " Didorong oleh keyakinan bahwa setiap orang berhak mengelola usahanya dengan mudah dan efisien, bebas dari stres dan kebingungan, Juragan Ikan hadir untuk membantu mewujudkan impian tersebut. Platform kami menyediakan alat yang diperlukan untuk mencapai kemandirian dan stabilitas keuangan yang lebih baik bagi para peternak ikan.",
    "Web Pencatatan Juragan Ikan dirancang khusus untuk membantu peternak ikan mengelola dan memantau kegiatan peternakan mereka dengan lebih efektif",
  ],
};

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="absolute right-4 top-24  z-10 cursor-pointer" onClick={onClick}>
      <MdArrowForwardIos className="text-4xl bg-[#F9841A] text-white px-1 py-2" />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="absolute left-2 top-24 z-10 cursor-pointer" onClick={onClick}>
      <MdArrowBackIos className="text-4xl bg-[#F9841A] text-white px-1 py-2" />
    </div>
  );
}

export default function Homepage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <main>
        <div className="relative w-full h-screen">
          <img className="w-full object-cover" src={Backgroundcover} alt="" />
          <div className="relative top-[-32rem] items-center px-12">
            <h1 className="text-7xl font-extrabold text-[#224D54]">
              {Judul.judul[0]}
              <br />
              <span className="text-7xl font-extrabold text-[#F9841A]"> {Judul.judul[1]}</span>
            </h1>
            <p className="mt-4 lg:w-1/2">{Judul.Discripsi}</p>
            <div className="relative top-5">
              <a>
                <buttom className="btn bg-[#224D54] text-white px-5 py-3 rounded-full cursor-pointer hover:bg-white hover:text-[#224D54] transition-all duration-400">Mulai Sekarang</buttom>
              </a>
            </div>
          </div>
        </div>
        <div>
          <h1 className="relative items-center text-center justify-center font-semibold text-2xl top-20">Ringkasan Data</h1>
          <div className="relative flex justify-center items-center h-full p-20 gap-2 top-10">
            <card className="flex justify-center items-center border-2 px-12 py-4 shadow-lg bg-white rounded-md ">
              <div className="justify-center items-center">
                <h2 className="text-[#224D54] font-bold pb-10">Data Ikan</h2>
                <button className="bg-[#F9841A] hover:bg-slate-500 transition-all duration-300  text-white font-bold text-sm p-2 px-5 rounded-full">
                  <a href="/Pencatatanikan">Catat</a>
                </button>
              </div>
              <img className="w-36 h-36 rounded-full" src={Iconikan} alt="im-card" />
            </card>
            <card className="flex justify-center items-center border-2 px-12 py-4 shadow-lg bg-white rounded-md ">
              <div className="justify-center items-center">
                <h2 className="text-[#224D54] font-bold pb-10">Data Pakan</h2>
                <button className="bg-[#F9841A] hover:bg-slate-500 transition-all duration-300  text-white font-bold text-sm p-2 px-5 rounded-full">
                  {" "}
                  <a href="/pencatatanpakan">Catat</a>
                </button>
              </div>
              <img className="w-36 h-36 rounded-full" src={Iconpakan} alt="im-card" />
            </card>
            <card className="flex justify-center items-center border-2 px-12 py-4 shadow-lg bg-white rounded-md ">
              <div className="justify-center items-center">
                <h2 className="text-[#224D54] font-bold pb-10">Data Penjualan</h2>
                <button className="bg-[#F9841A] hover:bg-slate-500 transition-all duration-300  text-white font-bold text-sm p-2 px-5 rounded-full">
                  <a href="/Pencatatanpenjualan">Catat</a>
                </button>
              </div>
              <img className="w-36 h-36 rounded-full" src={Iconpenjualan} alt="im-card" />
            </card>
          </div>
          <div className="relative flex justify-center items-center h-full p-20 gap-8 top-[-6rem] ">
            <div className="flex justify-center items-center border-2 px-12 py-4 shadow-lg bg-white rounded-md ">
              <div className="justify-center items-center">
                <h2 className="text-[#224D54] font-bold pb-10">
                  Total <br />
                  Pemasukan
                </h2>
                <button className="bg-[#224D54] hover:bg-slate-500 transition-all duration-300  text-white font-bold text-sm p-2 px-5 rounded-full">
                  <a href="/Pencatatanikan">Rp.120.500.000</a>
                </button>
              </div>
              <img className="w-60 h-42 rounded-full" src={Iconpemasukan} alt="im-card" />
            </div>
            <div className="flex justify-center items-center border-2 px-16 py-2 shadow-lg bg-white rounded-md ">
              <div className="justify-center items-center">
                <h2 className="text-[#224D54] font-bold pb-10">
                  Total <br />
                  Pengeluaran
                </h2>
                <button className="bg-[#224D54] hover:bg-slate-500 transition-all duration-300  text-white font-bold text-sm p-2 px-5 rounded-full">
                  <a href="/Pencatatanikan">Rp.40.350.000</a>
                </button>
              </div>
              <img className="w-60 h-42 rounded-full" src={Iconpengeluaran} alt="im-card" />
            </div>
          </div>
        </div>
        <div className="relative px-28 top-[-20] text-center">
          <div>
            <h1 className="text-2xl mb-5 font-semibold">Kisah Kami</h1>
            <p className="mb-5">{artikel.isi[0]}</p>
            <p className="mb-5">{artikel.isi[1]}</p>
            <p>{artikel.isi[2]}</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center py-20 text-center">
            <h1 className="font-semibold text-2xl mb-5">Artikel</h1>
            <p className="mb-2">Artikel budidaya ternak ikan tawar ini dapat membantu anda untuk</p>
            <p>budidaya ikan tawar</p>
          </div>

          <Slider {...settings}>
            <div className="relative items-center mb-8 left-0 md:left-4">
              <div className="px-10 ">
                <img className="w-80 h-60 mb-2 rounded-lg object-cover" src={Imgside} alt="" />
              </div>
              <div className="flex">
                <div className="relative left-10">
                  <strong className="text-5xl px-4">17</strong>
                  <h4 className="text-xs bg-[#F9841A] px-4 py-4 text-white font-semibold mt-4">Feb 2024</h4>
                </div>
                <div className="relative left-10">
                  <h3 className="text-[14px] px-2 py-2 font-semibold">
                    Panduan Komprehensif <br />
                    untuk Memulai Peternak
                  </h3>
                  <p className="text-[12px] px-2 py-0">
                    Jika Anda adalah seorang pemula yang <br />
                    ingin memulai peternakan ikan, langkah
                    <br />
                    langkah berikut ini.
                    <button>
                      <a href="#" className="text-sm text-[#F9841A] font-bold px-2">
                        Read More
                      </a>
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div className="relative items-center mb-8 left-0 md:left-10">
              <div className="px-8">
                <img className="w-80 h-60 mb-2 rounded-lg object-cover" src={Imgartikel2} alt="" />
              </div>
              <div className="flex">
                <div className="relative left-10">
                  <strong className="text-5xl px-4">19</strong>
                  <h4 className="text-xs bg-[#F9841A] px-4 py-4 text-white font-semibold mt-4">Feb 2024</h4>
                </div>
                <div className="relative left-10">
                  <h3 className="text-[14px] px-2 py-2 font-semibold">
                    Panduan Komprehensif <br />
                    untuk Memulai Peternak
                  </h3>
                  <p className="text-[12px] px-2 py-0">
                    Jika Anda adalah seorang pemula yang <br />
                    ingin memulai peternakan ikan, langkah
                    <br />
                    langkah berikut ini.
                    <button>
                      <a href="#" className="text-sm text-[#F9841A] font-bold px-2">
                        Read More
                      </a>
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div className="relative items-center mb-8 left-0 md:right-8">
              <div className="px-10">
                <img className="w-80 h-60 mb-2 rounded-lg object-cover" src={Imgartikel3} alt="" />
              </div>
              <div className="flex">
                <div className="relative left-10">
                  <strong className="text-5xl px-4">24</strong>
                  <h4 className="text-xs bg-[#F9841A] px-4 py-4 text-white font-semibold mt-4">Feb 2024</h4>
                </div>
                <div className="relative left-10">
                  <h3 className="text-[14px] px-2 py-2 font-semibold">
                    Panduan Komprehensif <br />
                    untuk Memulai Peternak
                  </h3>
                  <p className="text-[12px] px-2 py-0">
                    Jika Anda adalah seorang pemula yang <br />
                    ingin memulai peternakan ikan, langkah
                    <br />
                    langkah berikut ini.
                    <button>
                      <a href="#" className="text-sm text-[#F9841A] font-bold px-2">
                        Read More
                      </a>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </main>
    </>
  );
}
