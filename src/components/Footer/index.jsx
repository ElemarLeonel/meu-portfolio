import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, 
         faLinkedin, 
         faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
    return (
        <footer className="footer items-center p-4 bg-secondary 
        text-neutral-content">
            <div className="items-center grid-flow-col">
                <a className="btn btn-ghost normal-case text-xl text-primary">
                    dev.elemarleonel
                </a>
                <p className="text-blue-900">
                    Copyright © 2023 - Todos os Direitos Reservados
                </p>
            </div>
            <div className="grid-flow-col gap-4 md:place-self-center 
            md:justify-self-end">
                <a className="https://github.com/ElemarLeonel">
                    <FontAwesomeIcon icon={faGithub} size="2x"
                    className="hover:text-blue-900 text-primary"/>
                </a>
                <a href="https://www.linkedin.com/in/elemarleonel/">
                    <FontAwesomeIcon icon={faLinkedin} size="2x"
                    className="hover:text-blue-900 text-primary"/>
                </a>
                <a href="https://www.instagram.com/dev.elemarleonel/">
                    <FontAwesomeIcon icon={faInstagram} size="2x"
                    className="hover:text-blue-900 text-primary"/>
                </a>
            </div>
        </footer>
    )
}