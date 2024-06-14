"use client";

import React from "react";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

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
        <img
          src="https://cdn.discordapp.com/attachments/988524143400067084/1251251641462689892/WhatsApp_Image_2024-01-25_at_09.32.55.jpeg?ex=666de666&is=666c94e6&hm=be830ffcc14017f576c35cf8901799b381e779d5e2f0d82bca0a512104267ebb&"
          width={320}
          className="shadow-2xl rounded-lg"
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
