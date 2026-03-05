import logo from '../../images/logo.png'
import './Header.css'
import { Link } from 'react-router-dom'
export const Header = () => {
    return (
        <header id="header">
            <div id="logo-container">
                <img src={logo}  alt="Logo do LinkedIn" id="logo" />
                <h1>LinkedIn 2.0</h1>
            </div>
 
            <nav>
                <ul id="nav-list">
                    <li><Link to="/">Início</Link></li>
                    {/* <li><Link to="/atualiza">O que mudou?</Link></li>  */}
                    <li><Link to="/sobre">Sobre nós</Link></li>
                </ul>
            </nav> 
        </header>
    )
}