import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  Pegasus,
  perfil,
  iiitek,
  sifat,
  dinamometro,
  responsividade,
  movie,
  mui,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "work",
    title: "Projetos",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

const services = [
  {
    title: "Engenheiro de Software",
    icon: web,
  },
  {
    title: "Arquiteto de Software",
    icon: backend,
  },
  {
    title: "Desenvolvedor de Software",
    icon: mobile,
  },
  {
    title: "Head de Tecnologia",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Material UI",
    icon: mui,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  
  {
    title: "Desenvolvedor Web/IoT",
    company_name: "Pegasus Pro",
    icon: Pegasus,
    iconBg: "#E6DEDD",
    date: "Setembro 2018 - Junho 2021",
    points: [
      "Desenvolvimento e manutenção de aplicações web utilizando HTML, CSS, JavaScript e outras tecnologias relacionadas.",
      "Desenvolvimento e manutenção do software do dinamômetro Pegasus Pro em linguagem C junto ao micro-controlador ESP-32 da Espressif.",
      "Implementando design responsivo e garantindo compatibilidade entre navegadores.",
    ],
  },
  {
    title: "Engenheiro de Software/Head de Tecnologia",
    company_name: "IIItek Technology",
    icon: iiitek,
    iconBg: "#383E56",
    date: "Junho 2021 - Março 2024",
    points: [
      "Desenvolvimento e manutenção de aplicações web usando React.js, Next.js e outras tecnologias relacionadas.",
      "Colaborar com equipes multifuncionais, incluindo designers, gerentes de produto e outros desenvolvedores para criar produtos de alta qualidade.",
      "Gestão das equipes de desenvolvimento.",
      "Participar de revisões de código e fornecer feedback construtivo a outros desenvolvedores.",
    ],
  },
  {
    title: "Coordenador de Desenvolvimento",
    company_name: "Grupo Sifat",
    icon: sifat,
    iconBg: "#383E56",
    date: "Março 2024 - Até o momento",
    points: [
      "Desenvolvimento e manutenção de aplicações web usando React.js no frontend e Java no backend.",
      "Colaborar com equipes multifuncionais, incluindo designers, gerentes de produto e outros desenvolvedores, para criar produtos de alta qualidade.",
      "Gestão e coordenação das equipes de desenvolvimento, garantindo a entrega dentro dos prazos e conforme os padrões de qualidade.",
      "Participar de revisões de código e fornecer feedback construtivo a outros desenvolvedores.",
      "Supervisão e otimização de soluções de automação comercial, incluindo sistemas de PDV, ERP e CRM.",
      "Identificação e implementação de melhorias em processos e sistemas para aumentar a eficiência e escalabilidade.",
      "Treinamento e mentoria de desenvolvedores, promovendo a adoção de melhores práticas e o desenvolvimento contínuo da equipe."
    ],    
  },
];

const projects = [
  {
    name: "Software Dinamômetro Pegasus Pro",
    description:
      "Software do dinamômetro Pegasus Pro, desenvolvido com HTML, CSS, JavaScript e linguagem C.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "C",
        color: "pink-text-gradient",
      },
    ],
    image: dinamometro,
    source_code_link: "https://home.pegasuspro.com.br/",
  },
  {
    name: "Dicas de Responsividade",
    description:
      "Página web simples, desenvolvida com HTML, CSS e JavaScript. Com o objetivo de mostrar na prática a responsividade em sites e aplicativos web.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: responsividade,
    source_code_link: "https://github.com/KrhystFerrari/Responsividade-Dicas",
  },
  {
    name: "MovieWiki",
    description:
      "Projeto com React, consumindo a API do TMDB (filmes), utilizando hooks e React Router, criado com Vite.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "green-text-gradient",
      },
      {
        name: "react-router",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "https://github.com/KrhystFerrari/movie_wiki",
  },
];

export { services, technologies, experiences, projects };
