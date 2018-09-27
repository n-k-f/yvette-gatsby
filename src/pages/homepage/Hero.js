import React from 'react'
import "./Hero.css"

const Hero = ({
    backgroundImage,
    primaryText
}) => {
    return (
        <div
            className="hero"
            style={{backgroundImage:`url(${backgroundImage})`}}
        >
            <h2 className="hero__primary-text">
                {primaryText}
            </h2>
        </div>
    )
}

export default Hero