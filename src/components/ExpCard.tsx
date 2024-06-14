import React from "react";
import { useTranslation } from "react-i18next";

interface ExpCardProps {
  title: string;
  image: string;
  description: string;
  redirect: string;
}

export const ExpCard = ({ title, image, description, redirect }: ExpCardProps) => {
  const { t } = useTranslation();

  return (
    <div className="mx-auto max-w-96">
      <h3 className="font-medium">{title}</h3>
      <img src={image} className="w-96 " />
      <p className="my-2">{description}</p>
      <a href={redirect} target="_blank" className="underline">
        {t("see_project")}
      </a>
    </div>
  );
};
