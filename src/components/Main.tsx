"use client";

import React from "react";

import { motion } from "framer-motion";

import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaChevronDown,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function Main() {
  const scrollToSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center pb-20"
    >
      <div className="flex flex-col items-center justify-center">
        <motion.img
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-20 w-40"
          src="https://portfolio2023-math-matos.vercel.app/assets/image/logo-prodigiocode.png"
          alt="prodigiocode"
        />
        <h1 className="items-center justify-center gap-3 text-center text-8xl font-bold">
          SOFTWARE <br /> ENGINEER
        </h1>
      </div>
      <div className="mt-4 flex justify-center">
        <a href="mailto:contatomathmatos@gmail.com" target="_blank">
          <IoIosMail className="mr-4 text-4xl" />
        </a>
        <a href="https://www.linkedin.com/in/mathmatos/" target="_blank">
          <FaLinkedin className="mr-4 text-4xl" />
        </a>
        <a href="https://github.com/math-matos" target="_blank">
          <FaGithub className="mr-4 text-4xl" />
        </a>
        <a href="https://www.instagram.com/prodigiocode/" target="_blank">
          <FaInstagram className="mr-4 text-4xl" />
        </a>
      </div>
      <motion.button
        onClick={scrollToSection}
        className="mt-10 animate-bounce items-center justify-center rounded-full text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <FaChevronDown className="fill-black dark:fill-white" size={24} />
      </motion.button>
    </motion.div>
  );
}
