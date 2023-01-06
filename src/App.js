import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0)
  setTimeout(()=>setCounter(counter+1),1000);

  console.log(`Rendering ${counter}....`)
  return (
    <div>
      <h2>{counter} </h2>
    </div>
  );
}

export default App;
