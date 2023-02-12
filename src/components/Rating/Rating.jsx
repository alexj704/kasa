import RedStar from '../../assets/Red-Star.svg'
import GreyStar from '../../assets/Grey-Star.svg'
import styles from './Rating.module.css'

function Rating({ rating }) {
  const range = [1, 2, 3, 4, 5]

  return range.map((rangeElem) =>
    rating >= rangeElem ? (
      <span key={rangeElem.toString()}>
        <img className={styles.starIcon} src={RedStar} alt="red star" />
      </span>
    ) : (
      <span key={rangeElem.toString()}>
        <img className={styles.starIcon} src={GreyStar} alt="grey star" />
      </span>
    )
  )
}

export default Rating
