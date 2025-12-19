import logo from '../../images/header_img.svg'
import '../../index.css'

function Header() {
    return (
        <header className="header page__section">
                    <img className="header__logo" src={logo} alt="logo header"/>
        </header>
    )
}

export default Header;