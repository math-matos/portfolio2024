"use client";

import React from "react";
import myPhoto from "../app/myPhoto.png";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function AboutMe() {
  const { t } = useTranslation();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        id="about-me"
        className="mt-[210px] flex justify-center pt-20"
      >
        <Image
          src={myPhoto}
          width={320}
          className="rounded-lg shadow-2xl"
          alt="Matheus Matos foto"
        />
        <motion.div className="ml-8 flex flex-col">
          <p className="text-3xl font-bold">{t("introducing")}</p>
          <p className="mt-4 max-w-2xl text-xl font-light tracking-widest">
            {t("description")}
          </p>
        </motion.div>
      </motion.div>
    </>
  );
}
