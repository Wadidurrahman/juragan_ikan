import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdPlayArrow } from "react-icons/md";
import { BiSolidRightArrow } from "react-icons/bi";
import { BiSolidLeftArrow } from "react-icons/bi";
import { RiArrowDownSLine } from "react-icons/ri";

export default function Pencatatanikan() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [slideNumber, setSlideNumber] = useState(1);

  const handlePrevious = () => {
    if (slideNumber > 1) {
      setSlideNumber(slideNumber - 1);
    }
  };

  const handleNext = () => {
    setSlideNumber(slideNumber + 1);
  };

  return (
    <>
      <main>
        <div className="p-40 h-full grid grid-cols-2">
          <div className="mt-3">
            <h2 className="relative font-bold text-3xl right-28">Pencatatan Data Penjualan</h2>
          </div>
          <div className="relative flex flex-col items-start mt-5 left-28" style={{ direction: "rtl" }}>
            <h3 className="text-gray-500 text-lg">Total</h3>
            <output className="font-bold text-3xl">15.000</output>
            <p className="text-gray-500 text-lg mb-4">Jumlah ikan keseluruhan</p>
          </div>
        </div>
        <div className="flex items-center gap-2 p-2 -m-36 px-44">
          {/* DatePicker */}

          <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} className="border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 p-2" placeholderText="Pilih Tanggal" />

          {/* Add Icon */}
          <div className="px-[59rem]">
            <a href="Inputikan">
              <button className="p-2 bg-[#F9841A] text-white rounded-lg hover:bg-gray-300 focus:outline-none focus:ring focus:border-orange-600 transition-all duration-300">
                <IoIosAdd size={20} />
              </button>
            </a>
          </div>
        </div>
        <div className="mt-40 p-8">
          <div className="shadow-md rounded-xl">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-xl">
              <thead className="text-xs text-white uppercase bg-[#224D54] dark:bg-gray-700 dark:text-gray-400 rounded-tl-xl">
                <tr>
                  <th scope="col" className="px-6 py-3 border-r rounded-tl-xl">
                    No.
                  </th>
                  <th scope="col" className="px-6 py-3 border-r">
                    Tanggal
                  </th>
                  <th scope="col" className="px-6 py-3 border-r">
                    Nama Kolam
                  </th>
                  <th scope="col" className="px-6 py-3 border-r">
                    Jumlah Ikan
                  </th>
                  <th scope="col" className="px-6 py-3 border-r">
                    Harga per Kilo
                  </th>
                  <th scope="col" className="px-6 py-3 border-r">
                    Total Harga
                  </th>
                  <th scope="col" className="px-6 py-3 rounded-tr-xl">
                    Edit
                  </th>
                </tr>
              </thead>

              <tbody>
                {/* Data ikan */}
                <tr>
                  <td className="px-6 py-4 border-r">1.</td>
                  {/* Data lainnya */}
                </tr>
                {/* Tambahkan baris sesuai kebutuhan */}
                {[...Array(5)].map((_, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-200" : "bg-white"}>
                    <td className="px-6 py-4">{index + 1}.</td>
                    <td className="px-6 py-4" colSpan="6"></td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Tombol slide */}
            <div className="flex justify-end items-center mt-4 bg-[#224D54] p-2 rounded-lg">
              <button className="flex">
                <BiSolidLeftArrow size={15} className="relative mt-1.5 text-white right-2" />
                <button onClick={handlePrevious} className="text-white mr-10">
                  Sebelumnya
                </button>
              </button>

              <div className="text-black bg-white px-1 mr-2">{slideNumber}</div>
              <button className="flex">
                <BiSolidRightArrow size={15} className="relative mt-1.5 text-white left-28" />
                <button onClick={handleNext} className="text-white mr-10">
                  Selanjutnya
                </button>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
