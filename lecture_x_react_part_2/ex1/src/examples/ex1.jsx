import React from "react";
import { useState } from "react";

export default function MyCounter(){

    const [state, setCount] = useState(0)
    const onClick = () => {
        setCount(state + 1)
    }
    return(<><button onClick={onClick}>Increase</button><h3>Current count: {state}</h3></>)
};