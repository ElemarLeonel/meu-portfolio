import React from 'react'
import { AnimationOnScroll } from "react-animation-on-scroll"
import sendEmail from '../../services/email';
import './index.css'

export default function Contact() {

    const [isDisabled, setIsDisabled] = React.useState(false)

    const [fields, setFields] = React.useState({
        fullname: '',
        email: '',
        subject: '',
        message: ''
    })

    function handleInputChange(event) {
        fields[event.target.name] = event.target.value
        setFields(fields)
    }

    async function handleFormSubmit(event) {
        event.preventDefault()
        await sendEmail(fields)

        setFields({
            fullname: '',
            email: '',
            subject: '',
            message: ''
        })
        setIsDisabled(false)
    }

    return (
        <section className="contact" id="contact">
            <div className="header__contact">
                <AnimationOnScroll animateIn="animate__slideInRight">
                    <h2 className="title-header__contact">
                        Entre em contato
                    </h2>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__slideInRight">
                    <h3 className="description-header__contact">
                        Está precisando alavancar sua empresa no digital? Você pode estar
                        entrando em contato comigo para saber mais e tirar as suas dúvidas.
                        Vai ser um prazer poder te ajudar!
                    </h3>
                </AnimationOnScroll>
                <form className="form__contact" onSubmit={handleFormSubmit}>
                    <div className="container-form__contact">
                        <div>
                            <AnimationOnScroll animateIn="animate__slideInUp">
                                <label htmlFor="fullname" 
                                className="label-container-form__contact">
                                    Nome Completo
                                </label>
                                <input type="text" id="fullname" name="fullname"
                                    placeholder="Elemar Leonel" required 
                                    onChange={handleInputChange}/>
                            </AnimationOnScroll>
                        </div>
                        <div>
                            <AnimationOnScroll animateIn="animate__slideInUp">
                                <label htmlFor="email" 
                                className="label-container-form__contact">
                                    Email
                                </label>
                                <input type="email" id="email" name="email"
                                    placeholder="exemplo@exemplo.com" required 
                                    onChange={handleInputChange}/>
                            </AnimationOnScroll>
                        </div>
                        <div>
                            <AnimationOnScroll animateIn="animate__slideInUp">
                                <label htmlFor="subject">
                                    Assunto
                                </label>
                                <input type="text" id="subject" name="subject"
                                    placeholder="Digite o assunto que deseja informar"
                                    required onChange={handleInputChange}/>
                            </AnimationOnScroll>
                        </div>
                        <div className="sm:col-span-2">
                            <AnimationOnScroll animateIn="animate__slideInUp">
                                <label htmlFor="message">
                                    Mensagem
                                </label>
                                <textarea id="message" rows="6" name="message"
                                    placeholder="Deixe a sua mensagem que entrarei em contato o mais breve possível"
                                    onChange={handleInputChange}>
                                </textarea>
                            </AnimationOnScroll>
                        </div>
                    </div>
                    <div className="bottom-container-form__contact">
                        <AnimationOnScroll animateIn="animate__slideInUp">
                            <button type="submit"
                                disabled={isDisabled}>
                                Enviar Mensagem
                            </button>
                        </AnimationOnScroll>
                    </div>
                </form>
            </div>
        </section>
    )
}