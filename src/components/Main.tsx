import React from "react";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function Main() {
  return (
    <>
      <div>
        <h1 className="items-center justify-center gap-3 pt-8 text-center text-8xl font-bold">
          SOFTWARE <br /> DEVELOPER
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
    </>
  );
}
