import React from 'react'
import "../components/Header.css"
import logo from '../images/youtube-removebg-preview.png'
const Header = () => {
    return (
        <div className="header-container">
            <div className="header-div">
                <h1>Youtube Converter</h1>
                <img src={logo} alt="img"/>
            </div>
        </div>
    )
}

export default Header
