import styles from "./Slideshow.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"

function Slideshow({picture}) {

  const [pictureNumber, setPictureNumber] = useState(0)

  function slideLeftFunc() {
    pictureNumber === 0 ? setPictureNumber(picture.length -1) : setPictureNumber(pictureNumber -1)
  }

  function slideRightFunc() {
    pictureNumber === picture.length -1 ? setPictureNumber(0) : setPictureNumber(pictureNumber +1)
  }


return (
  <div className={styles.slideshowContainer}>
    <img src={picture[pictureNumber]} alt="azf" className={styles.slideshowImage}/>
    <span className={styles.slideshowIconLeft} onClick={slideLeftFunc}>{picture.length === 1 ? "" : <FontAwesomeIcon icon={faChevronLeft} />}</span>
    <span className={styles.slideshowIconRight} onClick={slideRightFunc}>{picture.length === 1 ? "" : <FontAwesomeIcon icon={faChevronRight} />}</span>
    <span className={styles.slideshowPicturesNumber}>{pictureNumber + 1 }/{picture.length}</span>

  </div>
)
}

export default Slideshow


