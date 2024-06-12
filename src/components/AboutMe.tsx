import React from "react";

export default function AboutMe() {
  return (
    <>
      <div className="flex justify-center mt-10">
        <img
          src="https://i.pinimg.com/564x/54/c7/1d/54c71ded46ce42a0c5cdbc11d1954bba.jpg"
          width={250}
        />
        <div className="flex flex-col ml-8">
        <h2 className="font-bold text-2xl">Olá! 👋 EU SOU O MATHEUS</h2>
        <p className="font-light max-w-lg">
          Apaixonado pelo desenvolvimento web desde os 18 anos, brasileiro e
          nascido em 2003. <br /> Sou estudante de Engenharia de Software
          e Desenvolvedor de Software na maior fabricante de aeronaves da América Latina.<br />
          Sou uma pessoa que adora desafios, assim como todo desenvolvedor,<br />
          mas em especial aqueles que me tiram da minha zona de conforto,<br />
          pois as minhas maiores evoluções e aprendizados vierem de
          momentos em que me vi obrigado a sair dela e enfrentar a vida.<br />
          Estudante assídua, que aprecia tomar café e nas horas vagas<br />
          compartilha conhecimento nas redes sociais.<br />
          Apaixonado no mundo geek/animes e também adoro ir na academia 💪🏻🚀
        </p>
        </div>
      </div>
    </>
  );
}
