import React from 'react'
import NoteAppBar from './NoteAppBar'

const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NoteAppBar />
            <div className="notes__content">
                <input 
                type="text"
                placeholder="Some awsome title"
                className="notes__title-input"
                />
                <textarea
                placeholder="What happend today"
                className="notes__textarea"
                >
                </textarea>
                <div className="notes__image">
                    <img src="https://www.w3schools.com/css/img_lights.jpg" alt="image"/>
                </div>

            </div>
        </div>
    )
}

export default NoteScreen
