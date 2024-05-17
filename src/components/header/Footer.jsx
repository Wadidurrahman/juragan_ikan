import { ImMail2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export default function Footer() {
  return (
    <footer>
      <div className="relative">
        <hr></hr>
        <div className="flex justify-between mt-5 px-8 bottom-15">
          <div className="text-[#224D54] font-bold text-2x1 mt-5">
            <h4>Tentang Kami</h4>
            <h4>Kebijakan kami</h4>
            <h4>FAQ</h4>
          </div>
          <div className="mt-5">
            <h4 className="font-semibold">Subscribe Our Newsletter</h4>
            <table className="">
              <div className="flex gap-1 justify-center items-center">
                <input type="text" className="border-2 border-gray-300 rounded-md px-5" placeholder="Email"></input>
                <button className=" border rounded-md bg-[#F9841A] px-2  py-0.5">
                  <IoIosArrowForward size={24} className="fill-[white]"></IoIosArrowForward>
                </button>
              </div>
              <span className="relative ">
                <div className="flex py-2 gap-2 justify-end">
                  <FaInstagram size={24}></FaInstagram>
                  <FaWhatsapp size={24}></FaWhatsapp>
                  <ImMail2 size={24}></ImMail2>
                </div>
              </span>
            </table>
          </div>
        </div>
      </div>
      <div className="relative bg-[#224D54] mt-5 py-5">
        <h4 className="flex text-[16px] text-white justify-center items-center ">Copyright © Juragan Ikan 2024. All Rights reserved</h4>
      </div>
    </footer>
  );
}
