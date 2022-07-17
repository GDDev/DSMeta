import logo from '../../assets/img/logo.svg';

import './styles.css';

function Header() {

    return (
        <header>
            <div className="dsmeta-logo-container">
                <nav className="dsmeta-logo-container">
                    <figure>
                        <img src={logo} alt="DSMeta logo" id="logo" />
                    </figure>
                    <h1 className="nav-title">DSMeta</h1>
                    <p className="nav-dev">Desenvolvido por <a href="https://github.com/GDDev">@GDDev</a></p>
                </nav>
            </div>
        </header>
    )
}

export default Header;