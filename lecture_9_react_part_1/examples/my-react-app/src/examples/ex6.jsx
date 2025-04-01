import React from "react";

function MyEx6Component(){
    const shouldRender = true;
    return(
        <>
            {shouldRender ?
                <h1>Yes sir!</h1> : <h1>No Sir!</h1>
            }
        </>
    )
}
export default MyEx6Component;