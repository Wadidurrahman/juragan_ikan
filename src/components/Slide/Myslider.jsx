import React from "react";
import Slider from "react-slick";
import Card from "./Card";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../../assets/imgslide/img1.png";
import Img2 from "../../assets/imgslide/img2.jpg";
import Img3 from "../../assets/imgslide/img3.jpg";
import Img4 from "../../assets/imgslide/img4.png";
import Img5 from "../../assets/imgslide/img5.png";
import Img6 from "../../assets/imgslide/img6.png";

const Data = [
  { img: Img1, title: "Panduan Komprehensif untuk Memuali Peternak ", number: "17", description: "Jika Anda adalah seorang pemula yang ingin memulai peternakan ikan, langkah-langkah berikut ini. " },
  { img: Img2, title: "Panduan Komprehensif untuk Memuali Peternak ", number: "19", description: "Konsumsi ikan secara teratur telah terkait dengan penurunan risiko penyakit jantung. " },
  { img: Img3, title: "Mengenal Teknik Pembenihan Ikan Air Tawar", number: "24", description: "Pembenihan ikan air tawar adalah proses penting dalam pengembangan budidaya ikan. " },
  { img: Img4, title: "Panduan Jumlah Ikan Air Tawar yang Ideal", number: "28", description: "Memilih jumlah ikan yang tepat untuk kolam air tawar Anda adalah langkah penting." },
  { img: Img5, title: "5 Cara Budidaya Ikan Air Tawar", number: "17", description: "Terdapat berbagai jenis metode budidaya ikan air tawar yang dapat Anda pilih. Di sini." },
  { img: Img6, title: "Menjelajahi Dunia Peternakan Ikan", number: "18", description: "Menyelam ke dunia peternakan ikan membuka peluang untuk menghasilkan protein." },
];

const Myslider = () => {
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
    <div className="slider-container">
      <div>{PrevArrow}</div>
      <Slider {...settings}>
        {Data.map((el, index) => (
          <Card key={index} img={el.img} title={el.title} number={el.number} description={el.description} />
        ))}
      </Slider>
      <div>{NextArrow}</div>
    </div>
  );
};

export default Myslider;
