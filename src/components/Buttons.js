import { useState } from "react";
import Statistics from "./Statistics";

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
            <button onClick={handleNeutral}>Neutral</button>
            <button onClick={handleBad}>Bad</button>
            <Statistics counter={counter} counter1={counter1} counter2={counter2} />

        </div>
    )
}
export default Buttons