import ElemarPerfil from '../../assets/images/ElemarPerfil.webp';

export default function Hero() {
    return (
        <div className="hero min-h-screen bg-accent dark:bg-primary">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={ElemarPerfil}
                    className="w-auto sm:max-w-sm rounded-lg shadow-2xl
                dark:border-4 dark:border-accent"
                    width={300}
                    height={300} />
                <div className="flex flex-col items-center md:items-start">
                    <h1 className="text-5xl font-bold font-sans text-primary
                    dark:text-secondary">
                        Elemar Leonel
                    </h1>
                    <p className="py-6 font-sans text-primary dark:text-accent">
                        Sou um desenvolvedor front-end apaixonado por criar
                        interfaces de usuário elegantes e responsivas.
                        Possuo conhecimentos sólidos em HTML, CSS e Javascript e
                        também utilizo React para as aplicações. Estou sempre
                        em busca de novas tecnologias e tendências e procuro
                        aperfeiçoar constantemente minhas habilidades.
                    </p>
                    <button className="btn btn-secondary w-3/4 md:w-1/2">
                        <a href="https://api.whatsapp.com/send?phone=5569981066962&text=Oi."
                            className="text-primary font-sans dark:text-primary">
                            Entre em Contato
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}