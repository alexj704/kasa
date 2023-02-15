import styles from './Card.module.css'
import { Link } from 'react-router-dom'

function Card({ picture, title, id }) {
  return (
    <li className={styles.cardContainer}>
      <Link to={`/accomodations/${id}`}>
        <span className={styles.cardTitle}>{title}</span>
        <img src={picture} alt="accomodation" className={styles.cardImage} />
      </Link>
    </li>
  )
}

export default Card
