import React from "react";
import firebase from "firebase/app";

function Signin(){  

    function doSignUp(event) {
      event.preventDefault();
      const email = event.target.email.value;
      const password = event.target.password.value;
      firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
        console.log("successfully signed up!");
      }).catch(function(error) {
        console.log(error.message);
      });
    }

    function doSignIn(event) {
      event.preventDefault();
      const email = event.target.signinEmail.value;
      const password = event.target.signinPassword.value;
      firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
        console.log("Successfully signed in!");
      }).catch(function(error) {
        console.log(error.message);
      });
    }

    function doSignOut() {
      firebase.auth().signOut().then(function() {
        console.log("Successfully signed out!");
      }).catch(function(error) {
        console.log(error.message);
      });
    }

  return (
    <React.Fragment>
      {/* <div className="whiteBackground"> */}
      <div className="signinPage center-align">
      <div className="row">
      <div className="col-md-6">
        <div className="card">
      <h1>register</h1><br/><br/>
      <form onSubmit={doSignUp}>
        <input
          type='text'
          name='email'
          placeholder='email' /> <br/><br/>
        <input
          type='password'
          name='password'
          placeholder='Password' /><br/><br/>
        <button className="btn btn-dark btn-md" type='submit'>register</button>
        
      </form>
      </div>
      </div>

      <div className="col-md-6">
      <div className="card">
        <h1>sign in</h1><br/><br/>
    <form onSubmit={doSignIn}>
      <input
        type='text'
        name='signinEmail'
        placeholder='email' /> <br/><br/>
      <input
        type='password'
        name='signinPassword'
        placeholder='Password' /><br/><br/>
      <button className="btn btn-dark btn-md" type='submit'>sign in</button>
    </form>
    </div>
    </div>
    </div>

    <br/><br/><button className="btn btn-dark btn-lg" onClick={doSignOut}>Sign out</button>
      {/* </div> */}
      </div>
    </React.Fragment>
  );
}

export default Signin