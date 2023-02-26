export default function Features() {
    return (
        <section class="bg-primary" id="features">
            <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div class="mb-8 lg:mb-16">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-secondary text-center">
                        Ajudo a apresentar sua empresa no digital
                    </h2>
                    <p class="text-accent sm:text-xl text-center">
                        Ofereço soluções completas para o desenvolvimento de
                        websites profissionais e atrantes para o seu negócio
                        alavancar nas plataformas digitais.
                    </p>
                </div>
                <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    <div>
                        <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                className="w-5 h-5 lg:w-6 lg:h-6 text-secondary">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                            </svg>
                        </div>
                        <h3 class="text-secondary mb-2 text-xl font-bold">
                            Criação de Sites
                        </h3>
                        <p class="text-accent">
                            Sua empresa tornará mais profissional e atraente para apresentar
                            seus serviços e produtos. E o melhor de tudo: Podendo ser
                            acessado de qualquer lugar do mundo.
                        </p>
                    </div>

                    <div>
                        <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                className="w-5 h-5 lg:w-6 lg:h-6 text-secondary">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                            </svg>
                        </div>
                        <h3 class="text-secondary mb-2 
                            text-xl font-bold dark:text-white">
                            SEO
                        </h3>
                        <p class="text-accent">
                            SEO é um conjunto de técnicas que visam melhorar a visibilidade
                            de um site nos resultados de buscas do Google, trazendo um maior
                            alcance de clientes para o seu negócio.
                        </p>
                    </div>

                    <div>
                        <div class="flex justify-center items-center mb-4 w-10 
                        h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 
                        dark:bg-primary-900">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                className="w-5 h-5 lg:w-6 lg:h-6 text-secondary">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                            </svg>
                        </div>
                        <h3 class="text-secondary mb-2 text-xl font-bold dark:text-white">
                            Análise de Dados
                        </h3>
                        <p class="text-accent dark:text-gray-400">
                            Analisar os dados para identificar tendências,
                            oportunidades e áreas de melhoria para maximizar o
                            sucesso da sua empresa.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}