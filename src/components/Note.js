import { useState } from "react";

const PhoneBook= () => {
  const [newName, setnewName] = useState('');
  const [newNumber, setnewNumber] = useState('');
  const [contact, setcontact] = useState([]);


  const handlesave = (event) => {
    event.preventDefault() 

    // if (newName !== '')
    // setnewName('')
    // setnewNumber('')

  }
  const handleName = (event) => {
    console.log(event.target.value)
    setnewName(event.target.value)
  }

  const handleNumber= (event) => {
    console.log(event.target.value)
    setnewNumber(event.target.value)
  }

  return (
    <>
      <h2>PhoneBook</h2>
      <form>
        <input value={newName} onChange={handleName} />
        <input value={newNumber} onChange={handleNumber} />
        <button onClick={handlesave} >save</button>
      </form>
    </>
  );
}

export default App;
