import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
const containerStyle = {
    width: '100vw',
    height: '100vh'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };
const MyLocation = () => {
    return (
        <div>
    <LoadScript
      googleMapsApiKey="YOUR_API_KEY"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <Marker 
        position = {center}
        >

        </Marker>
      </GoogleMap>
    </LoadScript>
 
        </div>
    );
};

export default MyLocation;