import React from 'react';
import { GoogleMap, withScriptJs, withGoogleMap } from 'react-google-maps';

function Map() {
  return (
    <GoogleMap defaultZoom={10} defaultCenter={{ lat: 45.421532, lng: -75.697189}} />
  );
}

export const WrappedMap = withScriptJs(withGoogleMap(Map));

export default WrappedMap;