import { FaPhone } from "react-icons/fa"
import Style from "./style.module.css"

export default function Header() {
    return (
        <>
            <header className={Style.header}>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Experiência</li>
                        <li>Projectos</li>
                        <li ><i><FaPhone /></i></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}