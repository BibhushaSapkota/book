import { useState } from "react";

const Buttons = () => {
    const [counter, setCounterGood] = useState(0)
    const [counter1, setCounterNeutral] = useState(0)
    const [counter2, setCounterBad] = useState(0)
    const handleGood = () => {
        setCounterGood(counter + 1)
    }
    const handleNeutral = () => {
        setCounterNeutral(counter1 + 1)
    }
    const handleBad = () => {
        setCounterBad(counter2 + 1)
    }
    return (
        <div>
        <button onClick={handleGood}>Good</button>
        <button onClick={handleNeutral }>Neutral</button>
        <button onClick={handleBad}>Bad</button>

        <h2>statistics</h2>
            <h2>Good: {counter} </h2>
            <h2>Bad: {counter2}</h2>
            <h2>Neutral :{counter1}</h2>
        </div>

    )
}
export default Buttons;