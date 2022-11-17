import logo from '../../assets/img/logo.svg';

import './styles.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="Logo DSMeta" />
                <h1>DSMeta</h1>
                <p>Replicado por <a href="https://github.com/rafaelmaiia" target="_blank" rel="external">Rafael Maia</a> / Projeto Semana Spring React -
                <a href="https://www.instagram.com/devsuperior.ig" target="_blank" rel="external">Nelio Alves</a></p>
            </div>
        </header>
    )
}

export default Header;