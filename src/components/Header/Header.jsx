import { Link } from 'react-router-dom'
import './Header.css'
import Logo from '../../assets/logo.png'

function Header() {
  return (
    <div className="headerContainer">
      <img src={Logo} id="logo" alt="Logo Kasa" />
      <div className="navContainer">
        <Link id="home" to="/">
          Accueil
        </Link>
        <Link id="about" to="/">
          A propos
        </Link>
      </div>
    </div>
  )
}

export default Header
