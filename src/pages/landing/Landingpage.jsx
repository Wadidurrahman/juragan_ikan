import React, { useEffect } from "react";
import Slider from "react-slick";
import BackgroundUtama from "../../assets/aset-landingpage/Background.png";
import Imgside from "../../assets/aset-landingpage/img-aset.png";
import Imgartikel2 from "../../assets/aset-landingpage/img-artikel2.jpg";
import Imgartikel3 from "../../assets/aset-landingpage/img-artikel3.jpg";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Myslider from "../../components/Slide/Myslider";
import "aos/dist/aos.css";
import AOS from "aos";
import Header from "../../components/header/Header";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button className="absolute right-2 md:right-10 top-[20rem] md:top-[26rem] z-10 cursor-pointer" onClick={onClick} aria-label="Next Slide">
      <MdArrowForwardIos className="text-2xl md:text-4xl bg-[#F9841A] text-white px-1 py-2" />
    </button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button className="absolute left-2 md:left-14 top-[20rem] md:top-[26rem] z-10 cursor-pointer" onClick={onClick} aria-label="Previous Slide">
      <MdArrowBackIos className="text-2xl md:text-4xl bg-[#F9841A] text-white px-1 py-2" />
    </button>
  );
}

export default function Landingpage() {
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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const Judul = {
    judul: ["Juragan", "Ikan"],
    Discripsi: ["Juragan Ikan hadir sebagai solusi manajemen peternakan ikan yang komprehensif untuk membantu peternak mencapai hasil yang optimal dan memastikan kesejahteraan ikan"],
  };

  const Discripsi = {
    judul: "Kisah Kami",
    isi: "Berawal dari tekad dan impian untuk memberdayakan para peternak ikan, Juragan Ikan hadir sebagai solusi inovatif dalam pengelolaan pencatatan peternakan. Kami memahami bahwa salah satu tantangan utama yang dihadapi banyak peternak ikan adalah kurangnya sistem pencatatan yang efektif. Penggunaan metode pencatatan manual yang masih banyak dilakukan seringkali tidak efisien dan rentan terhadap kesalahan. Hal ini dapat menghambat pelacakan kinerja peternakan, pengambilan keputusan yang tepat, dan peningkatan produktivitas.",
    isi1: "Didorong oleh keyakinan bahwa setiap orang berhak mengelola usahanya dengan mudah dan efisien, bebas dari stres dan kebingungan, Juragan Ikan hadir untuk membantu mewujudkan impian tersebut. Platform kami menyediakan alat yang diperlukan untuk mencapai kemandirian dan stabilitas keuangan yang lebih baik bagi para peternak ikan.",
    isi2: "Web Pencatatan Juragan Ikan dirancang khusus untuk membantu peternak ikan mengelola dan memantau kegiatan peternakan mereka dengan lebih efektif.",
  };

  const Discripsi2 = {
    judul: "Sudahkah kamu mencatat data peternakan ikan anda?",
    isi: "Mulailah peternakan ikan Anda dengan langkah tepat bersama Juragan Ikan. Temukan panduan dan dukungan yang Anda butuhkan untuk memulai dan mengembangkan usaha Anda. Bergabunglah dengan komunitas kami hari ini dan mulailah perjalanan Anda menuju sukses dalam budidaya ikan.",
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <main>
        <Header noBackground={true} />
        <div className="relative w-full h-screen">
          <img className="object-cover w-full h-full" src={BackgroundUtama} alt="Background" />
          <div className="absolute inset-0 flex flex-col items-center justify-center md:items-end md:justify-center md:pr-16 px-4 md:px-12 text-center md:text-left lg:right-[34rem]">
            <div className="max-w-lg md:mr-10" data-aos="fade-right" data-aos-duration="1000">
              <h1 className="text-4xl md:text-7xl font-extrabold text-[#224D54] leading-tight md:leading-none">
                <span className="block md:inline">{Judul.judul[0]}</span>
                <br className="hidden md:block" />
                <span className="block md:inline text-[#F9841A]">{Judul.judul[1]}</span>
              </h1>
              <p className="mt-4 text-base md:text-lg" data-aos="fade-up-right" data-aos-duration="1000">
                {Judul.Discripsi}
              </p>
              <div className="relative top-5">
                <button
                  className="bg-[#224D54] text-white px-5 py-3 rounded-full cursor-pointer hover:bg-white hover:text-[#224D54] transition-all duration-400"
                  onClick={() => {
                    window.location.href = "login";
                  }}
                  data-aos="zoom-in-up"
                  data-aos-duration="1000"
                >
                  Mulai Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>

        <article>
          <div className="flex flex-col md:flex-row py-10 md:py-36 px-8 md:px-16">
            <img className="h-80 rounded-lg object-cover mb-8 md:mb-0" data-aos="flip-left" data-aos-duration="3000" src={Imgside} alt="Gambar Samping" />
            <div className="md:relative px-0 md:px-16 py-10">
              <h4 className="text-xl md:text-2xl mb-5 font-semibold" data-aos="fade-left" data-aos-duration="500">
                {Discripsi2.judul}
              </h4>
              <p className="text-base md:text-lg" data-aos="fade-up" data-aos-duration="3000">
                {Discripsi2.isi}
              </p>
            </div>
          </div>
          <div className="relative px-8 md:px-28 text-center">
            <div>
              <h1 className="text-xl md:text-2xl mb-5 font-semibold" data-aos="fade-up" data-aos-duration="3000">
                {Discripsi.judul}
              </h1>
              <p className="mb-5 text-base md:text-lg" data-aos="fade-up-right" data-aos-duration="3000">
                {Discripsi.isi}
              </p>
              <p className="mb-5 text-base md:text-lg" data-aos="fade-left" data-aos-duration="3000">
                {Discripsi.isi1}
              </p>
              <p className="text-base md:text-lg" data-aos="fade-up" data-aos-duration="3000">
                {Discripsi.isi2}
              </p>
            </div>
          </div>
          <div>
            <div className="text-center py-10 md:py-20" data-aos="fade-up" data-aos-duration="3000" s>
              <h1 className="font-semibold text-xl md:text-2xl mb-5">Artikel</h1>
              <p className="text-base md:text-lg">
                Artikel budidaya ternak ikan tawar ini dapat membantu anda <br className="hidden md:block" />
                untuk budidaya ikan tawar.
              </p>
            </div>
            <Myslider settings={settings} />
          </div>
        </article>
      </main>
    </>
  );
}
