import { useCallback } from 'react'
import { GoogleMap, useJsApiLoader} from '@react-google-maps/api';
import PointMarker from './point-marker'

const mapdata = {
  API_KEY: 'AIzaSyC5NIpG9KpqW42xl7fzXVgFUhAhCSWflPk',
  lat: -33.7197337,
  long: -70.7439262,
  zoom: 14,
  width: 618,
  height: 450,
  mapType: 'roadmap',
}

const project = {
  position: {
    lat: -33.71026,
    lng: -70.745371
  },
  content: 'Parques de Buin Norte'
}

const markers = [
  {
    position: {
      lat: -33.7136622,
      lng: -70.726051
    },
    category: 'Zoo',
    content: 'Zoológico'
  },
  {
    position: {
      lat: -33.7119721,
      lng: -70.7430938
    },
    category: 'Colegio',
    content: 'Colegio'
  },
  {
    position: {
      lat: -33.7314104,
      lng: -70.7414058
    },
    category: 'Municipio',
    content: 'Municipalidad'
  },
  {
    position: {
      lat: -33.7314892,
      lng: -70.7345979
    },
    category: 'Supermercado',
    content: 'Supermercado Tottus'
  },
  {
    position: {
      lat: -33.7328737,
      lng: -70.7402036
    },
    category: 'Banco',
    content: 'Banco Estado'
  },
  {
    position: {
      lat: -33.7123079,
      lng: -70.7389176
    },
    category: 'Jardin',
    content: 'Jardín Infantil'
  },
  {
    position: {
      lat: -33.7182704,
      lng: -70.7411277
    },
    category: 'Estadio',
    content: 'Estadio Municipal'
  }
]

const icons = {
  Banco: 'https://metropolitana.cl/wp-content/themes/metrowp/assets/icons/Banco.png',
  Supermercado: 'https://metropolitana.cl/wp-content/themes/metrowp/assets/icons/Supermercado.png',
  CentroMedico: 'https://metropolitana.cl/wp-content/themes/metrowp/assets/icons/CentroMedico.png',
  Colegio: 'https://metropolitana.cl/wp-content/themes/metrowp/assets/icons/Colegio.png',
  Jardin: 'https://metropolitana.cl/wp-content/themes/metrowp/assets/icons/Jardin.png',
  Municipio: 'https://metropolitana.cl/wp-content/themes/metrowp/assets/icons/Municipio.png',
  Zoo: 'https://metropolitana.cl/wp-content/themes/metrowp/assets/icons/Zoo.png',
  Estadio: 'https://metropolitana.cl/wp-content/themes/metrowp/assets/icons/Estadio.png',
}

export default function GoogleMapComponent () {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: mapdata.API_KEY
  })

  const onLoad = useCallback(
    function onLoad (mapInstance) {
      // do something with map Instance
      console.log('mapa cargado')
    }, []
  )

  return (
    <>
      {isLoaded && <div className='render-map'>
              <GoogleMap
                onLoad={onLoad}
                mapContainerStyle={{
                  width: mapdata.width,
                  height: mapdata.height
                }}
                center={{
                  lat: mapdata.lat,
                  lng: mapdata.long
                }}
                zoom={mapdata.zoom}
              >
                <PointMarker
                  position={project.position}
                  icon='https://metropolitana.cl/wp-content/themes/metrowp/assets/icons/proyecto.png'
                  content={project.content}
                />
                {markers.map(mark => (
                  <PointMarker
                    key={mark.content}
                    position={mark.position}
                    icon={icons[mark.category]}
                    content={mark.content}
                  />
                ))}
              </GoogleMap>
            </div>}
    </>
  )
}