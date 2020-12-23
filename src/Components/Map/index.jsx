import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import { Container, RoutMaps } from './style'

const position = [-26.8483879,-49.0883242]
const MapsLink = "https://www.google.com/maps/place/Rua+Dr.+Pedro+Zimmermann+-+Itoupavazinha,+Blumenau+-+SC,+89066-003/@-26.8483879,-49.0883242,17z/data=!4m13!1m7!3m6!1s0x0:0x0!2zMjbCsDUwJzU0LjIiUyA0OcKwMDUnMTguMCJX!3b1!8m2!3d-26.8483879!4d-49.0883242!3m4!1s0x94df1e36e8ae789b:0xc727cbfc4d7f28d5!8m2!3d-26.8484388!4d-49.0885999"

function map () {
        return(
            <Container>
                <MapContainer className="leaflet-container" center={position} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href='http://osm.org/copyright'>openStreetMap</a> contributors"
                    />
                    <Marker position={position}>
                        <Popup>
                            LEB Corretora.
                        </Popup>
                    </Marker>
                </MapContainer>

                <RoutMaps>
                    <a target="_blank" href={MapsLink}>Ver rotas no google Maps</a>
                </RoutMaps>
            </Container>
        )
}

export default map