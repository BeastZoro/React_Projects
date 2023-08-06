import React, { useState, useReducer } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const navigate = useNavigate();

  // const [name, setName] = useState('')
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState("");

  const ACTIONS = {
    EMAIL: "email;",
    NAME: "name",
    PASSWORD: "password",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.EMAIL:
        return { ...state, email: action.payload };
      case ACTIONS.NAME:
        return { ...state, name: action.payload };
      case ACTIONS.PASSWORD:
        return { ...state, password: action.payload };
      default:
        throw new Error("ABCD");
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    email: "",
    name: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = state;
    console.log(name, email, password);
    if (password === confirmPass && password.length > 6) navigate("/login");
    else toast("Please enter a valid Password");
  };

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
              value={state.name}
              onChange={(e) =>
                dispatch({ type: ACTIONS.NAME, payload: e.target.value })
              }
            />
            <label for="name">Name</label>
          </div>

          <div className="form-input">
            <input
              type="text"
              id="username"
              required
              value={state.email}
              onChange={(e) =>
                dispatch({ type: ACTIONS.EMAIL, payload: e.target.value })
              }
            />
            <label for="username">Username</label>
          </div>

          <div className="form-input">
            <input
              type="text"
              id="pass"
              required
              value={state.password}
              onChange={(e) =>
                dispatch({ type: ACTIONS.PASSWORD, payload: e.target.value })
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

export default Register;
