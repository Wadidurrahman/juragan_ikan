import React from "react";
import Bgsampul from "../../assets/aset-artikel/bg-artikel.png";
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
import Myslider from "../../components/Slide/Myslider";

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
        <div>
          <Myslider />
        </div>
      </main>
    </>
  );
}
