import React from "react";
import "./Card.css";
import { GiPositionMarker } from "react-icons/gi";
import { AiTwotoneCalendar } from "react-icons/ai";
import { FiFlag } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import A from "./../../utils/tours/tour-3-cover.jpg"
import { Link } from "react-router-dom";

export const Card = ({tour,index,im}) => {
  console.log('====================================');
  console.log(tour);
  console.log('====================================');
  let imageCover =tour?.imageCover
  let coverImg =(`./../../utils/tours/${imageCover}`)
  console.log(coverImg);
  return (
    <>
      {/* <div className="tour-main-div"> */}
        <div className="tour-card">
          <div className="tour-card__img-div">
            <img
            // src='./../../utils/tours/tour-3-cover.jpg'
              src={ A}
              // src={require(`${coverImg}`)}
              alt="tour img"
            />
            <small>{tour?.difficulty}</small>
            <h2>{tour?.name}</h2>
          </div>
          <div className="tour-card__text-content-div">
            <p className="tour-card__duration">{tour?.duration} day tour</p>
            <p className="tour-card__description">
              {tour?.summary}
            </p>
            <div className="tour-card__tour-info">
              <div>
                <GiPositionMarker />
                <span>{tour?.startLocation?.description}</span>
              </div>
              <div>
                <AiTwotoneCalendar />
                <span>June 2021</span>
              </div>
              <div>
                <FiFlag />
                <span>{tour?.locations?.length} stops</span>
              </div>
              <div>
                <CgProfile />
                <span>{tour?.maxGroupSize} people</span>
              </div>
            </div>
            <div className="tour-card__price-rating">
              <p>
                <span>$ {tour?.price}</span> per person
              </p>
              <p>
                <span> {tour?.ratingsAverage}</span>rating ({tour?.ratingsQuantity})
              </p>
            </div>
            <button className="tour-card__info-btn sign-in-btn">
            <Link className="link" to={'/tourDetail'}>
            tour info
            </Link>
            </button>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};
