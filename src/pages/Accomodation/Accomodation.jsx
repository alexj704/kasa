import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Error from '../../components/Error/Error'
import Collapse from '../../components/Collapse/Collapse'
import styles from './Accomodation.module.css'
import Slideshow from '../../components/Slideshow/Slideshow'
import Tags from '../../components/Tags/Tags'
import Rating from '../../components/Rating/Rating'

function Accomodation() {
  const [data, setData] = useState([])
  const params = useParams()

  useEffect(() => {
    fetch('../logements.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const accomodation = data.find((element) => element.id === params.id)

  return (
    <div>
      {accomodation === undefined ? (
        <Error />
      ) : (
        <div className={styles.main}>
          <Slideshow
            picture={accomodation.pictures}
            imgalt={accomodation.title}
          />
          <div className={styles.accomodationInfos}>
            <div className={styles.nameAndLocation}>
              <h2 className={styles.title}>{accomodation.title}</h2>
              <span className={styles.location}>{accomodation.location}</span>
              <ul className={styles.tagsList}>
                {accomodation.tags.map((accomodation, index) => (
                  <Tags key={index} tags={accomodation} />
                ))}
              </ul>
            </div>
            <div className={styles.hostAndRating}>
              <div className={styles.hostContainer}>
                <span className={styles.hostName}>
                  {accomodation.host.name}
                </span>
                <img
                  src={accomodation.host.picture}
                  alt={accomodation.host.name}
                  className={styles.hostPicture}
                />
              </div>
              <div className={styles.ratingContainer}>
                <Rating rating={accomodation.rating} />
              </div>
            </div>
          </div>
          <div className={styles.descriptionAndEquipments}>
            <Collapse
              title="Description"
              description={accomodation.description}
            />
            <Collapse
              title="Equipements"
              description={accomodation.equipments}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Accomodation
