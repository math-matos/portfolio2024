import React from "react";
import { useTranslation } from "react-i18next";

interface ExpCardProps {
  title: string;
  image: string;
  description: string;
  redirect: string;
}

export const ExpCard = ({
  title,
  image,
  description,
  redirect,
}: ExpCardProps) => {
  const { t } = useTranslation();

  return (
    <div className="mx-auto max-w-96">
      <a href={redirect} target="_blank">
        <h3 className="font-medium">{title}</h3>
        <img src={image} className="min-h-52 w-96 max-w-96 shadow-lg" />
        <p className="my-2 font-light">{description}</p>
      </a>
      <a
        className="group font-bold text-white transition-all duration-300 ease-in-out"
        href={redirect}
        target="_blank"
      >
        <span className="bg-gradient-to-r from-sky-500 to-sky-900  bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
          {t("see_project")}
        </span>
      </a>
    </div>
  );
};
