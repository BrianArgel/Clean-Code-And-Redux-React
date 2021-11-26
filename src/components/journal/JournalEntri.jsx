import React from 'react'

const JournalEntri = () => {
    return (
        <div className="journal__entry">
            <div className="journal__entry-picture"
            style={{
                backgroundSize: 'cover',
                backgroundImage: 'url(https://www.w3schools.com/css/img_lights.jpg)'
            }}
            ></div>
            <div className="journal__entry-body">
                <p className="jorunal__entry-title">
                    Un nuevo día
                </p>
                <p className="jorunal__entry-content">
                   Lorem ipsum dolor
                </p>
            </div>
            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}

export default JournalEntri
