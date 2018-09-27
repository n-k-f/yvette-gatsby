import React from 'react'
import "./Shows.css"

const Shows = ({
    backgroundImage,
    showsTitle,
    showsUpcoming,
    showsPast
}) => {
    return (
        <div>
            <h2 className="section_title">
                {showsTitle}
            </h2>

            <div className="subsection_title">
                <h3>{showsUpcoming}</h3>
            </div>

            <div className="subsection_title">
                <h3>{showsPast}</h3>
            </div>
        </div>
    )

}

export default Shows