import React, { useState } from "react";
import Slider from "react-slick";
import Bgsampul from "../../assets/aset-artikel/bg-artikel.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Imgdropside from "../../assets/aset-landingpage/img-aset.png";
import Imgartikel2 from "../../assets/aset-landingpage/img-artikel2.jpg";
import Imgartikel3 from "../../assets/aset-landingpage/img-artikel3.jpg";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="absolute bottom-0 right-16 z-10 cursor-pointer" onClick={onClick}>
      <MdArrowForwardIos className="text-4xl bg-[#F9841A] text-white px-1 py-2" />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="absolute bottom-0 left-16 z-10 cursor-pointer" onClick={onClick}>
      <MdArrowBackIos className="text-4xl bg-[#F9841A] text-white px-1 py-2" />
    </div>
  );
}

export default function Halartikel() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2; // Total pages

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: (current) => setCurrentPage(current + 1),
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
          <p>Artikel budidaya ternak ikan tawar ini dapat membantu anda untuk lebih mudah dalam memulai bisnis baru</p>
        </div>
        <section className="w-full flex justify-center">
          <Slider {...settings}>
            {[...Array(totalPages)].map((_, pageIndex) => (
              <div key={pageIndex} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[...Array(2)].map((_, rowIndex) => (
                  <div key={rowIndex} className="flex justify-between">
                    {[Bgsampul, Bgsampul, Bgsampul].map((src, cardIndex) => (
                      <div key={cardIndex} className="relative flex flex-col justify-between">
                        <img className="w-full h-60 mb-2 rounded-lg object-cover" src={src} alt={`artikel${cardIndex + 1}`} />
                        <div className="absolute bottom-0 left-0 w-full bg-black opacity-50 p-4">
                          <strong className="text-5xl text-white block">17</strong>
                          <h4 className="text-xs text-white font-semibold mt-2">Feb 2024</h4>
                        </div>
                        <div className="absolute bottom-0 left-0 p-4">
                          <h3 className="text-[14px] font-semibold text-white">
                            Panduan Komprehensif <br />
                            untuk Memulai Peternak
                          </h3>
                          <p className="text-[12px] text-white">
                            Jika Anda adalah seorang pemula yang <br />
                            ingin memulai peternakan ikan, langkah <br />
                            langkah berikut ini.
                            <button>
                              <a href="#" className="text-sm text-[#F9841A] font-bold px-2">
                                Read More
                              </a>
                            </button>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </Slider>
          <div className="absolute bottom-0 flex justify-center items-center space-x-4">
            <PrevArrow onClick={() => settings.prevArrow.onClick()} />
            <span className="text-white">
              {currentPage}/{totalPages}
            </span>
            <NextArrow onClick={() => settings.nextArrow.onClick()} />
          </div>
        </section>
      </main>
    </>
  );
}
