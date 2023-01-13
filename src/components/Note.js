import { useState,useEffect } from "react";
import axios from "axios";
const Note=()=>{
    const [newNote, setnewNote] = useState('');
    const [notes, setNotes] = useState([]);
    const [showall, setShowAll] = useState(true);

    useEffect(()=>{
            axios.get('http://localhost:3001/notes')
            .then((response)=>{
                console.log(response)
                setNotes(response.data)
            }).catch(err=>(console.log(err)))
    })
  
    const notesToShow = showall
      ? notes
      : notes.filter(n => n.important === true)
  
  
    const handlesave = (event) => {
      event.preventDefault()
      //create a note 
      const note = {
        id: notes.length + 1,
        content: newNote,
        date: new Date().toString(),
        important: Math.random() < 0.5
  
      }
      if (newNote !== '') setNotes(notes.concat(note))
      setnewNote('')
    }
    const handleInputChange = (event) => {
      console.log(event.target.value)
      setnewNote(event.target.value)
    }
  
    const handledelete = (id) => {
      if(window.confirm(`Do you really want to delete note with id ${id}?`)){
        setNotes(notes.filter(notes=> notes.id !== id));
      }
  
    }
  
    return (
      <>
        <h2>Notes</h2>
        <button onClick={() => setShowAll(!showall)}>{showall ? 'show important' : 'show all'}</button>
        <ul>
          {notesToShow.map(note =>
  
            <li key={note.id}>
              {note.content}<br />
              {note.date} <button onClick={() => handledelete(note.id)}>delete</button>
            </li>
          )}
        </ul>
  
        <form>
          <input value={newNote} onChange={handleInputChange} />
          <button onClick={handlesave} >save</button>
        </form>
      </>
    );
  
}


   

export default Note;
