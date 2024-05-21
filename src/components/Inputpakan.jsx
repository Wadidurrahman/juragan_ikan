import { useState } from "react";

export default function Inputpakan() {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const years = Array.from({ length: 50 }, (_, i) => 2000 + i);

  const [selectedDay, setSelectedDay] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  return (
    <>
      <main className="relative justify-center items-center px-40 py-36 ">
        <table className="table-auto bg-slate-200 w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-[#224D54] text-white ">
              <th className=" px-4 py-2">Type</th>
              <th className="border border-gray-300 px-4 py-2">Pemasukkan</th>
            </tr>
          </thead>
          <tbody>
            <tr className=" relative justify-center items-center">
              <td className="relative font-semibold px-4 py-4">Tanggal</td>
              <div className="flex gap-2">
                <div className=" flex flex-col mb-4">
                  <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="day">
                    Day
                  </label>
                  <select
                    id="day"
                    className="block appearance-none bg-white  border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    value={selectedDay}
                    onChange={(e) => setSelectedDay(e.target.value)}
                  >
                    <option value="">Select day</option>
                    {days.map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="month">
                    Month
                  </label>
                  <select
                    id="month"
                    className="block appearance-none bg-white border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                  >
                    <option value="" disabled>
                      Select month
                    </option>
                    {months.map((month, index) => (
                      <option key={index} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="year">
                    Year
                  </label>
                  <select
                    id="year"
                    className=" appearance-none bg-white  border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                  >
                    <option value="" disabled>
                      Select year
                    </option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </tr>
            <tr className="relative justify-center items-center">
              <td className="relative font-semibold px-4 py-4">Nama Pakan</td>
              <input className=" px-4 border border-gray-300 w-full rounded-md py-2" />
            </tr>
            <tr className="relative justify-center items-center">
              <td className="relative px-4  font-semibold py-4">Jenis Pakan</td>
              <input className=" px-4 border border-gray-300 w-full rounded-md py-2" />
            </tr>
            <tr className="relative justify-center items-center">
              <td className="relative px-4 font-semibold py-4">Jumlah</td>
              <input className=" px-4 border border-gray-300 w-full rounded-md py-2" />
            </tr>
            <tr className="relative justify-center items-center">
              <td className="relative px-4 font-semibold py-4">Harga </td>
              <input className=" px-4 border border-gray-300 w-full rounded-md py-2" />
            </tr>
          </tbody>
        </table>
        <div className="flex mt-2 gap-2">
          <bottom className=" relative left-[47rem] px-6 py-1.5 bg-[#d2d2d2] hover:bg-[#F9841A] rounded-lg cursor-pointer transition-all duration-300">Batal</bottom>
          <bottom className="relative left-[47rem] px-6 py-1.5  bg-[#d2d2d2] hover:bg-[#F9841A] rounded-lg transition-all duration-300 cursor-pointer">Simpan</bottom>
        </div>
      </main>
    </>
  );
}
