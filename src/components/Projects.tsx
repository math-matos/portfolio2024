"use client";

import React from "react";
import { ExpCard } from "./ExpCard";

import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div id="projects" className="mt-20 flex-col text-center">
        <h5 className="font-light">Portfolio</h5>
        <h2 className="mb-10 text-5xl font-bold">Latest Projects</h2>
      </div>

      <div className="grid grid-rows-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <ExpCard
          title="Food Explorer"
          image="https://portfolio2023-math-matos.vercel.app/assets/image/food-explorer.png"
          description="Restaurante integrado com API, feito em React, NodeJS e Vite."
          redirect="https://github.com/math-matos/Food-explorer-mathmatos-final"
        />

        <ExpCard
          title="To-do List"
          image="https://portfolio2023-math-matos.vercel.app/assets/image/todo-list.png"
          description="To-do List para te lembrar oque fazer, feito em React e Vite."
          redirect="https://github.com/math-matos/Food-explorer-mathmatos-final"
        />

        <ExpCard
          title="ECORIDE"
          image="https://user-images.githubusercontent.com/106177721/279106744-0bfb9ba9-cdef-460f-b252-f64c77c99efa.png"
          description="Aplicativo desenvolvido em conjunto com a Schneider Electric para ajudar seus funcionários com a locomoção até a empresa."
          redirect="https://github.com/math-matos/Food-explorer-mathmatos-final"
        />
      </div>
    </motion.div>
  );
};
