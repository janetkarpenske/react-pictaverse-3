import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';

function Map() {
  return (
    <GoogleMap 
    defaultZoom={12} 
    defaultCenter={{ lat: 45.6257, lng: -122.6761}} 
    />
  );
}

export const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;