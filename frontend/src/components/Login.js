import React, { useEffect } from 'react';
//import jwt_decode from "jwt-decode";

function Login() {
   // redirects browser to url
   const loginAuth = () => {
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=219827996248-l07p6safuak07ise9gcnth6d9pbgajeh.apps.googleusercontent.com&scope=openid%20email%20profile&redirect_uri=http%3A//localhost:3000/movies&prompt=select_account`;
  };

 

  return (
    <div>
      <button onClick={loginAuth}>Login</button>
    </div>
  )
}

export default Login
