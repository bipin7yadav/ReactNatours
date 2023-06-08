import React from "react";
import "./Card.css";
import { GiPositionMarker } from "react-icons/gi";
import { AiTwotoneCalendar } from "react-icons/ai";
import { FiFlag } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

export const Card = () => {
  return (
    <>
      <div className="tour-main-div">
        <div className="tour-card">
          <div className="tour-card__img-div">
            <img
              src="https://natoursyh.onrender.com/img/tours/tour-2-cover.jpg"
              alt="tour img"
            />
            <small>medium</small>
            <h2>The Sea Explorer</h2>
          </div>
          <div className="tour-card__text-content-div">
            <p className="tour-card__duration">7 day tour</p>
            <p className="tour-card__description">
              Exploring the jaw-dropping US east coast by foot and by boat
            </p>
            <div className="tour-card__tour-info">
              <div>
                <GiPositionMarker />
                <span>miami, USA</span>
              </div>
              <div>
                <AiTwotoneCalendar />
                <span>June 2021</span>
              </div>
              <div>
                <FiFlag />
                <span>4 stops</span>
              </div>
              <div>
                <CgProfile />
                <span>15 people</span>
              </div>
            </div>
            <div className="tour-card__price-rating">
              <p>
                <span>$497</span> per person
              </p>
              <p>
                <span> 3.6</span>reting (9)
              </p>
            </div>
            <button className="tour-card__info-btn sign-in-btn">tour info</button>
          </div>
        </div>
        <div className="tour-card">
          <div className="tour-card__img-div">
            <img
              src="https://natoursyh.onrender.com/img/tours/tour-2-cover.jpg"
              alt="tour img"
            />
            <small>medium</small>
            <h2>The Sea Explorer</h2>
          </div>
          <div className="tour-card__text-content-div">
            <p className="tour-card__duration">7 day tour</p>
            <p className="tour-card__description">
              Exploring the jaw-dropping US east coast by foot and by boat
            </p>
            <div className="tour-card__tour-info">
              <div>
                <GiPositionMarker />
                <span>miami, USA</span>
              </div>
              <div>
                <AiTwotoneCalendar />
                <span>June 2021</span>
              </div>
              <div>
                <FiFlag />
                <span>4 stops</span>
              </div>
              <div>
                <CgProfile />
                <span>15 people</span>
              </div>
            </div>
            <div className="tour-card__price-rating">
              <p>
                <span>$497</span> per person
              </p>
              <p>
                <span> 3.6</span>reting (9)
              </p>
            </div>
            <button className="tour-card__info-btn sign-in-btn">tour info</button>
          </div>
        </div>
        <div className="tour-card">
          <div className="tour-card__img-div">
            <img
              src="https://natoursyh.onrender.com/img/tours/tour-2-cover.jpg"
              alt="tour img"
            />
            <small>medium</small>
            <h2>The Sea Explorer</h2>
          </div>
          <div className="tour-card__text-content-div">
            <p className="tour-card__duration">7 day tour</p>
            <p className="tour-card__description">
              Exploring the jaw-dropping US east coast by foot and by boat
            </p>
            <div className="tour-card__tour-info">
              <div>
                <GiPositionMarker />
                <span>miami, USA</span>
              </div>
              <div>
                <AiTwotoneCalendar />
                <span>June 2021</span>
              </div>
              <div>
                <FiFlag />
                <span>4 stops</span>
              </div>
              <div>
                <CgProfile />
                <span>15 people</span>
              </div>
            </div>
            <div className="tour-card__price-rating">
              <p>
                <span>$497</span> per person
              </p>
              <p>
                <span> 3.6</span>reting (9)
              </p>
            </div>
            <button className="tour-card__info-btn sign-in-btn">tour info</button>
          </div>
        </div>
      </div>
    </>
  );
};
