import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faGithub,
    faLinkedin,
    faInstagram
} from "@fortawesome/free-brands-svg-icons"

import 'animate.css'
import { AnimationOnScroll } from "react-animation-on-scroll"

export default function Footer() {
    return (
        <footer className="flex flex-col md:flex-row justify-between 
            gap-5 p-5 bg-secondary dark:bg-primary">
            <div className="flex flex-col md:flex-row justify-center items-center">
                <a className="btn btn-ghost normal-case text-xl text-primary
                    dark:text-secondary">
                    dev.elemarleonel
                </a>
                <p className="text-primary dark:text-accent text-center">
                    Copyright © 2023 - Todos os Direitos Reservados
                </p>
            </div>
            <div className="flex flex-row md:justify-between justify-center gap-5 p-4">
                <a className="https://github.com/ElemarLeonel"
                aria-label="Link do Github do Desenvolvedor Elemar">
                    <FontAwesomeIcon icon={faGithub} size="2x"
                        className="hover:text-accent text-primary
                        dark:text-secondary dark:hover:text-accent" />
                </a>
                <a href="https://www.linkedin.com/in/elemarleonel/"
                aria-label="Link do Linkedin do Desenvolvedor Elemar">
                    <FontAwesomeIcon icon={faLinkedin} size="2x"
                        className="hover:text-accent text-primary
                        dark:text-secondary dark:hover:text-accent" />
                </a>
                <a href="https://www.instagram.com/dev.elemarleonel/"
                aria-label="Link do Instagram do Desenvolvedor Elemar">
                    <FontAwesomeIcon icon={faInstagram} size="2x"
                        className="hover:text-accent text-primary
                        dark:text-secondary dark:hover:text-accent" />
                </a>
            </div>
        </footer>
    )
}