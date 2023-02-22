export default function Navbar() {
    return (
        <div className="navbar bg-primary">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" 
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" 
                            strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </label>
                    <ul tabIndex={0} 
                    className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-accent rounded-box w-52">
                        <li><a>Habilidades</a></li>
                        <li><a>Projetos</a></li>
                        <li><a>Contato</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost normal-case text-xl text-secondary hover:bg-accent hover:text-primary">
                    dev.elemarleonel
                </a>
            </div>
        </div>
    )
}