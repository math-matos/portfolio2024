"use client";

import React from "react";
import { ExpCard } from "./ExpCard";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <>
      <div id="projects" className="flex-col text-center">
        <h5 className="font-light">Portfolio</h5>
        <h2 className="mb-10 text-5xl font-bold">Latest Projects</h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="grid grid-rows-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        <ExpCard
          title="Food Explorer"
          image="https://portfolio2023-math-matos.vercel.app/assets/image/food-explorer.png"
          description={t("project1")}
          redirect="https://github.com/math-matos/Food-explorer-mathmatos-final"
        />

        <ExpCard
          title="To-do List"
          image="https://github.com/math-matos/typescript-todo-list/assets/106177721/c08419ec-b511-4a56-9430-6094d284c8b3"
          description={t("project2")}
          redirect="https://github.com/math-matos/typescript-todo-list"
        />

        <ExpCard
          title="ECORIDE"
          image="https://user-images.githubusercontent.com/106177721/279106744-0bfb9ba9-cdef-460f-b252-f64c77c99efa.png"
          description={t("project3")}
          redirect="https://github.com/math-matos/Food-explorer-mathmatos-final"
        />

        <ExpCard
          title="Portfolio 2024"
          image="https://github.com/math-matos/portfolio2024/assets/106177721/767325d0-66b8-48b6-a15f-55320ba79faf"
          description={t("project4")}
          redirect="https://mathmatos.vercel.app/"
        />

        <ExpCard
          title="Coming soon..."
          image="https://bestanimations.com/Site/Construction/under-construction-animated-gif-16.gif"
          description={t("under_construction")}
          redirect="https://github.com/math-matos?tab=repositories"
        />

        <ExpCard
          title="Coming soon..."
          image="https://bestanimations.com/Site/Construction/under-construction-animated-gif-16.gif"
          description={t("under_construction")}
          redirect="https://github.com/math-matos?tab=repositories"
        />
      </motion.div>
    </>
  );
};
