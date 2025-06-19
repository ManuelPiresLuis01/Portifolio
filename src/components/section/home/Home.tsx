import Style from "./style.module.css";
import Typewriter from "react-typewriter-effect";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { ImGithub } from "react-icons/im";
import { Links } from "../../../assets/mock/links";

export default function Home() {
  const text: string = "< Ola sou o Manuel Pires Luis  />";
  return (
    <>
      <section className={Style.section}>
        <div className={Style.home}>
          <div className={Style.right}>
            <div className={Style.socialMedia}>
              <a href={Links.facebook} target="_blank" rel="noopener noreferrer"><i><FaFacebook /></i></a>
              <a href={Links.instagram} target="_blank" rel="noopener noreferrer"><i><AiFillInstagram /></i></a>
              <a href={Links.linkedin} target="_blank" rel="noopener noreferrer"><i><TbBrandLinkedinFilled /></i></a>
              <a href={Links.github} target="_blank" rel="noopener noreferrer"> <i><ImGithub /></i></a>
              <a href={Links.whatsapp} target="_blank" rel="noopener noreferrer"> <i><FaWhatsapp /></i></a>
              
              
            
            </div>
            <div className={Style.buttons}>
              <a href={Links.projects} target="_blank" rel="noopener noreferrer"> <button className={Style.button1}>Ver Projectos</button></a>
              <a href={Links.resume} target="_blank" rel="noopener noreferrer"><button className={Style.button2}>Ver CV</button></a>
            </div>
          </div>
          <div className={Style.presentation}>
            <h1 className={Style.name}>{text}</h1>
            <p>
              <TypingEffect />
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function TypingEffect() {
  return (
    <Typewriter
      startDelay={100}
      cursorColor="#caaf12"
      multiText={[
        "Sou desenvolvedor Web ",
        "Sou Analista de QA ",
        "Sou Professor ",
        "Seja bem-vindo a minha page!_",
      ]}
      multiTextDelay={2000}
      typeSpeed={80}
    />
  );
}
