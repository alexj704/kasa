import LightLogo from '../../assets/lightLogo.png'
import './Footer.css'

function Footer() {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <footer className="footerContainer">
      <img src={LightLogo} alt="logo Kasa light" className="footerLogo" />
      <p className="footerText">© {year} Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
