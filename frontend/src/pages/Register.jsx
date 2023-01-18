import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const nameRef = useRef();
  const emailRef = useRef();
  const PasswordRef = useRef();
  const navigate = useNavigate()

  const registerUser = () => {
    const config = {
      url: "http://localhost:8000/users/register",
      method: "post",
      data: {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: PasswordRef.current.value,
      },
    };
    axios(config)
    .then(response => {
      if(response.status === 200) {
        navigate("/login")
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
          <label htmlFor="name-input">Full Name</label>
          <br />
          <input ref={nameRef} type="text" id="name-input" />
        </div>
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
          <button onClick={registerUser}>Register</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
