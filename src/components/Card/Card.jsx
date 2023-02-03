import './Card.css'

function Card({ picture, title }) {
  return (
    <li className="cardContainer">
      <span className="cardTitle">{title}</span>
      <img src={picture} alt="accomodation" className="cardImage" />
    </li>
  )
}

export default Card
