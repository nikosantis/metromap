import { useState } from 'react'
import { Marker, InfoWindow } from '@react-google-maps/api';

export default function PointMarker ({ position, icon, content }) {
  const [show, setShow] = useState(false)

  return (
    <Marker
      position={position}
      icon={icon}
      onClick={() => setShow(true)}
      clickable
    >
      {show && <InfoWindow>
        <div id="content">{content}</div>
      </InfoWindow>}
    </Marker>
  )
}