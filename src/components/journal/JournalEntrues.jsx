import React from 'react'
import JournalEntri from './JournalEntri'

const JournalEntrues = () => {
    const entries= [1,2,3,4,5,6,7,8,8,10]
    return (
        <div className="journal__entries">
            {
                entries.map(value => (
                    <JournalEntri key={value} />
                ))
            }
        </div>
    )
}

export default JournalEntrues
