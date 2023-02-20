export default function Navbar() {
    return (
        <div className="navbar bg-primary">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl text-secondary">
                    dev.elemarleonel
                </a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li className="text-secondary hover:bg-neutral rounded-sm">
                        <a>Sobre Mim</a>
                    </li>
                    <li className="text-secondary hover:bg-neutral rounded-sm">
                        <a>Projetos</a>
                    </li>
                    <li className="text-secondary hover:bg-neutral rounded-sm">
                        <a>Contato</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}