import React from 'react'
import { Marker, Popup } from 'react-leaflet';

import Map from './index.jsx';

export default () => {
    return(
    <Map>
        <Marker position={[-27.2092052,-49.6401092]}>
            <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
            </Popup>
        </Marker>
    </Map>
    )
}