import React from "react";

export default function Guitar(props){
    console.log(props);
    const childData = "radical news from the child!";
    const clicked = () => {props.myCallbackFunction(childData)}
    return(
        <>
            <button onClick={clicked}>send data to parent element</button>
        </>
    );
}