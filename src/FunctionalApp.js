import React, {useState, useEffect} from 'react'

const FunctionalApp = (props) => {
    return(
        <div style={{textAlign: "center", marginTop: "40px", fonSize: "45px"}} >
            <button style={{fontSize: "20px", color: "#FBBF29"}} onClick={() => console.log("clicked")} > - </button>
            <button style={{fontSize: "20px", color: "#FBBF29"}} onClick={() => console.log("clicked")} > + </button>
        </div>
    )
}

export default FunctionalApp