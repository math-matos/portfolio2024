import AboutMe from "@/components/AboutMe";
import { BackToTopButton } from "@/components/BackToTopButton";
import { Experiences } from "@/components/Experiences";
import Header from "@/components/Header";
import Main from "@/components/Main";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <div className="text-black dark:bg-slate-900 dark:text-white pt-52">
        <Main />
        <AboutMe />
        <Experiences />
        <Projects />
        <Skills />

        <BackToTopButton/>
      </div>
    </>
  );
}
