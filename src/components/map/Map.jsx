import React, { useState, useRef, useContext } from 'react';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from 'react-google-maps';
import Restaurant from '../../assets/img/General/restaurant_icon.svg';
import { useCallback } from 'react';
import VendorContext from '../../context/vendors/VendorContext';
const Map = (props) => {
  const { marcador } = useContext(VendorContext);
  const [marcadores, setMarcadores] = useState([]);
  const onMapClick = useCallback((e) => {
    setMarcadores((current) => [
      ...current,
      { lat: e.latLng.lat(), lng: e.latLng.lng(), time: new Date() },
    ]);
  }, []);
  const mapref = useRef();
  const onMapLoad = useCallback((map) => {
    mapref.current = map;
  }, []);
  if (!marcadores === []) {
    marcador.push(marcadores);
  }
  console.log(marcador);
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: -12.1004229, lng: -76.9784386 }}
      onClick={onMapClick}
      onLoad={onMapLoad}
    >
      {marcadores.map((marcador) => (
        <Marker
          key={marcador.time.toISOString()}
          position={{ lat: marcador.lat, lng: marcador.lng }}
          icon={{
            url: `${Restaurant}`,
            scaledSize: new window.google.maps.Size(30, 30),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(15, 15),
          }}
        />
      ))}
    </GoogleMap>
  );
};

export default withScriptjs(withGoogleMap(Map));
