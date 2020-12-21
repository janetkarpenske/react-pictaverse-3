import React, { useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import mapStyle from './../styling/mapStyle';

//tried importing next two lines to be able to access firestore posts
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'

function Map() {
  const [mapSelectedPost, setMapSelectedPost] = useState(null);

  useFirestoreConnect([
    { collection: 'posts' }
  ]);

  const posts = useSelector(state => state.firestore.ordered.posts);
  //console.log("MAPS Posts: " + posts[0].name);

  return (
    <React.Fragment>
    <GoogleMap 
    defaultZoom={3} 
    defaultCenter={{ lat: 45.6257, lng: -8.6761}}
    // defaultOptions={{styles: mapStyle}} 
    >
      {posts.map((post) => (
        <React.Fragment>
        <Marker key={post.id} 
        position={{
          lat: post.lat,
          lng: post.lng
        }} 
        // onClick = {() => {
        //   setMapSelectedPost(post);
        // }}
        />
        </React.Fragment>
      ))}

      {/* if (mapSelectedPost != null) {
        <InfoWindow
          position={{
          lat: mapSelectedPost.lat,
          lng: mapSelectedPost.lng
        }} >
        Post Information</InfoWindow>
        } */}
    </GoogleMap>
    </React.Fragment>
  ); 
}

export const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;