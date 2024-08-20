import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdFormatAlignJustify } from "react-icons/md";
import Separator from "./Separator";
import { HiDownload } from "react-icons/hi";

export const Intro = () => {
  return (
    <div className="w-1/3 p-1 mt-1 sm:mt-10 mx-auto mb-16 sm:mb-20">
      <div className="w-full flex flex-col items-center">
        <div className="text-gray-600 text-center mb-4 hidden sm:block sm:text-2xl">
          {"👋 Hello, I'm"}
        </div>
        <div className="font-bold text-5xl lg:text-6xl mb-4 text-gray-500 text-gradient text-center">
          Shlomo Dahan
        </div>

        {/* <Separator /> */}
        {/* <hr className="w-full bg-gray-300 bg-opacity-70 mb-5 h-1 rounded-full" /> */}

        <div className="flex justify-center gap-6 sm:gap-8 md:gap-10 mt-4">
          <a
            href="https://linkedin.com/in/shlomomoshedahan"
            className="text-blue-500 hover:text-blue-700 flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="h-6 w-6 " />
          </a>
          <a
            href="https://github.com/shlomomdahan"
            className="text-gray-900 hover:text-black flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="h-6 w-6 " />
          </a>
          <a
            className="font-medium shadow-md text-white bg-gray-400 bg-opacity-75 h-9 px-3 flex items-center  rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 cursor-pointer "
            href="/Shlomo_Dahan_2024.pdf"
            download
          >
            CV <HiDownload />
          </a>
        </div>
      </div>
    </div>
  );
};
