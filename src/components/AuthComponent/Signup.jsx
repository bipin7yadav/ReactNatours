import React from "react";
import "./style.css";
import { MdAccountCircle } from "react-icons/md";
import { AiTwotoneLock } from "react-icons/ai";

export const Signup = () => {
  return (
        <div className="auth-modal-terittory-div">
          <div className="email-div">
            <MdAccountCircle className="signin-icon" />
            <input type="email" placeholder="Please enter your name" />
          </div>
          <div className="email-div">
            <MdAccountCircle className="signin-icon" />
            <input type="email" placeholder="Please enter your email" />
          </div>
          <div className="password-div">
            <AiTwotoneLock className="signin-icon" />
            <input type="password" placeholder="Please enter your password" />
          </div>
          <div className="password-div">
            <AiTwotoneLock className="signin-icon" />
            <input type="password" placeholder="Please enter your confirm password" />
          </div>
          <button className="sign-in-btn">Sign Up</button>
        </div>
  );
};
