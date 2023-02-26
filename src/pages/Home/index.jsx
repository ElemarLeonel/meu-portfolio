import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import About from '../../components/About'
import Features from '../../components/Features'
import Projects from '../../components/Projects'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Features />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}

export default Home;