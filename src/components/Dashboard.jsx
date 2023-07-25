import React, { useEffect, useState } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../Config/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
const Dashboard = () => {
    const [logOutError, setLogOutError] = useState(null)
    const [loginUserEmail, setLoginUserEmail]= useState(null)
    const navigate = useNavigate()
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const uid = user.uid;
              setLoginUserEmail(user.email)
              // ...
            } else {
              // User is signed out
              // ...
              navigate('/')
            }
          });
    }, [])

    const handleSignOut = ()=>{
        signOut(auth)
        .then(() => {
            // Sign-out successful.
            navigate('/')
          }).catch((error) => {
            // An error happened.
            setLogOutError(error)
          });
    }
  return (
    <div>
        {
            logOutError&&<div className="alert alert-danger" role="alert">
            An error has occured.
        </div>
        }
        <h1>Welcome to your dashboard <span>{loginUserEmail}</span></h1>
        <button onClick={handleSignOut}>Log out</button>
    </div>
  )
}

export default Dashboard