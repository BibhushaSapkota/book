const Statistics = (props) => {
    const {counter,counter1,counter2}=props
    const all=()=>counter+counter1+counter2
    const average=()=>(counter-counter2)/all()
    const positive=()=>(counter/all())*100

    
    return (
        <div>
            <h2>statistics</h2>
            <h2>Good: {counter} </h2>
            <h2>Bad: {counter2}</h2>
            <h2>Neutral :{counter1}</h2>
            <h2>All:{all()}</h2>
            <h2>average:{average()}</h2>
            <h2>positive:{positive()}%</h2>
        </div>
    );

}
export default Statistics
