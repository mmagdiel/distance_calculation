import React from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default ({ destination, distance, duration, origin }) => {
    const key = 'AIzaSyAsGgRnC34wiGutlNDOOhb83VzdlZzr1i4'
    const zoom = 21
    const dest = name(destination)
    const orig = name(origin)
    const dist = text(distance)
    const dura = text(duration)
    const cent = {
        lat: destination.lat,
        lng: destination.lon
    }
    return (
        <>
            <div style={{ display: 'flex' }}>
                <dl style={{ display: 'flex' }}>
                    <dt>Origen </dt>
                    <dd>{ orig }</dd>
                </dl>
                <dl style={{ display: 'flex', 'marginLeft': '50px' }}>
                    <dt>Destino </dt>
                    <dd>{ dest }</dd>
                </dl>
                <dl style={{ display: 'flex', 'marginLeft': '50px' }}>
                    <dt>Distancia </dt>
                    <dd>{ dist }</dd>
                </dl>
                <dl style={{ display: 'flex', 'marginLeft': '50px' }}>
                    <dt>Duración </dt>
                    <dd>{ dura }</dd>
                </dl>
            </div>
            <div style={{ height: '50vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key }}
                    defaultCenter={ cent }
                    defaultZoom={zoom}
                >
                    <AnyReactComponent
                        lat={destination.lat}
                        lng={destination.lon}
                        text={dest}
                    />
                    <AnyReactComponent
                        lat={origin.lat}
                        lng={origin.lon}
                        text={orig}
                    />
                </GoogleMapReact>
            </div>
        </>
    )
}

const name = a => {
    const { name } = a
    return name 
}

const text = a => {
    const { text } = a
    return text 
}