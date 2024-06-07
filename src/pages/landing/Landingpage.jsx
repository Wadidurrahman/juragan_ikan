import React from "react";
import Slider from "react-slick";
import BackgroundUtama from "../../assets/aset-landingpage/Background.png";
import Imgside from "../../assets/aset-landingpage/img-aset.png";
import Imgartikel2 from "../../assets/aset-landingpage/img-artikel2.jpg";
import Imgartikel3 from "../../assets/aset-landingpage/img-artikel3.jpg";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Myslider from "../../components/Slide/Myslider";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button className="absolute right-10 top-[26rem] z-10 cursor-pointer" onClick={onClick} aria-label="Next Slide">
      <MdArrowForwardIos className="text-4xl bg-[#F9841A] text-white px-1 py-2" />
    </button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button className="absolute left-14 top-[26rem] z-10 cursor-pointer" onClick={onClick} aria-label="Previous Slide">
      <MdArrowBackIos className="text-4xl bg-[#F9841A] text-white px-1 py-2" />
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
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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

  return (
    <main>
      <div className="relative w-full h-screen">
        <img className="object-cover w-full h-full" src={BackgroundUtama} alt="Background" />
        <div className="relative top-[-32rem] items-center px-12">
          <h1 className="text-7xl font-extrabold text-[#224D54]">
            Juragan
            <br />
            <span className="text-7xl font-extrabold text-[#F9841A]">Ikan</span>
          </h1>
          <p className="mt-4">
            "Juragan Ikan" hadir sebagai solusi manajemen peternakan ikan yang
            <br /> komprehensif untuk membantu peternak mencapai hasil yang optimal
            <br /> dan memastikan kesejahteraan ikan.
          </p>
          <div className="relative top-5">
            <a>
              <buttom
                className="btn bg-[#224D54] text-white px-5 py-3 rounded-full cursor-pointer hover:bg-white hover:text-[#224D54] transition-all duration-400"
                onClick={() => {
                  window.location.href = "login";
                }}
              >
                Mulai Sekarang
              </buttom>
            </a>
          </div>
        </div>
      </div>
      <article>
        <div className="flex py-36 p-16">
          <img className="h-80 rounded-lg object-cover" src={Imgside} alt="Gambar Samping" />
          <div className="relative px-16 py-10">
            <h4 className="text-2xl mb-5 font-semibold">{Discripsi2.judul}</h4>
            <p>{Discripsi2.isi}</p>
          </div>
        </div>
        <div className="relative px-28 text-center">
          <div>
            <h1 className="text-2xl mb-5 font-semibold">{Discripsi.judul}</h1>
            <p className="mb-5">{Discripsi.isi}</p>
            <p className="mb-5">{Discripsi.isi1}</p>
            <p>{Discripsi.isi2}</p>
          </div>
        </div>
        <div>
          <div className="text-center py-20">
            <h1 className="font-semibold text-2xl mb-5">Artikel</h1>
            <p>
              Artikel budidaya ternak ikan tawar ini dapat membantu anda <br />
              untuk budidaya ikan tawar.
            </p>
          </div>
          <Myslider />
        </div>
      </article>
    </main>
  );
}
