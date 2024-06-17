import React from "react";

const Card = ({ title, imageSrc, link }) => {
  return (
    <div className="flex justify-center items-center border-2 px-12 py-4 shadow-lg bg-white rounded-md">
      <div className="justify-center items-center">
        <h2 className="text-[#224D54] font-bold pb-10">{title}</h2>
        <button className="bg-[#F9841A] hover:bg-slate-500 transition-all duration-300 text-white font-bold text-sm p-2 px-5 rounded-full">
          <a href={link}>Catat</a>
        </button>
      </div>
      <img className="w-36 h-36 rounded-full" src={imageSrc} alt="icon" />
    </div>
  );
};

export default Card;
