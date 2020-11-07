import { useState } from 'react'
import './App.css'
import DesktopImg from './assets/images/desktop.png'
import GoogleMapComponent from './components/google-map'

function App() {
  const [mapClick, setMapClick] = useState(false)

  return (
    <div className='content-map'>
      {
        mapClick
          ? <GoogleMapComponent />
          : (
            <div className='render-map' onClick={() => setMapClick(true)}>
              <img src={DesktopImg} alt="" className='img-fluid' />
            </div>
          )
      }
    </div>
  );
}

export default App;
