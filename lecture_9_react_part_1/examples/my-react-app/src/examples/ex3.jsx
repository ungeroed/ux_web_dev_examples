import React from "react";
import { useState } from "react";

function MyHeadline2(){
    const [getter, setter] = useState("default value");
    return(<>
        <h1>My Functional component headline</h1>
        <h3>{getter}</h3>
    </>)
}
export default MyHeadline2;