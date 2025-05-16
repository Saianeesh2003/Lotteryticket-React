import { useState } from "react";

function Like()
{
    let [color,setColor]=useState(false);
    
    function click()
    {
setColor(!color)
    }
    return(
        <div>
            <p onClick={click} >
            
                {color ?  <i class="fa-solid fa-heart"></i> 
                    :  <i class="fa-regular fa-heart"></i>}

                
            
            </p>
           
        </div>
    )
}
export default Like;