import React from "react";

function MyEx5Component(){
    const content = ["first","second","third"];

    return(
        <ul>
            {content.map((input) => <li key={content.indexOf(input)}>{input}</li>)}
        </ul>
    )
}
export default MyEx5Component;