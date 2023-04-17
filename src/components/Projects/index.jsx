import { projects } from "./projects"
import { AnimationOnScroll } from "react-animation-on-scroll"
import './index.css'

export default function Projects() {
    return (
        <section className="projects" id="projects">
            <div className="header__projects">
                <AnimationOnScroll animateIn="animate__zoomIn">
                    <h2 className="title-top__projects">
                        Projetos
                    </h2>
                </AnimationOnScroll>
            </div>
            <div className="content__projects">
                {projects.map((project) => (
                    <div className="card-content__projects" key={project.key}>
                        <AnimationOnScroll animateIn="animate__fadeInUp">
                            <figure className="figure-card-content__projects">
                                <img src={project.image} alt={project.alt}
                                    className="rounded-xl" 
                                    width={project.width}
                                    height={project.height} />
                            </figure>
                            <div className="card-body body-card-content__projects">
                                <h2 className="card-title title-body-card-content__projects">
                                    {project.title}
                                </h2>
                                <p className="description-body-card-content__projects">
                                    {project.description}
                                </p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">
                                        <a href={project.link}>
                                            Acesse Agora
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </AnimationOnScroll>
                    </div>
                ))}
            </div>
        </section>
    )
}