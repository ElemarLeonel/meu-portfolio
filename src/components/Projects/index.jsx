import { projects } from "./projects"

export default function Projects() {
    return (
        <section className="flex-col bg-gray-200 dark:bg-primary p-4" id="projects">
            <div className="mb-10 mt-10">
                <h1 className="text-primary text-center font-bold text-3xl
                dark:text-secondary">
                    Projetos
                </h1>
            </div>
            <div className="flex flex-row flex-wrap gap-5 justify-between mx-10 my-10">
                {projects.map((project) => (
                    <div className="card w-96 sm:w-1/2 md:w-1/4 bg-accent 
                    hover:bg-secondary shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={project.image} alt={project.alt}
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title font-sans font-bold text-primary">
                                {project.title}
                            </h2>
                            <p className="text-primary mt-2 mb-2">
                                {project.description}
                            </p>
                            <div className="card-actions">
                                <button className="btn btn-primary">
                                    <a href={project.link}
                                        className="text-secondary">
                                        Acesse Agora
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}