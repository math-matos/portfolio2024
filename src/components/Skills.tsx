import React from "react";

export const Skills = () => {
  return (
    <div className="pb-10">
      <div className="flex-col text-center">
        <h5 className="font-light">What I am Good In</h5>
        <h2 className="mb-10 text-5xl font-bold">My Skills</h2>
      </div>

      <div>
        <div className="mb-8 flex justify-center">
          <a href="https://www.linkedin.com/in/mathmatos/">
            <img
              src="https://skillicons.dev/icons?i=js,firebase,supabase,redux,react,mysql,postgres,nextjs,materialui,nodejs,express,python,flask,mongodb,tailwind,jest,ts,css"
              alt="My Skills"
              className=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};
