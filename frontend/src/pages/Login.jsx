import React, { useRef } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login({setUser}) {

  const navigate = useNavigate()

  const emailRef = useRef()
  const PasswordRef = useRef()

  const loginUser = () => {
    const config = {
      url: "http://localhost:8000/users/signin",
      method: "post",
      data: {
        email: emailRef.current.value,
        password: PasswordRef.current.value,
      },
    };
    axios(config)
    .then(response => {
      if(response.status === 200) {
        setUser(response.data.result)
        localStorage.setItem("user", JSON.stringify(response.data.result))
        navigate("/")
      }
    })
    .catch(err => err)
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div>
          <label htmlFor="email-input">Email</label>
          <br />
          <input ref={emailRef} type="email" id="email-input" />
        </div>
        <div>
          <label htmlFor="password-input">Password</label>
          <br />
          <input ref={PasswordRef} type="password" id="password-input" />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={loginUser}>Login</button>
        </div>
        <p style={{margin: 0, fontSize: '16px'}}><Link style={{color: "wheat"}} to='/register'>Don't have an account? Register.</Link></p>
      </div>
    </div>
  );
}

export default Login;
