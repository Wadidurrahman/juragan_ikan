import React from "react";
import { MdArrowBackIos } from "react-icons/md";

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="absolute left-8 top-[30rem] z-10 cursor-pointer" onClick={onClick}>
      <MdArrowBackIos className="text-4xl bg-[#F9841A] text-white px-1 py-2" />
    </div>
  );
}

export default PrevArrow;
