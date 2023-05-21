import React from 'react'
import "./LandingPage.css"
import { Link } from 'react-router-dom'
function LandingPage() {
    return (
        <>
            <div className='landingPage' >
                <header className='header rowFlex'>
                    <div className='Label'>
                        <h1>Natours</h1>
                    </div>
                    <div className='linkGroup'>
                        <Link className='link'>Home</Link>
                        <Link className='link'>Login</Link>
                    </div>
                </header>
                <div className='center-center'>
                <section className='infoCard'  >
                    <span className='center-center' style={{
                        fontWeight: "1000", margin: "10px", lineHeight: '1', wordWrap: "break-word", width: "100%",
                        height: "70%", color: "#3a3d4f"
                    }}>BECOME ONE WITH NATURE</span>
                    <div className='center-center' >
                        <button className='button-84'>
                            Explore
                        </button>
                    </div>

                </section>

                </div>
            </div>
        </>
    )
}

export default LandingPage
