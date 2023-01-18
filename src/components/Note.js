const Note = (props) => {
  const { note, handledelete, handleimportance } = props
  const label = note.important?  'make not important' : 'make important'
  return (
    <li>
      {note.content} <br />
      {note.date}
      {note.important}
      <button onClick={handledelete}> delete</button >
      <button onClick={handleimportance}>{label}</button >
    </li>
  )
}
export default Note;
