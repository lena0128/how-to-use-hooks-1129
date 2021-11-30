import React, {useState, useEffect} from 'react'

const FunctionalApp = (props) => {

    const [count, setCount] = useState(0)
    // we are assigning `count` to 0
    // we are assigning `setCount` as a function that is going to update the state

    const myFunc = () => {
        console.log("inside myFunc")
    }
    
    // 1. if we ONLY pass in a callback function as an argument to useEffect(), 
    // this callback function will behave as componentDidMount, componentDidUpdate, or componentWillUnmount
    // which means this callback function will be invoked when compnenent mounted, updated, or unmounted. 
    useEffect(myFunc)


    // 2. if we pass a second argument - everytime we update the count state, the callback function is being invoked
    // we are basically saying: invoke the callback function if the count changes
    useEffect(myFunc, [count])

    
    return(
        <div style={{textAlign: "center", marginTop: "40px", fonSize: "45px"}} >
            {count} <br />
            <button style={{fontSize: "20px", color: "#FBBF29"}} onClick={() => setCount(count - 1)} > - </button>
            <button style={{fontSize: "20px", color: "#FBBF29"}} onClick={() => setCount(count + 1)} > + </button>
        </div>
    )
}

export default FunctionalApp