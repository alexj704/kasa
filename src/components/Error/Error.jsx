import errorLogo from "../../assets/404.svg"
import './Error.css'
import { Link } from "react-router-dom"

function Error() {
  return (
    <main className="errorContainer">
      <img src={errorLogo} alt="logo 404" className="errorLogo"/>
      <span className="notFoundText">Oups! La page que vous demandez n'existe pas.</span>
      <Link to="/" className="homeLink">Retourner sur la page d'accueil</Link>
    </main>
  )
}

export default Error
