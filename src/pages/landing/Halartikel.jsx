import React from "react";
import Bgsampul from "../../assets/aset-artikel/bg-artikel.png";
import Slider from "react-slick";
import Imgside from "../../assets/aset-landingpage/img-aset.png";
import Imgartikel2 from "../../assets/aset-landingpage/img-artikel2.jpg";
import Imgartikel3 from "../../assets/aset-landingpage/img-artikel3.jpg";
import Imgartikel4 from "../../assets/imgslide/img5.png";
import Imgartikel5 from "../../assets/imgslide/img4.png";
import Imgartikel6 from "../../assets/imgslide/img4.png";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

export default function Halartikel() {
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

  const Discripsi = {
    isi: "Artikel budidaya ternak ikan tawar ini dapat membantu anda untuk lebih mudah dalam memulai bisnis baru",
  };

  return (
    <>
      <main>
        <section className="relative w-full h-screen">
          <img className="w-full h-[26rem] object-cover" src={Bgsampul} alt="bg-sampul" />
          <div className="absolute w-full inset-0 bg-black opacity-50 h-[26rem]"></div>
          <h1 className="font-bold text-5xl poppins text-white absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Artikel</h1>
        </section>
        <div className="relative justify-center items-center text-center top-[-4rem] w-full lg:w-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p>{Discripsi.isi}</p>
        </div>
        <section>
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
            <div className="relative items-center mb-8 left-0 md:right-8">
              <div className="px-10">
                <img className="w-80 h-60 mb-2 rounded-lg object-cover" src={Imgartikel4} alt="" />
              </div>
              <div className="flex">
                <div className="relative left-10">
                  <strong className="text-5xl px-4">28</strong>
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
                <img className="w-80 h-60 mb-2 rounded-lg object-cover" src={Imgartikel5} alt="" />
              </div>
              <div className="flex">
                <div className="relative left-10">
                  <strong className="text-5xl px-4">30</strong>
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
            <div className="relative items-center mb-8 left-0 md:right-8">
              <div className="px-10">
                <img className="w-80 h-60 mb-2 rounded-lg object-cover" src={Imgartikel4} alt="" />
              </div>
              <div className="flex">
                <div className="relative left-10">
                  <strong className="text-5xl px-4">28</strong>
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
                <img className="w-80 h-60 mb-2 rounded-lg object-cover" src={Imgartikel5} alt="" />
              </div>
              <div className="flex">
                <div className="relative left-10">
                  <strong className="text-5xl px-4">30</strong>
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
        </section>
      </main>
    </>
  );
}
