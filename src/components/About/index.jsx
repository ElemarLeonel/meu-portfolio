import {
    faPlay,
    faMagnifyingGlass,
    faQuestion,
    faArchway
}
    from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { AnimationOnScroll } from "react-animation-on-scroll"
import './index.css'

export default function About() {

    return (
        <section className="about" id="about">
            <div>
                <AnimationOnScroll animateIn="animate__backInDown">
                    <h2 className="title__about">
                        Sobre Mim
                    </h2>
                </AnimationOnScroll>
            </div>
            <div className="details__about">
                <ol className="list-details__about">
                    <li className="item-list-details__about">

                        <span className="icon-item-list-details__about">
                            <FontAwesomeIcon icon={faPlay}
                                className="text-primary dark:text-neutral" />
                        </span>
                        <AnimationOnScroll animateIn="animate__bounceInRight">
                            <h3 className="title-item-list-details__about">
                                O Início
                            </h3>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__bounceInRight">
                            <time className="date-item-list-details__about">
                                2011
                            </time>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__bounceInRight">
                            <p className="description-item-list-details__about">
                                Minha história começa em casa, desde aproximadamente
                                meus 10 anos de idade, onde eu comecei a dar meus primeiros
                                passos mexendo no computador que eu tinha em casa.
                                Só que como tinha pouca idade, na época, ainda
                                estava bem nos primórdios da internet. Lembro que na
                                época utilizávamos MSN e Orkut para comunicação e
                                uma internet bem lenta.
                            </p>
                        </AnimationOnScroll>
                    </li>
                    <li className="item-list-details__about">
                        <span className="icon-item-list-details__about">
                            <FontAwesomeIcon icon={faMagnifyingGlass}
                                className="text-primary dark:text-neutral" />
                        </span>
                        <AnimationOnScroll animateIn="animate__bounceInRight">
                            <h3 className="title-item-list-details__about">
                                O Descobrimento
                            </h3>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__bounceInRight">
                            <time className="date-item-list-details__about">
                                2014
                            </time>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__bounceInRight">
                            <p className="description-item-list-details__about">
                                Aos meus 14 anos, ingressei em uma turma de Jovem Aprendiz
                                pela instituição SENAC aqui da minha cidade, e nesse curso,
                                adquiri conhecimentos básicos na área de informática,
                                como mexer em planilhas, documentos, sistemas operacionais,
                                onde foi me aguçando o gosto pela área da tecnologia.
                            </p>
                        </AnimationOnScroll>
                    </li>
                    <li className="item-list-details__about">
                        <span className="icon-item-list-details__about">
                            <FontAwesomeIcon icon={faQuestion}
                                className="text-primary dark:text-neutral" />
                        </span>
                        <AnimationOnScroll animateIn="animate__bounceInRight">
                            <h3 className="title-item-list-details__about">
                                Um Questionamento
                            </h3>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__bounceInRight">
                            <time className="date-item-list-details__about">
                                2016
                            </time>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__bounceInRight">
                            <p className="description-item-list-details__about">
                                Ao final do meu 3º ano do Ensino Médio, com uns 17 anos
                                de idade, um colega me falou que iria fazer uma faculdade
                                na área de tecnologia e perguntou se iria fazer junto com ele.
                                Confesso que fiquei meio com um pé atrás, pois seriam
                                4 anos da minha vida que poderiam estar em jogo,
                                onde poderia estar fazendo outras atividades, me divertindo,
                                enfim… Decidi entrar junto com ele nessa “empreitada”.
                                Eu principalmente, tive um pouco de dificuldade para
                                entender algumas das matérias, porém, segui firme e
                                finalizei a faculdade de Sistemas de Informação.
                            </p>
                        </AnimationOnScroll>
                    </li>
                    <li className="item-list-details__about">
                        <span className="icon-item-list-details__about">
                            <FontAwesomeIcon icon={faArchway}
                                className="text-primary dark:text-neutral" />
                        </span>
                        <AnimationOnScroll animateIn="animate__bounceInRight">
                            <h3 className="title-item-list-details__about">
                                No Caminho
                                <span className="badge-title-item-list-details__about">
                                    Atual
                                </span>
                            </h3>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__bounceInRight">
                            <time className="date-item-list-details__about">
                                2023
                            </time>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__bounceInRight">
                            <p className="description-item-list-details__about">
                                Atualmente, trabalho como Técnico em Informática em uma
                                empresa aqui na cidade onde resido. Propus o desafio a
                                mim mesmo, e conversando com meus superiores,
                                decidi desenvolver o site da empresa onde trabalho.
                                Claro, não ficou das melhores formas possíveis, porém,
                                fiz com bastante carinho e dedicação.
                            </p>
                        </AnimationOnScroll>
                    </li>
                </ol>
            </div>
        </section>
    )
}