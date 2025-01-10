"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { motion } from "framer-motion";

export function AnimatedModalContact({ text, icon }) {


  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger
          className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn px-5 py-3 rounded-xl border-2 border-white"
        >
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-300">
            {text}
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20 text-2xl">
            {icon}
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-800 dark:text-neutral-100 font-bold text-center ">
              Contact Us
            </h4>
            <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
              <a
                href="mailto:yuvraj.work99@gmail.com"
                className="flex items-center justify-center cursor-pointer group"
              >
                <span className="mr-3 text-lg">📬</span>
                <span className="text-neutral-700 dark:text-neutral-300 text-sm ">
                  Email :{" "}
                  <span className="group-hover:text-[#4CC8B2]">
                    yuvraj.work99@gmail.com
                  </span>
                </span>
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=%2B917000060781&text&type=phone_number&app_absent=0"
                className="flex items-center justify-center group"
                target="_blank"
              >
                <span className="mr-3 text-lg">☎️</span>
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Phone :{" "}
                  <span className="group-hover:text-[#4CC8B2]">7000060781</span>
                </span>
              </a>
              <div className="flex items-center justify-center group">
                <span className="mr-3 text-lg">🗺️</span>
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Address :<span> 123 Paradise St, Bali</span>
                </span>
              </div>
              <div className="flex items-center justify-center group">
                <span className="mr-3 text-lg">💻</span>
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Support Hours : <span>Mon-Fri, 9AM-6PM</span>
                </span>
              </div>
              <a
                href="https://www.linkedin.com/in/yuvraj-singh-rajawat-"
                target="_blank"
                className="flex items-center justify-center group"
              >
                <LinkedinIcon className="" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Social Media :{" "}
                  <span className="group-hover:text-[#4CC8B2]">
                    YuvrajSinghRajawat
                  </span>
                </span>
              </a>
              <a
                href="https://yuvrajportfolio.com"
                target="_blank"
                className="flex items-center justify-center group"
              >
                <span className="mr-3 text-lg">🌐</span>
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Website :{" "}
                  <span className="group-hover:text-[#4CC8B2]">
                    www.yuvrajportfolio.com
                  </span>
                </span>
              </a>
            </div>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}

const LinkedinIcon = () => {
  return (
    <svg
      className="mr-3"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="25px"
      height="25px"
    >
      <path
        fill="#0288D1"
        d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
      />
      <path
        fill="#FFF"
        d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
      />
    </svg>
  );
};
