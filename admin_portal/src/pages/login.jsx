import React, { useState, useReducer } from "react";
import { useNavigate, Link } from "react-router-dom";
import '../styles.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () =>{

    const navigate = useNavigate()

    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    const ACTIONS = {
        EMAIL : 'email',
        PASSWORD : 'password'
    }

    const reducer = (state, action) =>{
        switch(action.type){
            case ACTIONS.EMAIL : 
                return {...state, email: action.payload}
            case ACTIONS.PASSWORD : 
                return {...state, password: action.payload}
            default : throw new Error('ABCD')
        }
    }

    const [state, dispatch] = useReducer(reducer, {
        email : '',
        password : '',
    })

    const handleSubmit = (e) =>{
        e.preventDefault()
        const {email, password} = state;
        console.log(email,password)
        if((email.length > 5) && (password.length > 6))
            navigate('/')
            else
            toast('Please enter a valid Credentials')
    }

    return(
        <>
            <section className="login-form-sec">
               <form action="" id="login-form" autoComplete="off" onSubmit={handleSubmit}>
                <ToastContainer theme="dark"/>
                    <div>
                        <h1>LOGIN</h1>
                        <p>Please enter your username and password!</p>
                    </div>

                    <div className="form-input">
                        <input type='text' id="username" required value={state.email} onChange={(e) => dispatch({ type : ACTIONS.EMAIL, payload : e.target.value})}/>
                        <label for='username'>Username</label>
                    </div>

                    <div className="form-input">
                        <input type='password' id="pass" required value={state.password} onChange={(e) => dispatch({type : ACTIONS.PASSWORD, payload : e.target.value })}/>
                        <label for="pass">Password</label>
                    </div>

                    <button type="submit">LOGIN</button>

                    <div className="reg-nav">
                        <span>Don't have an account?</span>
                        <Link to='/register'>Register</Link>
                    </div>
               </form>

               <div className="login-img" >
                <img src="/assests/images/login1.png" alt="login-image"/>
               </div>
            </section>
        </>
    )
}

export default Login;