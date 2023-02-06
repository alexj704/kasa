import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import Logo from '../../assets/logo.png'

function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src={Logo} className={styles.logo} alt="Logo Kasa" />
      <div className={styles.navContainer}>
        <Link id="home" to="/">
          Accueil
        </Link>
        <Link id="about" to="/about">
          A propos
        </Link>
      </div>
    </header>
  )
}

export default Header
