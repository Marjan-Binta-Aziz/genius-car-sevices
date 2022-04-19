import React, { useState } from "react";
import {
  DirectionsService,
  DirectionsRenderer,
  GoogleMap,
  LoadScript,
} from "@react-google-maps/api";
const Direction = () => {
    const [response, setResponse] = useState(null);
    const origin = '';
    const destination = '';

    const directionsCallback = (res) => {
        console.log(res)
    
        if (res !== null) {
          if (res.status === 'OK') {
            setResponse(res);
          } else {
            console.log('response: ', res)
          }
        }
      }
  return (
    <div>
      <LoadScript googleMapsApiKey="YOUR_API_KEY">
        <GoogleMap
          // required
          id="direction-example"
          // required
          mapContainerStyle={{
            height: "400px",
            width: "100%",
          }}
          // required
          zoom={2}
          // required
          center={{
            lat: 0,
            lng: -180,
          }}
        >
          {
            destination !== "" && 
            origin !== "" && (
            <DirectionsService
              // required
              options={{
                destination:destination,
                origin: origin,
                travelMode: 'Driving',
              }}
              // required
              callback={directionsCallback}
            />
          )}

          {
          
          response !== null && (
            <DirectionsRenderer
              // required
              options={{
                directions: response,
              }}
            />
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Direction;
