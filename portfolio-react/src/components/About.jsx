import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Intro</p>
        <h2 className={styles.sectionHeadText}>Sobre mim...</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Olá, me chamo Krhystofferson Ferrari, tenho 31 anos e sou Desenvolvedor Full Stack. Nascido em 1992 na cidade de São José do Rio Preto - SP, tive uma infância humilde, mas sempre com acesso a princípios e educação. Aos 11 anos, ganhei meu primeiro computador e, desde então, me apaixonei pela tecnologia, tornando-me o "menino que ajeitava os PCs" da vizinhança.

Trabalho desde os 12 anos e já atuei em diversas áreas, desde auxiliar de funilaria até metalúrgico. Aos 18 anos, tive minha primeira experiência com programação, atuando como Operador de Dobradeira CNC especializado. Estudo programação desde 2015, com algumas pausas ao longo do caminho.

Iniciei minha transição de carreira para tecnologia em 2017 e possuo experiência em TypeScript, JavaScript, React.js, Node.js e Next.js. Aprendo rápido e colaboro diretamente com os clientes para criar soluções eficientes, escaláveis e fáceis de usar, que resolvem problemas reais.

Desde 2020, lidero equipes e atualmente sou Head de Tecnologia e Coordenador de Desenvolvimento. Vamos trabalhar juntos para dar vida às suas ideias!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
