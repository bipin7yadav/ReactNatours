import React, { useState } from "react";
import './Authentication.css';
import { GrFormClose } from "react-icons/gr";
import { Signin, Signup } from "../../components";

export const Authentication = () => {

  const [ authScreen, setAuthScreen ] = useState(true);
  return (
    <div className="auth-main-div">
      <div className="auth-modal auth-spacing">
        <div className="auth-modal-terittory-div">
          <header className="auth-header">
            <span>Please {authScreen ? 'Sign In' : 'Sign Up'} To Continue</span>
            <GrFormClose className="auth-close-icon" />
          </header>
          <div className="sign-in-up-switch-btns">
            <button onClick={() => setAuthScreen(true)} id={`${ authScreen && 'active-btn'}`}>
              Sign In
            </button>
            <button onClick={() => setAuthScreen(false)} id={`${ !authScreen && 'active-btn'}`}>
              Sign Up
            </button>
          </div>
          <div>
          {
            authScreen ? 
            <Signin />
            :
            <Signup />
          }
          </div>
        </div>
      </div>
    </div>
  );
};
