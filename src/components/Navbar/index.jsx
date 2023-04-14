import { useState, useEffect } from 'react';
import { faBars, faXmarkCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './index.css'
import Switcher from '../Switcher'

function Navbar() {
    const [enableMenu, setEnableMenu] = useState(false);

    useEffect(() => {
        console.log("enableMenu atualizado:", enableMenu);
    }, [enableMenu]);

    function toggleMenu() {
        setEnableMenu((prevState) => !prevState);
    }

    return (
        <section className="navbar__hero">
            <div className="navbar-start">
                <div className="dropdown">
                    <label
                        tabIndex={0}
                        className="btn-menu__hero">
                        <input type="checkbox" hidden />
                        <FontAwesomeIcon
                            icon={enableMenu ? faXmarkCircle : faBars}
                            className={`w-5 h-5 swap-off text-secondary ${enableMenu ? "rotate-45 swap-on" : ""
                                }`}
                            onClick={toggleMenu}
                        />
                    </label>
                    <ul
                        tabIndex={0}
                        className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-accent rounded-box w-52 ${enableMenu ? "block" : "hidden"
                            }`}
                    >
                        <li>
                            <a href="#about">Sobre Mim</a>
                        </li>
                        <li>
                            <a href="#features">Recursos</a>
                        </li>
                        <li>
                            <a href="#projects">Projetos</a>
                        </li>
                        <li>
                            <a href="#contact">Contato</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a className="btn-my-name__hero">
                    dev.elemarleonel
                </a>
            </div>
            <div className="navbar-end">
                <Switcher />
            </div>
        </section>

    );
}

export default Navbar;