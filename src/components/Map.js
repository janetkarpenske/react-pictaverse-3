import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';

//tried importing next two lines to be able to access firestore posts
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'

function Map() {

  useFirestoreConnect([
    { collection: 'posts' }
  ]);

  const posts = useSelector(state => state.firestore.ordered.posts);
  console.log("MAPS Posts: " + posts[0].name);

  return (
    <GoogleMap 
    defaultZoom={12} 
    defaultCenter={{ lat: 45.6257, lng: -122.6761}} >
      {posts.map((post) => (
        <Marker key={post.id} position={{
          lat: post.latitude,
          lng: post.longitude}} />
      ))}

    </GoogleMap>
  ); 
}

export const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;