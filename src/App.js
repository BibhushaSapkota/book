import { useState, useEffect } from "react";
import axios from "axios";
import Note from "./components/Note";

const url = 'http://localhost:3001/notes'

function App() {
  const [newNote, setnewNote] = useState('');
  const [notes, setNotes] = useState([]);
  const [showall, setShowAll] = useState(true);

  const getNotes = () => {
    axios.get(url)
      .then((response) => {
        console.log(response)
        setNotes(response.data)
      }).catch(err => (console.log(err)))
  }

  useEffect(getNotes, [])
  // const getNotes = async () => {
  //   try {
  //     let response = await axios.get(url)
  //     setNotes(response.data)
  //   } catch (err) { console.log(err) }
  // }

  const handlesave = (event) => {
    event.preventDefault()
    //create a note 
    const note = {
      content: newNote,
      date: new Date().toString(),
      important: Math.random() < 0.5

    }
    if (newNote !== '') {
      axios.post(url, note)
        .then(response => {
          console.log(response)
          setNotes(notes.concat(response.data))
        }).catch(err => console.log(err))
      //   if (newNote !== '') setNotes(notes.concat(note))

    }
  }

  const handledelete = (id) => {
    if (window.confirm(`Do you really want to delete note with id ${id}?`)) {
      axios.delete(`http://localhost:3001/notes/${id}`)
        .then(response => {
          setNotes(notes.filter(n => n.id !== id));
        }).catch(err => console.log(err))
    }
  }

  const handleimportance = (id) => {
    if (window.confirm(`Do you really want to change importance of note with id ${id}?`)) {
      let targetnote = notes.find(n => n.id === id)
      targetnote = { ...targetnote, important: !targetnote.important }
      axios.put(`http://localhost:3001/notes/${id}`, targetnote)
        .then(response => {
          setNotes(notes.map(n=>n.id=== id? response.data : n))
        }).catch(err => console.log(err))
    }
  }

  const notesToShow = showall
    ? notes
    : notes.filter(n => n.important === true)

  const handleInputChange = (event) => {
    console.log(event.target.value)
    setnewNote(event.target.value)
  }

  return (
    <>
      <h2>Notes</h2>
      <button onClick={() => setShowAll(!showall)}>{showall ? 'show important' : 'show all'}</button>
      <ul>
        {notesToShow.map(note =>
          <li key={note.id}>
            <Note note={note} handledelete={() => handledelete(note.id)} handleimportance={() => handleimportance(note.id)}
            />
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

export default App;