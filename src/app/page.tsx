import AboutMe from "@/components/AboutMe";
import Header from "@/components/Header";
import Main from "@/components/Main";

export default function Home() {
  return (
    <>
      <Header />
      <div className="h-screen bg-slate-900 p-8 text-white">
        <Main/>
        <AboutMe/>
      </div>
    </>
  );
}
