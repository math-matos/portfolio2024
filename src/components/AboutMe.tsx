import React from "react";

export default function AboutMe() {
  return (
    <>
      <div id="about-me" className="mt-96 flex justify-center">
        <img
          src="https://i.pinimg.com/564x/54/c7/1d/54c71ded46ce42a0c5cdbc11d1954bba.jpg"
          width={250}
        />
        <div className="ml-8 flex flex-col">
          <h2 className="text-3xl font-bold">Olá! 👋 EU SOU O MATHEUS</h2>
          <p className="mt-4 max-w-lg font-light tracking-widest">
            Apaixonado pelo desenvolvimento web desde os 18 anos, sou um
            brasileiro nascido em 2003. Atualmente, estudo Engenharia de
            Software e atuo como Desenvolvedor de Software na maior fabricante
            de aeronaves da América Latina. Adoro desafios, especialmente
            aqueles que me forçam a sair da minha zona de conforto, pois
            acredito que é nesses momentos que mais evoluo e aprendo. Sou um
            estudante dedicado, amante de café e, nas horas vagas, gosto de
            compartilhar conhecimento nas redes sociais. Também sou entusiasta
            do mundo geek/animes e um amante de academia 💪🏻🚀.
          </p>
        </div>
      </div>
    </>
  );
}
