import { ImMail2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto px-4">
        <hr className="border-t border-gray-300 mb-5" />
        <div className="relative flex flex-col lg:flex-row justify-between items-center">
          <div className="text-[#224D54] font-bold text-sm lg:text-base mb-5 lg:mb-0 flex flex-col items-start  w-full lg:w-auto lg:flex-col">
            <a href="/aboutus" className="hover:text-[#F6841F] mb-2 lg:mb-0 block lg:inline-block text-left w-full lg:w-auto">
              Tentang Kami
            </a>
            <a href="/Kebijakanprivasi" className="hover:text-[#F6841F] mb-2 lg:mb-0 block lg:inline-block text-left w-full lg:w-auto">
              Kebijakan kami
            </a>
            <a href="/faq" className="hover:text-[#F6841F] block lg:inline-block text-left w-full lg:w-auto">
              FAQ
            </a>
          </div>

          <div className="mt-5 lg:mt-0 text-left w-full lg:w-auto">
            <h4 className="font-semibold mb-2 text-sm lg:text-base">Subscribe Our Newsletter</h4>
            <div className="flex flex-row items-center w-full">
              <input type="text" className="border-2 border-gray-300 rounded-md px-4 py-2 text-sm lg:text-base w-full lg:w-auto" placeholder="Email" />
              <button className="border rounded-md bg-[#F9841A] px-3 py-2 flex items-center justify-center lg:ml-3 ml-3">
                <IoIosArrowForward size={24} className="fill-white" />
              </button>
            </div>
            <div className="flex py-2 gap-2 justify-start mt-3">
              <FaInstagram size={24} className="cursor-pointer fill-[#224D54]" />
              <FaWhatsapp size={24} className="cursor-pointer fill-[#224D54]" />
              <ImMail2 size={24} className="cursor-pointer fill-[#224D54]" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative text-center bg-[#224D54] mt-5 py-5">
        <h4 className="text-[16px] text-white justify-center items-center text-xs md:text-xl md:py-2 lg:text-sm">Copyright © Juragan Ikan 2024. All Rights reserved</h4>
      </div>
    </footer>
  );
}
