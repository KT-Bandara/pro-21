import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import img2 from './assets/react.svg'
import Home from '../src/components/Home'
import AOS from 'aos'
import 'aos/dist/aos.js'
import 'aos/dist/aos.css'
import Lectuer from './components/Lectuer'
import Pricing from './components/Pricing'
function App() {

  const [components, setComponents] = useState(<Home />)

  function setMenu(menu) {
    switch (menu) {
      case 'home': {
        setComponents(<Home />);
        break;
      }
      case 'lectuer': {
        setComponents(<Lectuer />);
        break;
      }
      case 'pricing': {
        setComponents(<Pricing/>);
        break;
      }
    }
  }

  useEffect(() => {
    AOS.init({
      duration: 3000
    })
  }, [])

  return (
    <div className='container'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img src={img2}></img>
          <a className="navbar-brand" href="#"></a>
          <span>ICET</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item btn">
                <a className="nav-link active" aria-current="page" 
                onClick={function() {setMenu('home')}}>Home</a>
              </li>
              <li className="nav-item btn">
                <a className="nav-link" onClick={function() {setMenu('lectuer')}}>Lectuer</a>
              </li>
              <li className="nav-item btn">
                <a className="nav-link" onClick={function() {setMenu('pricing')}}>Pricing</a>
              </li>
              <li className="nav-item btn">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     {components}
   
    </div>
  )
}

export default App
