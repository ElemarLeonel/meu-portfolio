import ElemarPerfil from '../../assets/images/ElemarPerfil.webp';
import './index.css';
import Curriculo from '../../assets/curriculo.pdf'

export default function Hero() {
    return (
        <header className="hero__main">
            <div className="hero__content">
                <img src={ElemarPerfil}
                    className="img-main__hero"
                    width={300}
                    height={300}
                    alt="Foto do Desenvolvedor Elemar Leonel com terno" />
                <div className="details__hero">
                    <h1 className="my-name__hero">
                        Elemar Leonel
                    </h1>
                    <p className="description__hero">
                        Sou um desenvolvedor front-end apaixonado por criar
                        interfaces de usuário elegantes e responsivas.
                        Possuo conhecimentos sólidos em HTML, CSS e Javascript e
                        também utilizo React para as aplicações. Estou sempre
                        em busca de novas tecnologias e tendências e procuro
                        aperfeiçoar constantemente minhas habilidades.
                    </p>
                    <a className="btn-contact__hero"
                    href={Curriculo} download={true}>
                        Download CV
                    </a>
                </div>
            </div>
        </header>
    )
}