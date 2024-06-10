import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { BsCircleFill, BsTrash } from "react-icons/bs";

const Notification = ({ notifications, show, onClose, onDeleteAll }) => {
  const handleFileChange = (e) => {
    onClose();
  };

  const getTimeDescription = () => {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();

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
      <div className="bg-[#224D54] p-4 flex items-center justify-between shadow-sm rounded-t-xl relative">
        <h6 className="text-lg font-bold text-white">Notifikasi</h6>
        <button className="text-white" onClick={onClose}>
          <RxCross2 size={24} />
        </button>
      </div>
      <div className="p-5 bg-white rounded-b-xl">
        {notifications.map((notification, index) => (
          <div key={index} className="flex items-center mb-2">
            <BsCircleFill size={24} className="text-[#F78A27] mr-2" />
            <div>
              <p>{notification.message}</p>
              <div className="text-sm text-black">{notification.details}</div>
            </div>
          </div>
        ))}
        <div className="text-sm text-gray-500 px-8 py-5">Login {getTimeDescription()}</div>
        <div className="flex justify-center items-center mt-4">
          <button onClick={onDeleteAll} className="text-red-500 hover:text-red-700">
            <BsTrash size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notification;
