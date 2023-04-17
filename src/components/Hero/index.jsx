import ElemarPerfil from '../../assets/images/ElemarPerfil.webp';
import './index.css';
import Curriculo from '../../assets/curriculo.pdf'

export default function Hero() {
    return (
        <header className="hero__main">
            <div className="content-hero__main">
                <img src={ElemarPerfil}
                    className="content-hero-img__main"
                    width={300}
                    height={300}
                    alt="Foto do Desenvolvedor Elemar Leonel com terno" />
                <div className="content-hero-details__main">
                    <h1 className="content-hero-details-my-name__main">
                        Elemar Leonel
                    </h1>
                    <p className="content-hero-details-description__main">
                        Sou um desenvolvedor front-end apaixonado por criar
                        interfaces de usuário elegantes e responsivas.
                        Possuo conhecimentos sólidos em HTML, CSS e Javascript e
                        também utilizo React para as aplicações. Estou sempre
                        em busca de novas tecnologias e tendências e procuro
                        aperfeiçoar constantemente minhas habilidades.
                    </p>
                    <a className="content-hero-details-btn-contact__hero"
                    href={Curriculo} download={true}>
                        Download CV
                    </a>
                </div>
            </div>
        </header>
    )
}