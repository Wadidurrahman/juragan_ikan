import { useState } from "react";

export default function Inputpakan({ closePopup }) {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const years = Array.from({ length: 50 }, (_, i) => 2000 + i);

  const [selectedDay, setSelectedDay] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  return (
    <>
      <main className="relative  border-2 border-white rounded-lg bg-slate-200 top-[-18.5rem] left-[45rem]">
        <div className="">
          <table className="table-auto bg-slate-200 w-full border-collapse rounded-xl">
            <thead>
              <tr className="text-xs text-white uppercase bg-[#224D54] dark:bg-gray-700 dark:text-gray-400 rounded-xl">
                <th className="px-6 py-3 border-r border-white rounded-tl-xl">Type</th>
                <th className="px-6 py-3 rounded-tr-xl border-white">Pemasukkan</th>
              </tr>
            </thead>

            <tbody>
              <tr className="relative justify-center items-center">
                <td className="relative font-semibold px-4 py-4 border border-white">Tanggal</td>
                <td className="relative flex gap-2 border border-white">
                  <div className="flex flex-col mb-2 mt-2">
                    <select value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)} className="border p-1 rounded-lg">
                      <option value="" disabled>
                        Pilih Tanggal
                      </option>
                      {days.map((day) => (
                        <option key={day} value={day}>
                          {day}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col mb-4 mt-2">
                    <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} className="border p-1 rounded-lg">
                      <option value="" disabled>
                        Pilih Bulan
                      </option>
                      {months.map((month) => (
                        <option key={month} value={month}>
                          {month}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col mb-4 mt-2">
                    <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} className="border p-1 rounded-lg">
                      <option value="" disabled>
                        Pilih Tahun
                      </option>
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-2 py-2 font-semibold border border-white">Nama Pakan</td>
                <td className="px-1 py-2 border border-white">
                  <input className="w-full border p-1 rounded-lg" type="text" placeholder="Masukkan Nama Pakan" />
                </td>
              </tr>
              <tr>
                <td className="px-2 py-2 font-semibold border border-white">Jenis Pakan</td>
                <td className="px-1 py-2 border border-white">
                  <input className="w-full border p-1 rounded-lg" type="number" placeholder="Masukkan Jenis Pakan" />
                </td>
              </tr>
              <tr>
                <td className="px-2 py-2 font-semibold border border-white">Jumlah</td>
                <td className="px-1 py-2 border border-white">
                  <input className="w-full border p-1 rounded-lg" type="number" placeholder="Sak/Kg" />
                </td>
              </tr>
              <tr>
                <td className="px-2 py-2 font-semibold border border-white">Harga Pakan</td>
                <td className="px-1 py-2 border border-white">
                  <input className="w-full border p-1 rounded-lg" type="number" placeholder="Rp." />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="relative px-2  p-1 flex justify-end gap-2">
            <button onClick={closePopup} className="px-4 py-1 hover:bg-[#7e7e7e] bg-[#9B9B9B] transition-all duration-300 rounded-lg text-white">
              Batal
            </button>
            <button className="px-4 py-1 bg-[#F9841A] hover:bg-[#d56802] text-white transition-all duration-300 rounded-lg">Simpan</button>
          </div>
        </div>
      </main>
    </>
  );
}
