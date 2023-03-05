import { Suspense, lazy } from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'
import Spinner from '../../components/Spinner'

const About = lazy(() => import('../../components/About'))
const Features = lazy(() => import('../../components/Features'))
const Projects = lazy(() => import('../../components/Projects'))
const Contact = lazy(() => import('../../components/Contact'))

const Home = () => {
    return (
        <>
            <Navbar />
            <Suspense fallback={<Spinner />} >
                <Hero />
                <About />
                <Features />
                <Projects />
                <Contact />
            </Suspense>
            <Footer />
        </>
    )
}

export default Home;