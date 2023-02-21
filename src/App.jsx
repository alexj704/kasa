import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'normalize.css'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Error from './components/Error/Error'
import About from './pages/About/About'
import Accomodation from './pages/Accomodation/Accomodation'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/notfound" element={<Error />} />
        <Route path="/accomodations/:id" element={<Accomodation />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
