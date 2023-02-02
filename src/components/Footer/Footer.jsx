import LightLogo from '../../assets/lightLogo.png'
import './Footer.css'

function Footer() {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <div className="footerContainer">
      <img src={LightLogo} alt="logo Kasa light" />
      <p>© {year} Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer
