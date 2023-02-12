import styles from './Slideshow.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function Slideshow({ picture, imgalt }) {
  const [pictureNumber, setPictureNumber] = useState(0)

  function slideLeftFunc() {
    pictureNumber === 0
      ? setPictureNumber(picture.length - 1)
      : setPictureNumber(pictureNumber - 1)
  }

  function slideRightFunc() {
    pictureNumber === picture.length - 1
      ? setPictureNumber(0)
      : setPictureNumber(pictureNumber + 1)
  }

  return (
    <div className={styles.slideshowContainer}>
      <img
        src={picture[pictureNumber]}
        alt={imgalt}
        className={styles.slideshowImage}
      />
      {picture.length === 1 ? (
        ''
      ) : (
        <div>
          <button className={styles.slideshowIconLeft} onClick={slideLeftFunc}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            className={styles.slideshowIconRight}
            onClick={slideRightFunc}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <span className={styles.slideshowPicturesNumber}>
            {pictureNumber + 1}/{picture.length}
          </span>
        </div>
      )}
    </div>
  )
}

export default Slideshow
