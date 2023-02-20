import { projects } from "./projects"

export default function Projects() {
    return (
        <div className="flex-col bg-gray-200 mt-2 mb-2 p-4">
            <div>
                <h1 className="text-primary text-center font-bold text-3xl
                font-cursive">
                    Projetos
                </h1>
            </div>
            <div className="justify-between">
            {projects.map((project) => (
            <div className="card w-96 hover:bg-secondary bg-base-100 shadow-xl">
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
        </div>
    )
}