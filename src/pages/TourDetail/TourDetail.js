import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import { Header } from '../../components';
import "./tourDetail.css"
import { Rating } from 'react-simple-star-rating'
import imageCover from "./../../utils/tours/tour-2-cover.jpg"
import image1 from "./../../utils/tours/tour-2-1.jpg"
import image2 from "./../../utils/tours/tour-2-2.jpg"
import image3 from "./../../utils/tours/tour-2-3.jpg"
import user1 from "./../../utils/users/user-1.jpg"

let tour = {
    "startLocation": {
        "description": "Miami, USA",
        "type": "Point",
        "coordinates": [-80.185942, 25.774772],
        "address": "301 Biscayne Blvd, Miami, FL 33132, USA"
    },
    "ratingsAverage": 4.8,
    "ratingsQuantity": 6,
    "images": ["tour-2-1.jpg", "tour-2-2.jpg", "tour-2-3.jpg"],
    "startDates": [
        "2021-06-19T09:00:00.000Z",
        "2021-07-20T09:00:00.000Z",
        "2021-08-18T09:00:00.000Z"
    ],
    "_id": "5c88fa8cf4afda39709c2955",
    "name": "The Sea Explorer",
    "duration": 7,
    "maxGroupSize": 15,
    "difficulty": "medium",
    "guides": ["5c8a22c62f8fb814b56fa18b", "5c8a1f4e2f8fb814b56fa185"],
    "price": 497,
    "summary": "Exploring the jaw-dropping US east coast by foot and by boat",
    "description": "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nIrure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "imageCover": "tour-2-cover.jpg",
    "locations": [
        {
            "_id": "5c88fa8cf4afda39709c2959",
            "description": "Lummus Park Beach",
            "type": "Point",
            "coordinates": [-80.128473, 25.781842],
            "day": 1
        },
        {
            "_id": "5c88fa8cf4afda39709c2958",
            "description": "Islamorada",
            "type": "Point",
            "coordinates": [-80.647885, 24.909047],
            "day": 2
        },
        {
            "_id": "5c88fa8cf4afda39709c2957",
            "description": "Sombrero Beach",
            "type": "Point",
            "coordinates": [-81.0784, 24.707496],
            "day": 3
        },
        {
            "_id": "5c88fa8cf4afda39709c2956",
            "description": "West Key",
            "type": "Point",
            "coordinates": [-81.768719, 24.552242],
            "day": 5
        }
    ]
}

const images = [image1, image2, image3]

function TourDetail() {
    return (
        <>
        <div>
            <Header/>
        </div>
            <div style={{ width: "100vw", boxSizing: "border-box", display: "flex", alignItems: "center", flexDirection: "column",margin:"4rem 0" }}>
                <div style={{ width: '100%', height: "70vh", display: "flex", justifyContent: "center", alignItems: "center", }}>
                    <img
                        style={{ objectFit: "cover", width: "90%", height: "100%", borderRadius: '10px', }}
                        // src={`./../../utils/tours/${tour.imageCover}`} 
                        src={imageCover}
                        alt={tour.imageCover} />
                </div>
                <div style={{ width: "100%", padding: "1rem" }}>
                    <h1>{tour.name}</h1>
                </div>
                <div className='descriptionCard'>
                    <section style={{
                        width: '90%', display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center', margin: "10px auto",
                        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", borderRadius: "1rem", backgroundImage: "linear-gradient(to right, #7dd56f, #28b487)"
                    }}>
                        <h1 style={{ marginBottom: '20px', color: "linear-gradient(to right, #7dd56f, #28b487)" }}>About {tour.name}</h1>
                        <p className='description' style={{ fontsize: "28px", letterSpacing: "150%", padding: '1rem' }}>{tour.description}</p>
                    </section>
                </div>
                <div className='card2' style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", marginTop: "2rem" }}>
                    <div style={{ width: "90%", display: "flex", justifyContent: "space-between", height: "15rem" }}>
                        <div style={{
                            width: "45%", boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                            borderRadius: "20px", padding: '1rem', display: 'flex', flexDirection: "column", justifyContent: 'space-evenly'
                        }}>
                            <h1>QUICK FACTS</h1>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <span style={{ fontSize: "1.2rem" }}>Next Date : </span>
                                <span>{ }</span>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <span style={{ fontSize: "1.2rem" }}>Difficulty : </span>
                                <span>{tour.difficulty}</span>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <span style={{ fontSize: "1.2rem" }}>Participants : </span>
                                <span>{tour.maxGroupSize} people</span>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <span style={{ fontSize: "1.2rem" }}>Rating : </span>
                                <span>{tour.ratingsAverage}/{tour.ratingsQuantity}</span>
                            </div>
                        </div>
                        <div style={{
                            width: "45%", boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                            borderRadius: "20px", padding: '1rem', display: "flex", flexDirection: "column", gap: "5px", overflowY: "auto"
                        }}>
                            <h1>YOUR TOUR GUIDES</h1>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "black", height: "20%", padding: "5px" }}>
                                <img src={user1} style={{ borderRadius: "50%", objectFit: "cover", height: "100%" }} alt='img' />

                                <div>Tour Guide</div>

                                <div>SOPHIE LOUISE HART</div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "black", height: "20%", padding: "5px" }}>
                                <img src={user1} style={{ borderRadius: "50%", objectFit: "cover", height: "100%" }} alt='img' />

                                <div>Lead Guide</div>

                                <div>SOPHIE LOUISE HART</div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "black", height: "20%", padding: "5px" }}>
                                <img src={user1} style={{ borderRadius: "50%", objectFit: "cover", height: "100%" }} alt='img' />

                                <div>Lead Guide</div>

                                <div>SOPHIE LOUISE HART</div>
                            </div>


                        </div>

                    </div>
                </div>
                <div style={{ width: '100%', height: "70vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "1rem", boxSizing: "border-box", marginTop: "1rem" }}>
                    <div className='imageSlider'>
                        <SimpleImageSlider
                            width={1000}
                            height={500}
                            images={images}
                            showBullets={true}
                            showNavs={true}
                            autoPlay={true}
                            autoPlayDelay={2}
                        />
                    </div>
                </div>
                <div style={{ width: '100%', height: "70vh", display: "flex", justifyContent: "center", alignItems: "center", }}>
                    <div className='reviewCardHolder' style={{
                        width: "90%", boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                        borderRadius: "20px", display: "flex", overflowX: "scroll", gap: "8px", scrollBehavior: "smooth"
                    }} >
                        <div className='reviewCard'>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "black", height: "20%", padding: "5px" }}>
                                <img src={user1} style={{ borderRadius: "50%", objectFit: "cover", height: "100%" }} alt='img' />

                                <div>SOPHIE LOUISE HART</div>
                            </div>
                            <div style={{ height: "60%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <p>Cras mollis nisi parturient mi nec aliquet suspendisse sagittis eros condimentum scelerisque taciti
                                    mattis praesent feugiat eu nascetur a tincidunt</p>
                            </div>
                            <div>
                                <Rating initialValue={4} />
                            </div>
                        </div>

                        <div className='reviewCard'>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "black", height: "20%", padding: "5px" }}>
                                <img src={user1} style={{ borderRadius: "50%", objectFit: "cover", height: "100%" }} alt='img' />

                                <div>Name</div>
                            </div>
                            <div style={{ height: "60%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <p>Cras mollis nisi parturient mi nec aliquet suspendisse sagittis eros condimentum scelerisque taciti
                                    mattis praesent feugiat eu nascetur a tincidunt</p>
                            </div>
                            <div>
                                <Rating initialValue={4} />
                            </div>
                        </div>

                        <div className='reviewCard'>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "black", height: "20%", padding: "5px" }}>
                                <img src={user1} style={{ borderRadius: "50%", objectFit: "cover", height: "100%" }} alt='img' />

                                <div>Name</div>
                            </div>
                            <div style={{ height: "60%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <p>Cras mollis nisi parturient mi nec aliquet suspendisse sagittis eros condimentum scelerisque taciti
                                    mattis praesent feugiat eu nascetur a tincidunt</p>
                            </div>
                            <div>
                                <Rating initialValue={4} />
                            </div>
                        </div>

                        <div className='reviewCard'>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "black", height: "20%", padding: "5px" }}>
                                <img src={user1} style={{ borderRadius: "50%", objectFit: "cover", height: "100%" }} alt='img' />

                                <div>Name</div>
                            </div>
                            <div style={{ height: "60%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <p>Cras mollis nisi parturient mi nec aliquet suspendisse sagittis eros condimentum scelerisque taciti
                                    mattis praesent feugiat eu nascetur a tincidunt</p>
                            </div>
                            <div>
                                <Rating initialValue={4} />
                            </div>
                        </div>

                        <div className='reviewCard'>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "black", height: "20%", padding: "5px" }}>
                                <img src={user1} style={{ borderRadius: "50%", objectFit: "cover", height: "100%" }} alt='img' />

                                <div>Name</div>
                            </div>
                            <div style={{ height: "60%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <p>Cras mollis nisi parturient mi nec aliquet suspendisse sagittis eros condimentum scelerisque taciti
                                    mattis praesent feugiat eu nascetur a tincidunt</p>
                            </div>
                            <div>
                                <Rating initialValue={4} />
                            </div>
                        </div>

                        <div className='reviewCard'>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "black", height: "20%", padding: "5px" }}>
                                <img src={user1} style={{ borderRadius: "50%", objectFit: "cover", height: "100%" }} alt='img' />

                                <div>Name</div>
                            </div>
                            <div style={{ height: "60%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <p>Cras mollis nisi parturient mi nec aliquet suspendisse sagittis eros condimentum scelerisque taciti
                                    mattis praesent feugiat eu nascetur a tincidunt</p>
                            </div>
                            <div>
                                <Rating initialValue={4} />
                            </div>
                        </div>

                    </div>
                </div>

                <div className='booking-card'>
                    <div className='main-booking' >
                        <div className='imgBox'>
                            <img style={{width:"45%",height:"70%",borderRadius:"50%",zIndex:"100",position:"absolute",left:"0px"}} src={image1}/>
                            <img style={{width:"45%",height:"70%",borderRadius:"50%",zIndex:"90",position:"absolute",left:"40px"}} src={image2}/>
                            <img style={{width:"45%",height:"70%",borderRadius:"50%",zIndex:"80",position:"absolute",left:"80px"}} src={image3}/>
                        </div>
                        <div className='textDetail'>
                            <div style={{textAlign:"start",width:"100%",padding:"20px"}}>
                                <h2>What Are You Waiting For?</h2>
                                <p style={{marginTop:"10px"}}>5 days. 1 adventure. Infinite memories. Make it yours today!</p>
                            </div>
                        </div>
                        <div className='btnBox'>
                            <button className='bookBtn'>Log In To Book A Tour</button>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default TourDetail
