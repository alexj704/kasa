import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import Error from "../../components/Error/Error"
import Collapse from '../../components/Collapse/Collapse'
import styles from "./Accomodation.module.css"
import Slideshow from "../../components/Slideshow/Slideshow"


function Accomodation() {
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const params = useParams()

    useEffect(() => {
        fetch('../logements.json')
          .then((response) => response.json())
          .then((data) => setData(data))
          .catch((error) => {
            console.log(error)
            setError(true)
          })
      }, [])

      const accomodation = data.find(element => element.id === params.id)

      return (
        <div>
            {accomodation === undefined ? <Error /> : (
                <div className={styles.main}>
                <Slideshow picture={accomodation.pictures}/>
                <div className={styles.accomodationInfos}>
                  <div className={styles.nameAndLocation}>
                    <h2 className={styles.title}>{accomodation.title}</h2>
                    <span className={styles.location}>{accomodation.location}</span>
                  </div>
                </div>
                <Collapse title="Description" description={accomodation.description} />
                <Collapse title="Equipements" description={accomodation.equipments} />
                </div>
            )
        }
        </div>
      )

}

export default Accomodation