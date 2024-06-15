"use client";

import React from "react";

import { motion } from "framer-motion";

export const Experiences = () => {
  return (
    <>
      <div
        id="experiences"
        className="flex justify-center py-40 dark:bg-slate-900"
      >
        <div className="flex-col">
          <div className="flex-col text-center">
            <h5 className="font-light">Professional</h5>
            <h2 className="text-5xl font-bold">Work Experiences</h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-20 mt-10 flex items-center"
          >
            <img
              src="https://www.cnnbrasil.com.br/wp-content/uploads/2021/06/41152_476791AAE41C3D25.jpg"
              width={200}
              className="rounded-3xl"
            />
            <div className="ml-4 flex-col justify-start">
              <h3>
                Jan 2024 - <strong>now</strong>
              </h3>
              <h4 className="underline underline-offset-2">
                Software Developer - Embraer
              </h4>
              <p>
                <strong>Stack: </strong> ReactJS, Typescript, NextJS, Tailwind,
                MySQL, Flask
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-10 flex items-center"
          >
            <img
              src="https://portfolio2023-math-matos.vercel.app/assets/image/logo-prodigiocode.png"
              width={200}
            />
            <div className="ml-4 flex-col justify-start">
              <h3>Set 2022 - Nov 2023</h3>
              <h4 className="underline underline-offset-2">
                Content Creator - Prodigio Code
              </h4>
              <p>
                <strong>Stack: </strong>
                ReactJS, TypeScript, NextJS, MySQL, Redux, Jest, Cypress, sass.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};
