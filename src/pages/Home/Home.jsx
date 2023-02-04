import { useEffect, useState } from 'react'
import './Home.css'
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
    <main className="homeContainer">
      <div className="titleContainer">
        <h1 className="homeTitle">Chez vous, partout et ailleurs</h1>
      </div>
      <div className="accomodationsContainer">
        <ul className="accomodationsList">
          {error ? (
            <span className="errorText">Oups il y a une erreur</span>
          ) : (
            data.map((profile) => (
              <Card
                key={profile.id}
                title={profile.title}
                picture={profile.cover}
              />
            ))
          )}
        </ul>
      </div>
    </main>
  )
}

export default Home
