import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdFormatAlignJustify } from "react-icons/md";
import Separator from "./Separator";

export const Intro = () => {
  return (
    <div className="w-1/3 p-1 mt-10 mx-auto mb-20">
      <div className="w-full flex flex-col items-center">
        <div className="text-gray-600 text-center mb-4 hidden sm:block sm:text-xl">
          👋 Hello, I'm
        </div>
        <div className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 text-gray-500 text-gradient text-center">
          Shlomo Dahan
        </div>

        <Separator />

        <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 mt-4">
          <a
            href="https://linkedin.com/in/yourusername"
            className="text-blue-500 hover:text-blue-700 flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="h-6 w-6 " />
          </a>
          <a
            href="https://github.com/yourusername"
            className="text-gray-900 hover:text-black flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="h-6 w-6 " />
          </a>
          <a
            className="font-medium bg-gray-300 bg-opacity-75 h-9 px-3 flex items-center  rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 cursor-pointer "
            href="/CV.pdf"
            download
          >
            CV <MdFormatAlignJustify />
          </a>
        </div>
      </div>
    </div>
  );
};
