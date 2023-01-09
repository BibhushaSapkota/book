import { useState } from "react";

const History = () => {
    const [history , setHistory] = useState([]);
    const [left, setCounterLeft] = useState(0)
    const [right, setCounterRight] = useState(0)


    const handleLeft = () => {
        setCounterLeft(left + 1)
        setHistory((history)=>[...history,'L'])
        
    }
    const handleRight = () => {
        setCounterRight(right + 1)
        setHistory((history)=>[...history,'R'])
    }
    

    return (
        <div>
            <h2>{left}
                <button onClick={handleLeft}>Left</button>
                <button onClick={handleRight}>Right</button>
                {right}</h2>

            <h2> Button Press history: {history} </h2>
        </div>
    )
}
export default History