import React, { useState } from "react";
import Header from "../../components/header/Header";
import { IoIosAdd } from "react-icons/io";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Footer from "../../components/header/Footer";

export default function Pencatatanikan() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <>
      <Header />
      <main>
        <div className="relative p-40 h-full grid grid-cols-2">
          <div className="relative right-28 mt-3">
            <h2 className="relative font-bold text-[25px] py-0">Pencatatan Data Ikan</h2>
          </div>
          <div className="relative flex flex-col items-start left-80 mt-3">
            <h3 className="text-gray-500 ">Total</h3>
            <output className="font-bold text-xl" id="Total-ikan">
              15.000
            </output>
            <p className="text-gray-500">Jumlah ikan keseluruhan</p>
          </div>
        </div>
        <div>
          <div className="relative flex items-center gap-2 p-2 -m-36 px-44">
            {/* Search Input */}
            <input type="text" placeholder="Search..." className="border rounded-lg p-2 focus:outline-none focus:ring focus:border-blue-300" />

            {/* DatePicker */}
            <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} className="border rounded-lg p-2 focus:outline-none focus:ring focus:border-green-800" placeholderText="Pilih Tanggal" />

            {/* Add Icon */}
            <div className="relative left-[40rem]">
              <button className=" items-center justify-center p-2 bg-[#F9841A] text-white rounded-lg hover:bg-gray-300 focus:outline-none focus:ring focus:border-orange-600 transition-all duration-300">
                <IoIosAdd size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="relative mt-40 p-8">
          <div class="relative shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-white uppercase bg-[#224D54] dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    No.
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Tanggal
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Nama kolam
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Jenis Ikan
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Jumlah Ikan
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4">1.</td>

                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                  </th>
                  <td class="px-6 py-4">Silver</td>
                  <td class="px-6 py-4">Laptop</td>
                  <td class="px-6 py-4">$2999</td>
                  <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      Edit
                    </a>
                  </td>
                </tr>
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4">2.</td>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                  </th>
                  <td class="px-6 py-4">White</td>
                  <td class="px-6 py-4">Laptop PC</td>
                  <td class="px-6 py-4">$1999</td>
                  <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      Edit
                    </a>
                  </td>
                </tr>
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4">3.</td>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                  </th>
                  <td class="px-6 py-4">Black</td>
                  <td class="px-6 py-4">Accessories</td>
                  <td class="px-6 py-4">$99</td>
                  <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      Edit
                    </a>
                  </td>
                </tr>
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-6 py-4">4.</td>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Google Pixel Phone
                  </th>
                  <td class="px-6 py-4">Gray</td>
                  <td class="px-6 py-4">Phone</td>
                  <td class="px-6 py-4">$799</td>
                  <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      Edit
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4">5.</td>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple Watch 5
                  </th>
                  <td class="px-6 py-4">Red</td>
                  <td class="px-6 py-4">Wearables</td>
                  <td class="px-6 py-4">$999</td>
                  <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      Edit
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div></div>
      </main>
      <Footer />
    </>
  );
}
