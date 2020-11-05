import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";
import login2 from "./login2.png";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((err) => alert(err.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //it sucessful created a new user with email and password!
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={login2} alt="nile logo" />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Let's Go Cash Out!
          </button>
        </form>
        <p>
          By signing in, you agree to Nile Conditions of Use and
          Sale. Please see our Privacy Notice, our Cookies Notice, and our
          Interest-Based Ads Notice.
        </p>
        <button onClick={register} className="login__registerButton">
          Create a Nile account to ball out!
        </button>
      </div>
    </div>
  );
}

export default Login;
