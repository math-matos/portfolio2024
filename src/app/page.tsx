"use client";

import AboutMe from "@/components/AboutMe";
import { BackToTopButton } from "@/components/BackToTopButton";
import { Experiences } from "@/components/Experiences";
import Header from "@/components/Header";
import Main from "@/components/Main";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import "../i18n";

export default function Home() {
  return (
    <div className="overflow-hidden text-black dark:bg-slate-900 dark:text-white">
      <Header />
      <div className="pt-48">
        <Main />
        <AboutMe />
        <Experiences />
        <Projects />
        <Skills />

        <BackToTopButton />
      </div>
    </div>
  );
}
