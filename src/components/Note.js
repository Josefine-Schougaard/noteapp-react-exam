import React from "react"

export default function Note(props){
    
    const [showNote, setShowNote] = React.useState(false)
    function toggleNote(){
        setShowNote(prevShown => !prevShown)
    }

    return(
        <div id={props.id} className="note">
            <h3>{props.title}</h3>
            {showNote && <p>{props.text}</p>}
            <button className="note-btn" onClick={toggleNote}>{showNote ? "Hide" : "Show"} note</button>
            {showNote && <button className="note-btn" onClick={(event) => props.deleteNote(event, props.id)}>Delete note</button>}
        </div>
    )
}