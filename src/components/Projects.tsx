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
          title="ZatchNFT Community LP"
          image="https://private-user-images.githubusercontent.com/106177721/426573226-bedc5f8d-412a-4813-9ce2-a30a3899b11b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI5MTM0MzAsIm5iZiI6MTc0MjkxMzEzMCwicGF0aCI6Ii8xMDYxNzc3MjEvNDI2NTczMjI2LWJlZGM1ZjhkLTQxMmEtNDgxMy05Y2UyLWEzMGEzODk5YjExYi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzI1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMyNVQxNDMyMTBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jYjY5OTg1OTcyNjk0M2RjNmNkOTk3MTE3YzkxZjNkY2Y3ZWY3MTBlYTM3M2Y2ZjEzMzM5OWEyMDgwNWEzNWI2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.4WZ5yLQa-9pmRlA9QlZT-eIWyUyA9cwJXdaRn6EoK0M"
          description={t("project5")}
          redirect="https://zatchnft.vercel.app/"
        />

        <ExpCard
          title="Rent Skins"
          image="https://private-user-images.githubusercontent.com/106177721/426574907-471f6f07-88f0-4aec-821c-0fe1c5f9866c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI5MTMzMTQsIm5iZiI6MTc0MjkxMzAxNCwicGF0aCI6Ii8xMDYxNzc3MjEvNDI2NTc0OTA3LTQ3MWY2ZjA3LTg4ZjAtNGFlYy04MjFjLTBmZTFjNWY5ODY2Yy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzI1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMyNVQxNDMwMTRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yYTFkNGIzNzUyZWU0Y2EzNmZjNzgzNzE3M2I5NjZkNzdhOTMwZjNkNGY1NzRmZDM2NTdlODVlMWU2ZjUyNjc4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.BPmGYbX5QPDFJAI2-u-gt5ea1eBhhoR-6EUHiUsJoyc"
          description={t("project6")}
          redirect="https://www.rentskins.com.br/"
        />

        {/* <ExpCard
          title="Rent Skins"
          image="https://bestanimations.com/Site/Construction/under-construction-animated-gif-16.gif"
          description={t("project6")}
          redirect="https://www.rentskins.com.br/"
        /> */}
      </motion.div>
    </>
  );
};
