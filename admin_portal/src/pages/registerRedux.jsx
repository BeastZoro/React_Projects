import React, { useState, useReducer } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch, useSelector } from "react-redux";

const RegisterRedux = () => {
    const entity = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState("");

  const ACTIONS = {
    EMAIL: "email;",
    NAME: "name",
    PASSWORD: "password",
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('values',username,name,password);

    dispatch({type:'EMAIL', payload: username})
    dispatch({type:'NAME', payload: name})
    dispatch({type:'PASSWORD', payload: password})
//     const { name, email, password } = state;
//     console.log(name, email, password);
//     if (password === confirmPass && password.length > 6) navigate("/login");
//     else toast("Please enter a valid Password");
  }

  return (
    <>
      <section className="register-form-sec">
        <form id="register-form" autoComplete="off" onSubmit={handleSubmit}>
          <ToastContainer theme="dark" />
          {/* Form title */}
          <div className="form-title">
            <h1>SIGN UP</h1>
            <p>Please register to sigin to your account</p>
          </div>

          <div className="form-input">
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)
              }
            />
            <label for="name">Name</label>
          </div>

          <div className="form-input">
            <input
              type="text"
              id="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)
              }
            />
            <label for="username">Username</label>
          </div>

          <div className="form-input">
            <input
              type="text"
              id="pass"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)
              }
            />
            <label for="pass">Password</label>
          </div>

          <div className="form-input">
            <input
              type="password"
              id="confirmpass"
              required
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
            />
            <label for="confirmpass">Confirm Password</label>
          </div>

          <button type="submit">Register</button>

          <div className="reg-nav">
            <span>Already have an account?</span>
            <Link to="/login">Sign in</Link>
          </div>
        </form>

        <div className="login-img">
          <img src="/assests/images/login1.png" alt="login-image" />
        </div>
      </section>
    </>
  );
};

export default RegisterRedux;
