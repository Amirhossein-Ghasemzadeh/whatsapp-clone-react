import React from "react";
import { Button } from "@material-ui/core";
import "./Login.css";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";

const Login = () => {
  const { signInApp } = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => signInApp(result.user))
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="signIn avatar"
        />
        <div className="login__text">
          <h1>Sign in to WhatsApp</h1>
        </div>
        <Button type="submit" onClick={signIn}>
          Sign in With Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
