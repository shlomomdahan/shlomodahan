"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";

export const Footer: React.FC = () => {
  const inputEl = useRef<HTMLInputElement>(null);
  const [copied, setCopied] = useState(false);

  const handleCopyClick = async () => {
    if (inputEl.current) {
      console.log("copying");
      try {
        await navigator.clipboard.writeText(inputEl.current.value);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Hide the bubble after 2 seconds
      } catch (error) {
        console.error("Copy failed", error);
        // Handle the error (e.g., display a message to the user)
      }
    }
  };

  return (
    <div className="py-16 mx-5 text-gray-700 flex flex-col">
      <div className="text-center mb-6">
        <div className="flex justify-center items-center mb-8">
          <h1 className="text-6xl font-bold text-gray-900 mr-3">Bye!</h1>
          <div className="waveHand">
            <Image
              src="/images/hand.png"
              alt="Waving hand"
              width={60}
              height={60}
            />
          </div>
        </div>
        <h5 className="text-xl font-semibold mb-6">{"Let's Get in Touch:"}</h5>
        <div className="relative flex items-center justify-center">
          <input
            ref={inputEl}
            value="shlomomdahan@gmail.com"
            readOnly
            style={{ position: "absolute", left: "-9999px" }}
          />
          <div className="flex flex-row min-w-80 w-1/4 items-center justify-between bg-white rounded-lg px-3 h-12 mr-1 shadow-lg">
            shlomomdahan@gmail.com
            <button
              onClick={handleCopyClick}
              className="bg-purple-500 rounded-lg p-1 relative" // Ensure button is positioned relatively for the absolute positioning of the copied message
              style={{ width: "20px", height: "30px" }}
            >
              <Image src="/images/copy.png" alt="Copy" width={20} height={20} />
              {copied && (
                <div className="absolute -top-12 right-1/2 transform translate-x-1/2 bg-blue-500 text-white rounded px-3 py-1">
                  Copied!
                </div>
              )}
            </button>
          </div>
          <FaLinkedinIn
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/shlomomoshedahan/",
                "_blank"
              )
            }
            className="text-blue-500 cursor-pointer bg-white rounded-lg h-12 p-2 shadow-lg"
            size={55}
          />
        </div>
      </div>
      {/* <footer className="flex justify-center items-center h-16 text-gray-900">
        <p>© 2024 Shlomo Dahan</p>
      </footer> */}
    </div>
  );
};

export default Footer;
