import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdPlayArrow } from "react-icons/md";
import { BiSolidRightArrow } from "react-icons/bi";
import { BiSolidLeftArrow } from "react-icons/bi";
import { RiArrowDownSLine } from "react-icons/ri";
import Inputikan from "../../components/Inputikan";

export default function Pencatatanikan() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [slideNumber, setSlideNumber] = useState(1);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePrevious = () => {
    if (slideNumber > 1) {
      setSlideNumber(slideNumber - 1);
    }
  };

  const handleNext = () => {
    setSlideNumber(slideNumber + 1);
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

  const years = Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i);

  return (
    <>
      <main>
        <div className="p-5 md:p-10 lg:py-20 h-full grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="mt-10 py-10">
            <h2 className="font-bold text-2xl md:text-3xl text-center md:text-left ">Pencatatan Data Ikan</h2>
          </div>
          <div className="mt-20 flex flex-col items-center md:items-end text-center md:text-left">
            <h3 className="text-gray-500 text-lg">Total</h3>
            <output className="font-bold text-2xl md:text-3xl">15.000</output>
            <p className="text-gray-500 text-lg mb-4">Jumlah ikan keseluruhan</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-2 p-2 md:px-20 lg:py-14 -mt-10 md:-mt-20 lg:-mt-36">
          <div className="relative w-full md:w-auto">
            <select
              onChange={(e) => {
                const newDate = selectedDate ? new Date(selectedDate) : new Date();
                newDate.setMonth(months.indexOf(e.target.value));
                setSelectedDate(newDate);
              }}
              className="appearance-none border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 p-2 w-full md:w-auto"
              value={selectedDate ? months[selectedDate.getMonth()] : ""}
            >
              <option value="" disabled>
                Pilih Bulan
              </option>
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
            <RiArrowDownSLine className="absolute right-2 md:right-0 top-3 pointer-events-none" />
          </div>
          <div className="relative w-full md:w-auto px-0 md:px-5">
            <select
              onChange={(e) => {
                const newDate = selectedDate ? new Date(selectedDate) : new Date();
                newDate.setFullYear(e.target.value);
                setSelectedDate(newDate);
              }}
              className="appearance-none border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 p-2 w-full md:w-auto"
              value={selectedDate ? selectedDate.getFullYear() : ""}
            >
              <option value="" disabled>
                Pilih Tahun
              </option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <RiArrowDownSLine className="absolute right-2 md:right-0 top-3 pointer-events-none" />
          </div>
          <div className="flex justify-end md:justify-start w-full md:w-auto mt-2 md:mt-0 lg:px-[50rem]">
            <button onClick={openPopup} className="p-2 bg-[#F9841A] text-white rounded-lg hover:bg-gray-300 focus:outline-none focus:ring focus:border-orange-600 transition-all duration-300">
              <IoIosAdd size={20} />
            </button>
          </div>
        </div>
        <div className="mt-10 p-8">
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
                    Jenis Ikan
                  </th>
                  <th scope="col" className="px-6 py-3 border-r">
                    Jumlah Ikan
                  </th>
                  <th scope="col" className="px-6 py-3 border-r">
                    Kondisi Ikan
                  </th>
                  <th scope="col" className="px-6 py-3 rounded-tr-xl">
                    Edit
                  </th>
                </tr>
              </thead>
              <tbody>
                {[...Array(5)].map((_, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-200" : "bg-white"}>
                    <td className="px-6 py-4">{index + 1}.</td>
                    <td className="px-6 py-4" colSpan="6"></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-end items-center mt-4 bg-[#224D54] p-2 rounded-lg">
              <button onClick={handlePrevious} className="flex items-center text-white">
                <BiSolidLeftArrow size={15} className="mr-2 mt-1" />
                Sebelumnya
              </button>
              <div className="text-black bg-white px-2 mx-2 rounded">{slideNumber}</div>
              <button onClick={handleNext} className="flex items-center text-white">
                Selanjutnya
                <BiSolidRightArrow size={15} className="ml-2 mt-1" />
              </button>
            </div>
          </div>
        </div>
      </main>
      {isPopupOpen && (
        <div className="absolute top-full mt-1 left-0">
          <div className="p-8 rounded-lg z-10 sticky top-0">
            <button onClick={closePopup}></button>
            <Inputikan closePopup={closePopup} />
          </div>
        </div>
      )}
    </>
  );
}
