import React from "react";
import {nanoid} from "nanoid";

export default function CreateNote(props){
    
    const [notes, setNotes] = React.useState(JSON.parse(localStorage.getItem("notes")) ||[])
    const [newNote, setNewNote] = React.useState({
        id: nanoid(),    
        notetitle: "",
        notetext: ""
    })
     

    //sends notes array to local storage
    React.useEffect(()=>{
        localStorage.setItem('notes', JSON.stringify(notes))
    },[notes])


    function handelCreateNote(e){
        setNotes(prevNotes => [newNote, ...prevNotes]) // adds the new note to the notes array
    }


    function handleChange(e){
        //sets the state of newnote
        setNewNote(prevNoteData =>{
            return{
                ...prevNoteData,
                [e.target.name]: e.target.value
            }
        })
    }
    
    return(
        <div className="createnote">

            <button name="" key="Home" className='backbtn' onClick={props.handleClick}>←</button>

            <h1>Create a note</h1>

            <form className="form">
                <input 
                    type="text"
                    placeholder="Title on note"
                    name="notetitle"
                    value={newNote.notetitle}
                    onChange={handleChange}
                />
                <textarea
                    type="text"
                    placeholder="Write your note here..."
                    name="notetext"
                    value={newNote.notetext}
                    onChange={handleChange}
                />
                <button name="submitNote" className="submitNote" onClick={handelCreateNote}>Create Note</button>
            </form>

        </div>
    )
}