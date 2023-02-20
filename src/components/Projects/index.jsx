import { projects } from "./projects"

export default function Projects() {
    return (
        <div className="flex-col bg-neutral mt-2 mb-2 p-4">
            <div>
                <h1 className="text-primary text-center font-bold text-3xl">
                    Projetos
                </h1>
            </div>
            <div className="justify-between">
            {projects.map((project) => (
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={project.image} alt={project.alt} 
                    className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{project.title}</h2>
                    <p>{project.description}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">
                            <a href={project.link} className="text-secondary">
                            Acesse Agora
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            ))}
            </div>
        </div>
    )
}