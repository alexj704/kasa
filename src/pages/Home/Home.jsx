import { useEffect, useState } from 'react'
import styles from './Home.module.css'
import Card from '../../components/Card/Card'

function Home() {
  const [data, setData] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    document.title = 'Bienvenue sur Kasa'
  }, [])

  useEffect(() => {
    fetch('logements.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.log(error)
        setError(true)
      })
  }, [])

  return (
    <main className={styles.homeContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.homeTitle}>Chez vous, partout et ailleurs</h1>
      </div>
      <div className={styles.accomodationsContainer}>
        <ul className={styles.accomodationsList}>
          {error ? (
            <span className={styles.errorText}>Oups il y a une erreur</span>
          ) : (
            data.map((profile) => (
              <Card
                key={profile.id}
                title={profile.title}
                picture={profile.cover}
                id={profile.id}
              />
            ))
          )}
        </ul>
      </div>
    </main>
  )
}

export default Home
