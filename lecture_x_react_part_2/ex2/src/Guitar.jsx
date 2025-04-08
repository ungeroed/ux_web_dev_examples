import React from "react";

export default function Guitar(props){
    console.log(props);

    return(
        <>
            <h2>Brand: {props.guitarData.brand}</h2>
            <h2>Type: {props.guitarData.type}</h2>
            <h3>Year: {props.guitarData.year}</h3>
            <img src={props.guitarData.imageUrl} alt="Image of the guitar"/>
        </>
    );
}