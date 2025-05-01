import Style from "./style.module.css"
import Typewriter from 'react-typewriter-effect';
import Header from "../../ui/header/Header"
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { ImGithub } from "react-icons/im";


export default function Home() {
  const text:string = "< Ola sou o Manuel Pires Luis . / >"
    return (
        <>
            <section className={Style.section}>
                {/*<Header />*/}
                <div className={Style.home}>
                    <div className={Style.right}>
                        <div className={Style.socialMedia}>
                            <i><FaFacebook /></i>
                            <i><AiFillInstagram /></i>
                            <i><TbBrandLinkedinFilled /></i>
                            <i><ImGithub /></i>
                        </div>
                        <div className={Style.buttons}>
                            <button  className={Style.button1}>Ver Projectos</button>
                            <button className={Style.button2}>Ver CV</button>
                        </div>

                    </div>
                    <div className={Style.presentation}>
                       <h1 className={Style.name}>{text}</h1>
                      <p><TypingEffect/></p>
                    </div>
                </div>
            </section>
        </>
    )
}

function TypingEffect() {
  return (
    <Typewriter
      startDelay={100}
      cursorColor="#caaf12"
      multiText={[
        'Sou desenvolvedor Web ',
        'Sou professor ',
        'Sou artista ',
        'Seja bem-vindo ao meu portfólio!_',
      ]}
      multiTextDelay={2000}
      typeSpeed={80}
    />
  );
}
