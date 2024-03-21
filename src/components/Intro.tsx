import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

export const Intro = () => {
  return (
    <div
      className="flex justify-left  "
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <div className="w-full">
        <div className=" text-base sm:text-2xl md:mb-6 md:mt-6 text-left">
          👋 Hey there, I'm
        </div>
        <div className="font-bold text-4xl sm:text-5xl md:text-6xl mb-6 text-gray-500 text-left text-gradient">
          Shlomo Dahan
        </div>

        <hr className="w-full bg-gray-300 my-2 mx-auto mb-6 h-0.5" />

        <p className="text-2xl mb-10 text-left">
          Currently a CS student @UPenn
        </p>

        <div className="flex justify-start gap-8">
          <a
            href="https://linkedin.com/in/yourusername"
            className="text-blue-500 hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn size={30} />
          </a>
          <a
            href="https://github.com/yourusername"
            className="text-gray-900 hover:text-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};
