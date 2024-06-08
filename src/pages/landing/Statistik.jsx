import React, { useEffect, useRef } from "react";
import Bg from "../../assets/aset-bg/bg-statistik.png";
import Iconpengeluaran from "../../assets/icon/iconpengeluaran.png";
import Iconpemasukan from "../../assets/icon/iconpemasukan.png";
import Chart from "chart.js/auto";

export default function Statistik() {
  const chartPemasukanRef = useRef(null);
  const chartPengeluaranRef = useRef(null);

  useEffect(() => {
    let chartPemasukan;
    let chartPengeluaran;

    if (chartPemasukanRef.current) {
      const ctx = chartPemasukanRef.current.getContext("2d");
      if (chartPemasukan) {
        chartPemasukan.destroy();
      }
      chartPemasukan = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Ags", "Sep", "Okt", "Nov", "Des"],
          datasets: [
            {
              label: "Grafik Penjualan Kecil",
              backgroundColor: "#63ABFD",
              borderColor: "#165BAA",
              borderWidth: 2,
              borderRadius: 6,
              hoverBackgroundColor: "#165BAA",
              hoverBorderColor: "#63ABFD",
              data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 11) * 10),
            },
            {
              label: "Grafik Penjualan Besar",
              backgroundColor: "#E697FF",
              borderColor: "#A155B9",
              borderWidth: 2,
              borderRadius: 6,
              hoverBackgroundColor: "#A155B9",
              hoverBorderColor: "#E697FF",
              data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 11) * 10),
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              min: 0,
              max: 100,
              grid: {
                display: false,
              },
              ticks: {
                font: {
                  size: 14,
                },
              },
            },
            x: {
              grid: {
                display: false,
              },
              ticks: {
                font: {
                  size: 14,
                },
              },
            },
          },
          plugins: {
            legend: {
              display: true,
            },
          },
        },
      });
    }

    if (chartPengeluaranRef.current) {
      const ctx = chartPengeluaranRef.current.getContext("2d");
      if (chartPengeluaran) {
        chartPengeluaran.destroy();
      }
      chartPengeluaran = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Ags", "Sep", "Okt", "Nov", "Des"],
          datasets: [
            {
              label: "Grafik Penjualan Kecil",
              backgroundColor: "#63ABFD",
              borderColor: "#165BAA",
              borderWidth: 2,
              borderRadius: 6,
              hoverBackgroundColor: "#165BAA",
              hoverBorderColor: "#63ABFD",
              data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 11) * 10),
            },
            {
              label: "Grafik Penjualan Besar",
              backgroundColor: "#E697FF",
              borderColor: "#A155B9",
              borderWidth: 2,
              borderRadius: 6,
              hoverBackgroundColor: "#A155B9",
              hoverBorderColor: "#E697FF",
              data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 11) * 10),
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              min: 0,
              max: 100,
              grid: {
                display: false,
              },
              ticks: {
                font: {
                  size: 14,
                },
              },
            },
            x: {
              grid: {
                display: false,
              },
              ticks: {
                font: {
                  size: 14,
                },
              },
            },
          },
          plugins: {
            legend: {
              display: true,
            },
          },
        },
      });
    }

    return () => {
      if (chartPemasukan) {
        chartPemasukan.destroy();
      }
      if (chartPengeluaran) {
        chartPengeluaran.destroy();
      }
    };
  }, []);

  return (
    <main className="bg-[#ffffff] ">
      <section className="relative lg:h-screen lg:items-start">
        <img className="w-full sm:h-[20rem] lg:h-[25rem] object-cover" src={Bg} alt="background" />

        <h1 className="absolute font-bold text-5xl poppins text-white top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Statistik</h1>
        <div className="relative lg:justify-center lg:items-center lg:text-center lg:top-12 sm:items-center sm:text-center">
          <p className="text-center sm:text-center lg:w-3/4 xl:w-1/2 mx-auto py-8">
            Pencatatan yang cermat membantu peternak dalam mengambil
            <br /> keputusan tepat untuk meningkatkan produktivitas dan memastikan <br /> kesejahteraan ikan.
          </p>
        </div>
      </section>
      <div className="container flex flex-col lg:flex-row lg:justify-center lg:gap-10 py-8 sm:items-center ">
        <div className="flex flex-col w-full lg:w-[35%] rounded-lg py-4 shadow-lg mb-8 lg:mb-0 lg:mr-2">
          <h2 className="text-[#224D54] px-3 font-bold text-2xl">Grafik Penjualan Ikan</h2>
          <p className="text-xs font-semibold px-3 text-[#4F4F4F]">Total Penjualan</p>
          <hr className="relative w-[40vh] my-3 " />
          <canvas ref={chartPemasukanRef} className="w-full"></canvas>
        </div>

        <div className="flex flex-col w-full lg:w-[35%] rounded-lg py-4 shadow-lg">
          <h2 className="text-[#224D54] px-3 font-bold text-2xl">Grafik Pengeluaran Pakan</h2>
          <p className="text-xs font-semibold px-3 text-[#4F4F4F]">Total Pengeluaran</p>
          <hr className="relative w-[80vh] my-3" />
          <canvas ref={chartPengeluaranRef} className="w-full"></canvas>
        </div>
      </div>

      <section>
        <div className="relative flex flex-col lg:flex-row lg:justify-center lg:items-center py-20 lg:gap-10 ">
          <div className="flex justify-center items-center px-12 py-4 shadow-lg bg-white rounded-md lg:w-[37.5%] ">
            <div className="justify-center items-center">
              <h2 className="text-[#224D54] font-bold pb-10">
                Total <br />
                Pemasukan
              </h2>
              <button className="bg-[#224D54] hover:bg-slate-500 transition-all duration-300  text-white font-bold text-sm p-2 px-5 rounded-full">
                <a href="/Pencatatanikan">Rp.120.500.000</a>
              </button>
            </div>
            <img className="w-60 h-42 rounded-full" src={Iconpemasukan} alt="im-card" />
          </div>
          <div className="flex justify-center items-center px-12 py-4 shadow-lg bg-white rounded-md lg:w-[37.5%]">
            <div className="justify-center items-center">
              <h2 className="text-[#224D54] font-bold pb-10">
                Total <br />
                Pengeluaran
              </h2>
              <button className="bg-[#224D54] hover:bg-slate-500 transition-all duration-300  text-white font-bold text-sm p-2 px-5 rounded-full">
                <a href="/Pencatatanikan">Rp.40.350.000</a>
              </button>
            </div>
            <img className="w-60 h-42 rounded-full" src={Iconpengeluaran} alt="im-card" />
          </div>
        </div>
      </section>
    </main>
  );
}
