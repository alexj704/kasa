import errorLogo from '../../assets/404.svg'
import styles from './Error.module.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function Error() {
  useEffect(() => {
    document.title = 'Page non trouvée - Kasa'
  }, [])

  return (
    <main className={styles.errorContainer}>
      <img src={errorLogo} alt="logo 404" className={styles.errorLogo} />
      <span className={styles.notFoundText}>
        Oups! La page que vous demandez n'existe pas.
      </span>
      <Link to="/" className={styles.homeLink}>
        Retourner sur la page d'accueil
      </Link>
    </main>
  )
}

export default Error
