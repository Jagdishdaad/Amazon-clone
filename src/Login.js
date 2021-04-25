import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from 'react-router-dom';
import { Event } from "@material-ui/icons";
import { auth } from './firebase';

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIN = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push('/');
                }


            }

            )
            .catch(error => alert(error.message))

        //do some fancy firebase register


        //do some fancy firebase login
    }
    const register = e => {
        e.preventDefault();


        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push('/');
                }


            }

            )
            .catch(error => alert(error.message))

        //do some fancy firebase register
    }

    return (
        <div className="login">

            <Link to="/">
                <img
                    className="login_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                />
            </Link>
            <div className='login_container'>
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange=
                        {e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange=
                        {e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIN}
                        className='login_signinbutton'>Sign In</button>

                </form>

                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

                <button onClick={register}
                    className='login_registerbutton'>Create Amazon Account</button>

            </div>
        </div>
    );
}

export default Login;
