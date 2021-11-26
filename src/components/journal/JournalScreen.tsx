import React from 'react'
import NoteScreen from '../notes/NoteScreen'
import NotingSelected from './NotingSelected'
import Sidebar from './Sidebar'

const JournalScreen = () => {
    return (
        <div className="journal__main-content">
            <Sidebar />
            <main className="nothing__main">
                {/*<NotingSelected />*/}
                <NoteScreen />
            </main>
        </div>
        
    )
}

export default JournalScreen
