import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Collapse from '../../components/Collapse/Collapse'
import styles from './Accomodation.module.css'
import Slideshow from '../../components/Slideshow/Slideshow'
import Tags from '../../components/Tags/Tags'
import Rating from '../../components/Rating/Rating'

function Accomodation() {
  const [data, setData] = useState({
    id: '',
    title: '',
    cover: '',
    pictures: [],
    description: '',
    host: {
      name: '',
      picture: '',
    },
    rating: '',
    location: '',
    equipments: [],
    tags: [],
  })
  const params = useParams()
  const Navigate = useNavigate()

  useEffect(() => {
    fetch('../logements.json')
      .then((response) => response.json())
      .then((data) => {
        const accomodation = data.find((element) => element.id === params.id)
        if (accomodation === undefined) {
          Navigate('/notfound')
        } else {
          setData(accomodation)
          document.title = `${accomodation.title} - Kasa`
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }, [Navigate, params])

  return (
    <div>
      <div className={styles.main}>
        <Slideshow picture={data.pictures} imgalt={data.title} />
        <div className={styles.accomodationInfos}>
          <div className={styles.nameAndLocation}>
            <h2 className={styles.title}>{data.title}</h2>
            <span className={styles.location}>{data.location}</span>
            <ul className={styles.tagsList}>
              {data.tags.map((accomodation, index) => (
                <Tags key={index} tags={accomodation} />
              ))}
            </ul>
          </div>
          <div className={styles.hostAndRating}>
            <div className={styles.hostContainer}>
              <span className={styles.hostName}>{data.host.name}</span>
              <img
                src={data.host.picture}
                alt={data.host.name}
                className={styles.hostPicture}
              />
            </div>
            <div className={styles.ratingContainer}>
              <Rating rating={data.rating} />
            </div>
          </div>
        </div>
        <div className={styles.descriptionAndEquipments}>
          <Collapse title="Description" description={data.description} />
          <Collapse title="Equipements" description={data.equipments} />
        </div>
      </div>
    </div>
  )
}

export default Accomodation
