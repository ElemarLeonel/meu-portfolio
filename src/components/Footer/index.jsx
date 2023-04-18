import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faGithub,
    faLinkedin,
    faInstagram
} from "@fortawesome/free-brands-svg-icons"
import './index.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container__footer">
                <a className="btn btn-my-name-container__footer"
                href="https://elemarleonel.com.br">
                    dev.elemarleonel
                </a>
                <p className="copyright-text-container__footer">
                    Copyright © 2023 - Todos os Direitos Reservados
                </p>
            </div>
            <div className="social-icons__footer">
                <a href="https://github.com/ElemarLeonel" target="__blank"
                aria-label="Link do Github do Desenvolvedor Elemar">
                    <FontAwesomeIcon icon={faGithub} size="2x"
                        className="icon-social-icons__footer" 
                        aria-label="Link do Github do Desenvolvedor Elemar"/>
                </a>
                <a href="https://www.linkedin.com/in/elemarleonel/" 
                target="__blank"
                aria-label="Link do Linkedin do Desenvolvedor Elemar">
                    <FontAwesomeIcon icon={faLinkedin} size="2x"
                        className="icon-social-icons__footer" 
                        aria-label="Link do Linkedin do Desenvolvedor Elemar"/>
                </a>
                <a href="https://www.instagram.com/dev.elemarleonel/"
                target="__blank">
                    <FontAwesomeIcon icon={faInstagram} size="2x"
                        className="icon-social-icons__footer" 
                        aria-label="Link do Github do Desenvolvedor Elemar"/>
                </a>
            </div>
        </footer>
    )
}