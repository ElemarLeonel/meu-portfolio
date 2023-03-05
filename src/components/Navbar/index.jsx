import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Switcher from '../Switcher'

export default function Navbar() {

    return (
        <div className="navbar bg-primary">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle 
                    swap swap-rotate">
                        <input type="checkbox" hidden/>
                        <FontAwesomeIcon icon={faBars}
                            className="w-5 h-5 swap-off text-secondary" />
                        <FontAwesomeIcon icon={faCircleXmark}
                            className="w-5 h-5 swap-on text-secondary" />
                    </label>
                    <ul tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 
                        shadow bg-accent rounded-box w-52">
                        <li><a href="#about">Sobre Mim</a></li>
                        <li><a href="#features">Recursos</a></li>
                        <li><a href="#projects">Projetos</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost normal-case text-xl text-secondary 
                hover:bg-accent hover:text-primary">
                    dev.elemarleonel
                </a>
            </div>
            <div className="navbar-end">
                <Switcher />
            </div>
        </div>
    )
}