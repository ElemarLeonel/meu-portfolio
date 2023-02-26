export default function Contact() {
    return (
        <section class="bg-accent dark:bg-primary" id="contact">
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold 
                text-center text-primary dark:text-secondary">
                    Entre em contato
                </h2>
                <p class="mb-8 lg:mb-16 font-light text-center text-primary 
                dark:text-accent sm:text-xl">
                    Está precisando alavancar sua empresa no digital? Você pode estar
                    entrando em contato comigo para saber mais e tirar as suas dúvidas. 
                    Vai ser um prazer poder te ajudar!
                </p>
                <form action="#" class="space-y-8">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-bold 
                        text-primary dark:text-secondary">
                            Seu email
                        </label>
                        <input type="email" id="email" 
                            class="shadow-sm bg-gray-50 border 
                            border-gray-300 text-primary text-sm 
                            rounded-lg focus:ring-primary-500 
                            focus:border-primary-500 block w-full p-2.5 
                            dark:bg-gray-700 dark:border-gray-600 
                            dark:placeholder-gray-400 dark:text-accent 
                            dark:focus:ring-primary-500 dark:focus:border-primary-500 
                            dark:shadow-sm-light" 
                            placeholder="exemplo@exemplo.com" required />
                    </div>
                    <div>
                        <label for="subject" class="block mb-2 text-sm 
                        font-bold text-primary dark:text-secondary">
                            Assunto
                        </label>
                        <input type="text" id="subject" 
                        class="block p-3 w-full text-sm text-primary 
                        bg-gray-50 rounded-lg border border-gray-300 
                        shadow-sm focus:ring-primary-500 focus:border-primary-500 
                        dark:bg-gray-700 dark:border-gray-600 
                        dark:placeholder-gray-400 dark:text-accent 
                        dark:focus:ring-primary-500 dark:focus:border-primary-500 
                        dark:shadow-sm-light" 
                        placeholder="Deixe-nos saber como podemos ajudá-lo" 
                        required />
                    </div>
                    <div class="sm:col-span-2">
                        <label for="message" class="block mb-2 text-sm 
                        font-bold text-primary dark:text-secondary">
                            Sua mensagem
                        </label>
                        <textarea id="message" rows="6" 
                        class="block p-2.5 w-full text-sm 
                        text-primary bg-gray-50 rounded-lg 
                        shadow-sm border border-gray-300 
                        focus:ring-primary-500 focus:border-primary-500 
                        dark:bg-gray-700 dark:border-gray-600 
                        dark:placeholder-gray-400 dark:text-white" 
                        placeholder="Deixe um comentário...">    
                        </textarea>
                    </div>
                    <button type="submit" 
                    class="py-3 px-5 text-sm font-medium sm:w-fit
                    text-center rounded-lg 
                    text-secondary bg-primary
                    dark:bg-secondary dark:text-primary
                    hover:bg-accent hover:dark:bg-accent">
                        Enviar Mensagem
                    </button>
                </form>
            </div>
        </section>
    )
}