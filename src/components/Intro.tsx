import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdFormatAlignJustify } from "react-icons/md";
import Separator from "./Separator";
import { HiDownload } from "react-icons/hi";

export const Intro = () => {
  return (
    <div className="w-2/3 p-1 mt-10 mx-auto mb-10">
      <div className="w-full flex flex-col items-center">
        {/* <div className="text-gray-600 text-center mb-4 hidden sm:block sm:text-2xl">
          {"👋 Hello, I'm"}
        </div> */}
        <div className="mb-5 z-50 inset-0 text-white font-bold px-4 text-xl text-center md:text-2xl lg:text-4xl">
          <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            {"👋 Hello, I'm"}
          </p>
        </div>

        <div className="mb-5 z-50 inset-0  text-white font-bold px-4 text-3xl text-center md:text-4xl lg:text-7xl">
          <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            {"Shlomo Dahan"}
          </p>
        </div>

        <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 mt-4">
          <a
            href="https://linkedin.com/in/shlomomoshedahan"
            className="text-gray-100 hover:text-blue-500 flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="h-8 w-8 sm:h-10 sm:w-10" />
          </a>
          <a
            href="https://github.com/shlomomdahan"
            className="text-white hover:text-purple-500 flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="h-8 w-8 sm:h-10 sm:w-10" />
          </a>
          <a
            href="/cv.pdf"
            download
            className="flex items-center justify-center h-8 w-10 sm:h-10 sm:w-16 rounded-full shadow-md bg-gray-100 text-black font-bold p-2"
          >
            CV <HiDownload className="text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
};
