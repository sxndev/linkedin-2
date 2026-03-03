import logo from '../../images/logo.png'
import './Header.css'
export const Header = () => {
    return (
        <header id="header">
            <div id="logo-container">
                <img src={logo}  alt="Logo do LinkedIn" id="logo" />
                <h1>LinkedIn 2.0</h1>
            </div>
 
            <nav>
                <ul id="nav-list">
                    <li><a href="">Início</a></li>
                    <li><a href="">Feedback</a></li>
                    <li><a href="">Sobre nós</a></li>
                </ul>
            </nav> 
        </header>
    )
}