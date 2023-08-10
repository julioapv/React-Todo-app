import React from 'react'
import './initialMessage.css'

function InitialMessage() {
return (
    <div className='initialMessage-container'>
        <p>Add a new task by pressing the "+" button, then use the task search to look for your tasks.</p>
        <img src="https://static-00.iconduck.com/assets.00/thinking-face-emoji-1935x2048-ul7zt5ry.png" alt="thinking emoji" />
    </div>
)
}

export {InitialMessage};