import ElemarPerfil from '../../assets/images/ElemarPerfil.jpg';

export default function Hero() {
    return (
        <div className="hero min-h-screen bg-tertiary">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={ElemarPerfil} 
                className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold font-cursive text-primary">
                        Elemar Leonel
                    </h1>
                    <p className="py-6 font-sans">
                        Sou um desenvolvedor front-end apaixonado por criar
                        interfaces de usuário elegantes e responsivas. 
                        Possuo conhecimentos sólidos em HTML, CSS e Javascript e
                        também utilizo React para as aplicações. Estou sempre
                        em busca de novas tecnologias e tendências e procuro
                        aperfeiçoar constantemente minhas habilidades.
                    </p>
                    <button className="btn btn-secondary">
                        <a href="https://api.whatsapp.com/send?phone=5569981066962&text=Oi." 
                        className="text-primary font-sans">
                            Entre em Contato
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}