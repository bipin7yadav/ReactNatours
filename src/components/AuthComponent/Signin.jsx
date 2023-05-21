import React from "react";
import "./style.css";
import { MdAccountCircle } from "react-icons/md";
import { AiTwotoneLock } from "react-icons/ai";

export const Signin = () => {
  return (
    <div className="auth-modal-terittory-div">
      <div className="email-div">
        <MdAccountCircle className="signin-icon" />
        <input type="email" placeholder="Please enter your email" />
      </div>
      <div className="password-div">
        <AiTwotoneLock className="signin-icon" />
        <input type="password" placeholder="Please enter your password" />
      </div>
      <div className="remember-me-div">
        <label>
          <input type="checkbox" defaultChecked />
          Remember me
        </label>
        <span>Forgot Password</span>
      </div>
      <button className="sign-in-btn">Sign In</button>
    </div>
  );
};
