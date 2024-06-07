import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="absolute right-8 top-[30rem] z-10 cursor-pointer" onClick={onClick}>
      <MdArrowForwardIos className="text-4xl bg-[#F9841A] text-white px-1 py-2" />
    </div>
  );
}

export default NextArrow;
