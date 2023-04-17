import { AnimationOnScroll } from "react-animation-on-scroll"
import {
  faGlobe,
  faRankingStar,
  faMagnifyingGlassChart
}
  from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './index.css'

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="content__features">
        <div className="top-content__features">
          <AnimationOnScroll animateIn="animate__slideInLeft">
            <h2 className="title-top-content__features">
              Ajudo a apresentar sua empresa no digital
            </h2>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__slideInLeft">
            <h3 className="description-top-content__features">
              Ofereço soluções completas para o desenvolvimento de
              websites profissionais e atrantes para o seu negócio
              alavancar nas plataformas digitais.
            </h3>
          </AnimationOnScroll>
        </div>

        <div className="bottom-content__features">
          <AnimationOnScroll animateIn="animate__slideInUp">
            <div className="card-bottom-content__features">
              <div className="icon-card-bottom-content__features">
                <FontAwesomeIcon icon={faGlobe} 
                className="fai-icon-card-bottom-content__features"/>
              </div>
              <h4 className="title-card-bottom-content__features">
                Criação de Sites
              </h4>
              <p className="description-card-bottom-content__features">
                Sua empresa tornará mais profissional e atraente para apresentar
                seus serviços e produtos. E o melhor de tudo: Podendo ser
                acessado de qualquer lugar do mundo.
              </p>
            </div>
          </AnimationOnScroll>

          <AnimationOnScroll animateIn="animate__slideInUp">
            <div className="card-bottom-content__features">
              <div className="icon-card-bottom-content__features">
              <FontAwesomeIcon icon={faRankingStar} 
                className="fai-icon-card-bottom-content__features"/>
              </div>
              <h4 className="title-card-bottom-content__features">
                SEO
              </h4>
              <p className="description-card-bottom-content__features">
                SEO é um conjunto de técnicas que visam melhorar a visibilidade
                de um site nos resultados de buscas do Google, trazendo um maior
                alcance de clientes para o seu negócio.
              </p>
            </div>
          </AnimationOnScroll>

          <AnimationOnScroll animateIn="animate__slideInUp">
            <div className="card-bottom-content__features">
              <div className="icon-card-bottom-content__features">
              <FontAwesomeIcon icon={faMagnifyingGlassChart} 
                className="fai-icon-card-bottom-content__features"/>
              </div>
              <h4 className="title-card-bottom-content__features">
                Análise de Dados
              </h4>
              <p className="description-card-bottom-content__features">
                Analisar os dados para identificar tendências,
                oportunidades e áreas de melhoria para maximizar o
                sucesso da sua empresa.
              </p>
            </div>
          </AnimationOnScroll>

        </div>
      </div>
    </section>
  )
}