import React from 'react'
import "./Info.css"

const Info = ({
    infoImage
}) => {
    return (
        <div>
            <h2 className="section_title">
                Info
            </h2>

            <div className="subsection_title">
                <h3></h3>
            </div>

            <div className="info__text">
                <p>YVETTE is two people – Noah and Dale – who primarily make music. They live and practice in New York.</p>
            </div>

            <img 
                className="info__band_photo"
                src={{infoImage:`url(${infoImage})`}}
            />

        </div>
    )

}

export default Info