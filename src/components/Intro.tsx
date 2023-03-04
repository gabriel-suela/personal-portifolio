import { useCycle } from "framer-motion";
import { motion } from "framer-motion";
import Portifolio from "./Portifolio";
import profilePic from "/assets/profile.jpg";

export default function Intro() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const divVariants = {
    open: {
      display: "block",
      visibility: "visible",
      opacity: 1,
      transition: {
        staggerChildren: 0.17,
        delayChildren: 0.2,
      },
    },
    closed: {
      display: "none",
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        display: {
          when: "afterChildren",
          delay: 0.5,
        },
      },
    },
  };

  const handleClick = (e: any) => {
    toggleOpen(e);
  };

  return (
    <>
      <div className="flex items-center lg:justify-between flex-col max-w-xl px-3 pt-20 mx-auto lg:flex-row-reverse">
        <img
          src={profilePic}
          className="w-20 h-20 rounded-full  "
          alt="profile"
        />
        <div className="mt-2 lg:mt-0">
          <h1 className="text-4xl font-bold pt-4 pb-2">Gabriel Suela</h1>
          <p className="font-light dark:text-gray-200">
            FrontEnd Developer (JavaScript, TypeScript, React, Node)
          </p>
        </div>
      </div>
      <article className="flex items-center flex-col text-[16px] text-justify xs:text-left text-gray-800 dark:text-gray-200 mt-6 sm:mt-4 ">
        <p className="text-sm max-w-xl mb-6 lg:ml-7 leading-relaxed font-normal">
          Formado em Letras/Literaturas pela UFRRJ, atualmente, estou em
          transição de carreira para a área de tecnologia, mais especificamente
          em desenvolvimento front-end. Busco oportunidades que possibilitem o
          desenvolvimento das minhas habilidades em programação.
        </p>

        <button
          className="bg-transparent text-lg text-black dark:text-gray-200 py-2 px-5 rounded-md font-semibold link-underline "
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            handleClick(e)
          }
        >
          Projetos
        </button>

        <motion.div
          className="mt-5"
          variants={divVariants}
          animate={isOpen ? "open" : "closed"}
        >
          <Portifolio />
        </motion.div>
      </article>
    </>
  );
}
