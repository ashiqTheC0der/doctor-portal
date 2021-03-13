import React from 'react';
import Navber from '../../shared/navber/Navber';
import LoginBG from '../../../images/LoginBG.png'
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./firebase.config";

const Login = () => {

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    };
    return (
        <div>
            <Navber></Navber>

            <div className="login-page container">
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-6 shadow p-5">
          <div className="form-group">
            <label htmlFor="">User Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="" className="text-danger">Forgot your password?</label>
          </div>
          <div className="from-group mt-5">
            <button onClick={handleGoogleSignIn} className="btn btn-brand" >Google Sign in</button>
          </div>
        </div>
        <div className="col-md-6 d-none d-md-block align-self-end">
          <img className="img-fluid" src={LoginBG} alt="BakgroundImage" />
        </div>
      </div>
    </div>







            </div>
    );
};

export default Login;