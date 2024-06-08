import React from "react";
import Discripsiimg from "../../assets/aset-img/imgelement.png";
import Imgside from "../../assets/aset-img/imgelement2.png";
import { HiCircleStack } from "react-icons/hi2";
import Imgprofil from "../../assets/aset-aboutus/imgteam2.jpg";

export default function Panduan() {
  return (
    <>
      <main className="flex flex-col items-center lg:items-start">
        <section className="relative items-center top-20 mb-20 py-20 px-4 lg:left-80 w-full lg:w-1/2">
          <h2 className="text-3xl font-bold lg:w-10/12">Panduan Komprehensif untuk Memulai Peternakan Ikan bagi Pemula</h2>
          <p className="text-sm font-semibold text-gray-500 mt-10">Langkah-Langkah Praktis</p>
          <div className="relative flex mt-8 gap-4 items-start">
            <img className="bg-gray-400 absolute rounded-full h-10 w-10 border-4 shadow-sm cursor-pointer" src={Imgprofil} alt="" />
            <div className="px-16  ">
              <p>By Putri Lutfiasari</p>
              <time>19 Maret, 2024</time>
            </div>
          </div>
          <div className="relative w-full lg:w-10/11 mt-5">
            <p>Jika Anda adalah seorang pemula yang ingin memulai peternakan ikan, langkah-langkah berikut ini akan membantu Anda memulai perjalanan Anda dengan baik:</p>
            <ul className="list-decimal pl-4 space-y-4">
              <li>
                <p className="my-5">Penelitian dan Perencanaan</p>
                <p>
                  Sebelum memulai peternakan ikan, lakukan penelitian mendalam tentang berbagai jenis ikan yang cocok untuk dipelihara di wilayah Anda. Pilih jenis ikan yang sesuai dengan kondisi air dan lingkungan tempat Anda tinggal.
                  Selain itu, buatlah perencanaan bisnis yang jelas, termasuk estimasi biaya awal, proyeksi pendapatan, dan strategi pemasaran.
                </p>
              </li>
              <li>
                <p className="my-5">Pilih Lokasi yang Tepat</p>
                <p>Pilihlah lokasi yang cocok untuk peternakan ikan Anda. Pastikan lokasi tersebut memiliki akses mudah ke air bersih, serta memiliki infrastruktur yang memadai seperti sumber listrik dan sistem drainase yang baik.</p>
              </li>
              <li>
                <p className="my-5">Bangun Struktur dan Akuarium</p>
                <p>
                  Bangunlah struktur atau kolam yang sesuai dengan jenis ikan yang Anda pilih. Pastikan kolam atau akuarium tersebut memenuhi persyaratan yang diperlukan untuk pertumbuhan dan perkembangan ikan, termasuk suhu air, pH, dan
                  ketersediaan oksigen yang cukup.
                </p>
              </li>
              <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10">
                <img className="w-full lg:w-auto object-cover mt-5 lg:mt-0" src={Discripsiimg} alt="discripsi-img" />
                <div className="px-0 lg:px-10 mt-5 lg:mt-0">
                  <hr className="border-1 border-[#F9841A]" />
                  <p className="text-sm text-gray-400 mt-4">Ilustrasi Ikan Lele Jenis Ikan Air Tawar yang Populer dan Berkhasiat (Freepik.com/poringdown)</p>
                </div>
              </div>
              <div>
                <ul></ul>
              </div>
              <li>
                <p className="my-5"> Persiapan Lingkungan</p>
                <p>Pastikan lingkungan di sekitar kolam atau akuarium bersih dan aman bagi ikan. Bersihkan area sekitar dari sampah atau material berbahaya yang dapat mencemari air.</p>
              </li>
              <li>
                <p className="my-5"> Peroleh Benih Ikan Berkualitas</p>
                <p>Dapatkan benih ikan dari sumber yang terpercaya dan berkualitas. Pastikan benih ikan yang Anda beli sehat dan bebas dari penyakit.</p>
              </li>
              <li>
                <p className="my-5"> Jumlah Ikan dalam Isi Kolam Tiap Jenis</p>
                <p>
                  Tentukan jumlah ikan yang tepat untuk dipelihara dalam isi kolam, sesuai dengan kebutuhan spesies ikan tersebut dan kapasitas kolam atau akuarium. Hindari overstocking, yang dapat mengakibatkan stres pada ikan dan masalah
                  kualitas air.
                </p>
              </li>
              <li>
                <p className="my-5"> Pemeliharaan Harian</p>
                <p>
                  Lakukan pemeliharaan harian, termasuk pemberian pakan yang cukup, pemantauan kondisi air, dan pembersihan akuarium atau kolam secara teratur. Perhatikan tanda-tanda penyakit atau masalah kesehatan pada ikan dan tangani
                  dengan cepat jika diperlukan.
                </p>
              </li>
              <li>
                <p className="my-5"> . Manajemen Pemeliharaan</p>
                <p>Kelola pemeliharaan ikan dengan baik, termasuk pengelolaan pakan, pengendalian kualitas air, dan pencegahan penyakit. Buat jadwal rutin untuk melakukan pemeriksaan dan perawatan agar ikan tetap sehat dan produktif.</p>
              </li>
              <li>
                <p className="my-5"> Monitor Kinerja dan Evaluasi</p>
                <p>Lakukan pemantauan terhadap kinerja peternakan ikan Anda secara teratur. Evaluasi hasil produksi, biaya operasional, dan efisiensi operasional untuk memastikan kelangsungan dan keberhasilan bisnis Anda.</p>
              </li>
              <li>
                <p className="my-5"> Jangan Takut untuk Belajar </p>
                <p>Teruslah belajar dan terbuka terhadap pengetahuan baru dalam bidang peternakan ikan. Ikuti pelatihan, seminar, atau bergabung dengan komunitas peternak ikan untuk bertukar informasi dan pengalaman. </p>
              </li>
            </ul>
            <p className="my-5">
              Dengan mengikuti panduan ini dan melakukan pendekatan yang hati-hati serta teliti, Anda akan dapat memulai peternakan ikan Anda sendiri dengan sukses. Semoga peternakan ikan Anda berkembang dan memberikan hasil yang memuaskan!
            </p>
          </div>
        </section>
        <section className="w-full px-4 mt-10 lg:absolute lg:top-[96rem] lg:px-4">
          <hr className="border-1 w-72 border-[#F9841A] mx-auto lg:mx-0" />
          <img className="object-cover mt-5 rounded-lg w-full lg:w-auto" src={Imgside} alt="" />
          <p className="text-sm text-gray-400 mt-4 lg:w-1/2 mx-auto lg:mx-0">Ilustrasi Ikan Lele Jenis Ikan Air Tawar yang Populer dan Berkhasiat (Freepik.com/poringdown)</p>
        </section>
      </main>
    </>
  );
}
