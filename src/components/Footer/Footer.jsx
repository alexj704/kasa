import LightLogo from '../../assets/lightLogo.png'
import styles from './Footer.module.css'

function Footer() {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <footer className={styles.footerContainer}>
      <img src={LightLogo} alt="logo Kasa light" className={styles.footerLogo} />
      <p className={styles.footerText}>© {year} Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
