import React from 'react';
import './App.css';
import Header from './components/Header'
import AddButton from './components/AddButton';
import CreateNote from './components/CreateNote';
import Note from './components/Note';

function App() {
  
  const [page, setPage] = React.useState("")
  const [retrievedNotes, setRetrievedNotes] = React.useState(JSON.parse(localStorage.getItem("notes"))||[])// this needs to be a state! so app stil renders if there is no notes
  // route function for changing pages in app
  function route(e){
    setPage(e.target.name)
  }

  //updates the notes in localstorage
  React.useEffect(()=>{
    localStorage.setItem('notes', JSON.stringify(retrievedNotes))
    // console.log('retrivednoted har settet notes', retrievedNotes)
  },[retrievedNotes])

  // Deletenote function
  function deleteNote(event, noteId){
    event.stopPropagation()
    setRetrievedNotes(oldNotes => oldNotes.filter(note => note.id !== noteId))
  }

  const displayNotes = retrievedNotes.map(note =>{
    return(
      <Note 
        key = {note.id}
        id = {note.id}
        title = {note.notetitle}
        text = {note.notetext}
        deleteNote = {deleteNote}
      />
    )
  })

  // console.log("her er noter fra local:", retrievedNotes)

  return (
    <div className="App"> 
      <Header /> 
      {page === "" && displayNotes}     
      {/* Setting up routing */}
      {page === "" && <AddButton handleClick={route} />}
      {page === "CreateNote" && <CreateNote handleClick={route} />}   

    </div>
  );
}

export default App;
