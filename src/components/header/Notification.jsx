import React from "react";
import { RxCross2 } from "react-icons/rx";
import { BsCircleFill } from "react-icons/bs";

const Notification = ({ message, show, onClose }) => {
  const handleFileChange = (e) => {
    onClose();
  };

  const getTimeDescription = () => {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const currentMonth = currentDate.getMonth();

    let timeDescription = "";
    switch (currentDay) {
      case 0:
        timeDescription = "minggu ini";
        break;
      case 1:
        timeDescription = "hari ini";
        break;
      default:
        timeDescription = "bulan ini";
        break;
    }
    return timeDescription;
  };

  return (
    <div className={`${show ? "block" : "hidden"} fixed top-20 right-20 w-80 rounded-xl shadow-lg z-50`}>
      <div className="bg-[#224D54] p-4 flex items-center shadow-sm rounded-t-xl relative">
        <h6 className="text-lg font-bold text-white ">Notifikasi</h6>
        <button className="absolute right-4 text-white" onClick={onClose}>
          <RxCross2 size={24} />
        </button>
      </div>
      <div className="p-5 bg-white rounded-b-xl">
        <div className="flex ">
          <BsCircleFill size={24} className="text-[#F78A27]" />
          <p>{message}</p>
          <div className="text-sm text-black px-4">Selamat Anda berhasil login di web Juragan Ikan.com!</div>
        </div>
        <div className="text-sm text-gray-500 px-8 py-5 ">Login {getTimeDescription()}</div>
      </div>
    </div>
  );
};

export default Notification;
