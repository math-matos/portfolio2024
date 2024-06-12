import React from "react";

export const ExpCard = ({ title, image, description, redirect }: any) => {
  return (
    <div className="mx-auto max-w-96">
      <h3 className="font-medium">{title}</h3>
      <img src={image} className="w-96" />
      <p className="my-2">{description}</p>
      <a href={redirect} target="_blank" className="underline">
        Visualizar projeto
      </a>
    </div>
  );
};
