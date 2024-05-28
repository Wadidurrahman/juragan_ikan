import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import Tabel1 from "../../components/aset-faq/Tabel1";
import Tabel2 from "../../components/aset-faq/Tabel2";
import Tabel3 from "../../components/aset-faq/Tabel3";
import Tabel4 from "../../components/aset-faq/Tabel4";
import Tabel5 from "../../components/aset-faq/Tabel5";
import Tabel6 from "../../components/aset-faq/Tabel6";
import Tabel7 from "../../components/aset-faq/Tabel7";

export default function Faq() {
  const [dropdownOpen, setDropdownOpen] = useState(Array(7).fill(false));

  const toggleDropdown = (index) => {
    setDropdownOpen((prevState) => prevState.map((isOpen, i) => (i === index ? !isOpen : isOpen)));
  };

  // Data untuk setiap dropdown
  const faqData = [
    { title: "Apa Itu Juragan Ikan ?", content: <Tabel1 /> },
    { title: "Apa manfaat utama menggunakan website ini ?", content: <Tabel2 /> },
    { title: "Apa saja fitur yang biasanya ada dalam website manajemen pengelolaan data ternak ikan ? ", content: <Tabel3 /> },
    { title: "Bagaimana cara menggunakan website ini ?", content: <Tabel4 /> },
    { title: "Apakah website ini aman diguanakan ?", content: <Tabel5 /> },
    { title: "Apakah ada biaya yang harus dikeluarkan untuk menggunakan website ini ?", content: <Tabel6 /> },
    { title: "Bagaimana jika saya mengalami kesulitan atau meiliki pertanyaan tentang penggunaan website ini ?", content: <Tabel7 /> },
  ];

  return (
    <>
      <main>
        <div className="relative justify-center items-center p-32 left-96">
          <h1 className="text-xl font-bold">Frequently Asked Questions</h1>
        </div>
        <div className="relative mb-5">
          {faqData.map((item, index) => (
            <div key={index} className="relative w-[52rem] border-2 border-[#224D54] rounded-lg p-2 left-[14rem] mb-5">
              <div className="relative gap-1 justify-between items-center">
                <div className="flex items-center">
                  <h4 className="text-sm py-2 px-2">{item.title}</h4>
                  <button onClick={() => toggleDropdown(index)} className="ml-auto">
                    {dropdownOpen[index] ? <IoIosArrowDown size={20} className="fill-[#224D54]" /> : <IoIosArrowForward size={20} className="fill-[#224D54]" />}
                  </button>
                </div>
                {dropdownOpen[index] && (
                  <div className="relative mt-5 bg-[#E3E4E8] border rounded-lg shadow-lg">
                    <div className="p-4">{item.content}</div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
