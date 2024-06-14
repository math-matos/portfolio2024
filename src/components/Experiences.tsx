'use client'

import React from "react";

import { motion } from "framer-motion";

export const Experiences = () => {
  return (
    <>
      <div id="experiences" className="flex justify-center dark:bg-slate-900 py-40">
        <div className="flex-col ">

            <div className="flex-col text-center">
          <h5 className="font-light">Professional</h5>
          <h2 className="text-5xl font-bold">Work Experiences</h2>
            </div>

<motion.div initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }} className="flex mt-10 items-center mb-20">
            <img src="https://www.cnnbrasil.com.br/wp-content/uploads/2021/06/41152_476791AAE41C3D25.jpg" width={200} className="rounded-3xl"/>
        <div className="flex-col justify-start ml-4">
            <h3>Jan 2024 - now</h3>
            <h4>Software Developer - Embraer</h4>
            <p>Stack: ReactJS, Typescript, NextJS, Tailwind, MySQL, Flask </p>
        </div>
</motion.div>

<motion.div initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }} className="flex mt-10 items-center">
            <img src="https://portfolio2023-math-matos.vercel.app/assets/image/logo-prodigiocode.png" width={200}/>
        <div className="flex-col justify-start ml-4">
            <h3>Set 2022 - Nov 2023</h3>
            <h4>Content Creator - Prodigio Code</h4>
            <p>Stack: ReactJS, TypeScript, NextJS, MySQL, Redux, Jest, Cypress, sass.</p>
        </div>
</motion.div>

        </div>
      </div>
    </>
  );
};
