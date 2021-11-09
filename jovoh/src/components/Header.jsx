import React from 'react';
import '../App.css'
import Navigation from './Navigation'
import Banner from './Banner'

const Header=()=> {
    return (
        <div className="Header">        
        <div className="Header-inner">
            
        <div className="menu">
        <h1>LogoType</h1>    <Navigation />
        </div>

            <div className="img">
            <img src="https://image.shutterstock.com/image-photo/cracks-on-surface-blue-ice-600w-655427254.jpg" alt="" />
            <img src="https://image.shutterstock.com/image-illustration/abstract-artistic-digital-paint-fiery-600w-1517694770.jpg" alt="" />
            <img src="https://image.shutterstock.com/image-illustration/mad-rider-pumpkin-head-standing-600w-2042690465.jpg" alt="" />
            <img src="https://image.shutterstock.com/image-illustration/dark-castle-valley-atmosphere-hell-600w-1735871231.jpg" alt="" />
            <img src="https://www.gamereactor.eu/media/72/warface_2987263b.jpg" alt="" />
            </div>
            <br />
            <Banner />
        </div>
    
        </div>
    )
}

export default Header
