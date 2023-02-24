import { faPlay, 
         faMagnifyingGlass, 
         faCircleQuestion,
         faArchway } 
        from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function About() {

    return (
        <section className="flex flex-col items-center bg-secondary p-10 gap-5">
            <div>
                <h1 className="text-3xl font-sans font-bold text-primary">
                    Sobre Mim
                </h1>
            </div>
            <div className="w-1/2">
                <ol class="relative border-l border-gray-200">
                    <li class="mb-10 ml-6">
                        <span class="absolute flex items-center justify-center w-6 
                        h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
                            <FontAwesomeIcon icon={faPlay} />
                        </span>
                        <h3 class="flex items-center mb-1 ml-2 text-lg font-semibold text-primary">
                            O Início
                        </h3>
                        <time class="block mb-2 ml-2 text-sm font-normal leading-none 
                    text-accent">
                            2011
                        </time>
                        <p class="mb-4 ml-2 text-base font-normal text-primary">
                            Minha história começa em casa, desde aproximadamente 
                            meus 10 anos de idade, onde eu comecei a dar meus primeiros 
                            passos mexendo no computador que eu tinha em casa. 
                            Só que como tinha pouca idade, na época, ainda 
                            estava bem nos primórdios da internet. Lembro que na
                            época utilizávamos MSN e Orkut para comunicação e 
                            uma internet bem lenta.
                        </p>
                    </li>
                    <li class="mb-10 ml-6">
                        <span class="absolute flex items-center justify-center w-6 
                        h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </span>
                        <h3 class="mb-1 ml-2 text-lg font-semibold text-primary">
                            O Descobrimento
                        </h3>
                        <time class="block mb-2 ml-2 text-sm font-normal leading-none 
                    text-accent">
                            2014
                        </time>
                        <p class="text-base ml-2 font-normal text-primary">
                            Aos meus 14 anos, ingressei em uma turma de Jovem Aprendiz 
                            pela instituição SENAC aqui da minha cidade, e nesse curso, 
                            adquiri conhecimentos básicos na área de informática, 
                            como mexer em planilhas, documentos, sistemas operacionais, 
                            onde foi me aguçando o gosto pela área da tecnologia.
                        </p>
                    </li>
                    <li class="ml-6 mb-10">
                        <span class="absolute flex items-center justify-center w-6 
                        h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
                            <FontAwesomeIcon icon={faCircleQuestion} />
                        </span>
                        <h3 class="mb-1 ml-2 text-lg font-semibold text-primary">
                            Um Questionamento
                        </h3>
                        <time class="block mb-2 ml-2 text-sm font-normal leading-none 
                    text-accent">
                            2016
                        </time>
                        <p class="text-base ml-2 font-normal text-gray-500">
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
                    </li>
                    <li class="ml-6">
                        <span class="absolute flex items-center justify-center w-6 
                        h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
                            <FontAwesomeIcon icon={faArchway} />
                        </span>
                        <h3 class="mb-1 ml-2 text-lg font-semibold text-primary">
                            No Caminho
                            <span class="bg-accent text-primary text-sm 
                            font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
                                Atual
                            </span>
                        </h3>
                        <time class="block mb-2 ml-2 text-sm font-normal leading-none 
                    text-accent">
                            Present, 2023
                        </time>
                        <p class="text-base ml-2 font-normal text-primary">
                            Atualmente, trabalho como Técnico em Informática em uma 
                            empresa aqui na cidade onde resido. Propus o desafio a 
                            mim mesmo, e conversando com meus superiores, 
                            decidi desenvolver o site da empresa onde trabalho. 
                            Claro, não ficou das melhores formas possíveis, porém, 
                            fiz com bastante carinho e dedicação.
                        </p>
                    </li>
                </ol>
            </div>
        </section>
    )
}