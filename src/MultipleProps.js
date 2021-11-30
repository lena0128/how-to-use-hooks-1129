import React, {useState, useEffect} from 'react'

const MultipleProps = (props) => {

    const [count, setCount] = useState(0)
    // we are assigning `count` to 0
    // we are assigning `setCount` as a function that is going to update the state
    
    const [name, setName] = useState("Bob")

    return(
        <div style={{textAlign: "center", marginTop: "40px", fonSize: "45px"}} >
            {count} <br />
            <p>{name} <br /></p>
            <button onClick={() => setName("Nancy")}>Change Name</button>
            <button style={{fontSize: "20px", color: "#FBBF29"}} onClick={() => setCount(count - 1)} > - </button>
            <button style={{fontSize: "20px", color: "#FBBF29"}} onClick={() => setCount(count + 1)} > + </button>
        </div>
    )
}

export default MultipleProps