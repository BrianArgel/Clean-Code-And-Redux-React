import React from 'react'

const NoteAppBar = () => {
    return (
        <div className="notes__appbar">
            <span>25 noviembre 2020</span>
            <div>
                <button className="btn">
                    Picture
                </button>
                <button className="btn">
                    Save
                </button>
            </div>
        </div>
    )
}

export default NoteAppBar
