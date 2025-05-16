import { useState } from "react"
function Count()
{
    let [count,setCount]=useState(0);
    function countInc()
    {
        setCount(count+1);
    }
    return(
        <div>
            <h1>Count :{count}</h1>
            <button onClick={countInc}>Increse</button>
        </div>
    )
}
export default Count;