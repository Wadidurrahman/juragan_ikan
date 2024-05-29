import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdPlayArrow } from "react-icons/md";
import { BiSolidRightArrow } from "react-icons/bi";
import { BiSolidLeftArrow } from "react-icons/bi";
import { RiArrowDownSLine } from "react-icons/ri";
import Inputpakan from "../../components/Inputpakan";

export default function Pencatatanpakan() {
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
        <div className="p-40 h-full grid grid-cols-2">
          <div className="mt-3">
            <h2 className="relative font-bold text-3xl right-28">Pencatatan Data Pakan</h2>
          </div>
          <div className="relative flex flex-col items-start mt-5 left-28" style={{ direction: "rtl" }}>
            <h3 className="text-gray-500 text-lg">Total</h3>
            <output className="font-bold text-3xl">15.000</output>
            <p className="text-gray-500 text-lg mb-4">Jumlah ikan keseluruhan</p>
          </div>
        </div>
        <div className="flex items-center gap-2 p-2 -m-36 px-44">
          <div className="relative">
            <select
              onChange={(e) => {
                const newDate = selectedDate ? new Date(selectedDate) : new Date();
                newDate.setMonth(months.indexOf(e.target.value));
                setSelectedDate(newDate);
              }}
              className="appearance-none border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 p-2"
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
            <RiArrowDownSLine className="absolute left-24 mt-1 top-3 pointer-events-none" />
          </div>
          <div className="relative px-5">
            <select
              onChange={(e) => {
                const newDate = selectedDate ? new Date(selectedDate) : new Date();
                newDate.setFullYear(e.target.value);
                setSelectedDate(newDate);
              }}
              className="appearance-none border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 p-2"
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
            <RiArrowDownSLine className="absolute left-28 mt-1 top-3 pointer-events-none " />
          </div>
          <div className="relative px-[57rem]">
            <div className="relative">
              <button onClick={openPopup} className="p-2 bg-[#F9841A] text-white rounded-lg hover:bg-gray-300 focus:outline-none focus:ring focus:border-orange-600 transition-all duration-300">
                <IoIosAdd size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-40 p-8">
          <div className="shadow-md rounded-xl">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-xl">
              <thead className="text-xs text-white uppercase bg-[#224D54] dark:bg-gray-700 dark:text-gray-400 rounded-tl-xl mx-auto">
                <tr>
                  <th scope="col" className="px-6 py-3 border-r rounded-tl-xl">
                    No.
                  </th>
                  <th scope="col" className="px-6 py-3 border-r">
                    Tanggal
                  </th>
                  <th scope="col" className="px-6 py-3 border-r">
                    Nama Pakan
                  </th>
                  <th scope="col" className="px-6 py-3 border-r">
                    Jenis Pakan
                  </th>
                  <th scope="col" className="px-6 py-3 border-r">
                    Jumlah/Berat Pakan
                  </th>
                  <th scope="col" className="px-6 py-3 border-r">
                    Harga Pakan
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
            <Inputpakan closePopup={closePopup} />
          </div>
        </div>
      )}
    </>
  );
}
