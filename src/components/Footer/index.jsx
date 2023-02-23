import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faGithub,
    faLinkedin,
    faInstagram
} from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
    return (
        // <footer className="flex flex-row flex-wrap gap-y-10 gap-x-4 text-sm p-4 bg-secondary 
        // text-neutral-content w-full">
            <footer className="flex flex-col md:flex-row justify-between gap-5 p-5 bg-secondary">
            <div className="flex flex-col md:flex-row justify-center items-center">
                <a className="btn btn-ghost normal-case text-xl text-primary">
                    dev.elemarleonel
                </a>
                <p className="text-blue-900">
                    Copyright © 2023 - Todos os Direitos Reservados
                </p>
            </div>
            <div className="flex flex-row md:justify-between justify-center gap-5 p-4">
                <a className="https://github.com/ElemarLeonel">
                    <FontAwesomeIcon icon={faGithub} size="2x"
                        className="hover:text-blue-900 text-primary" />
                </a>
                <a href="https://www.linkedin.com/in/elemarleonel/">
                    <FontAwesomeIcon icon={faLinkedin} size="2x"
                        className="hover:text-blue-900 text-primary" />
                </a>
                <a href="https://www.instagram.com/dev.elemarleonel/">
                    <FontAwesomeIcon icon={faInstagram} size="2x"
                        className="hover:text-blue-900 text-primary" />
                </a>
            </div>
        </footer>
    )
}