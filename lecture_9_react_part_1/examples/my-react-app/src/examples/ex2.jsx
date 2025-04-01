import React from "react";
import { Component } from "react";

class MyHeadline extends Component{
    constructor(){
        super()
        console.log("this ran")
    }
    render(){
        return <h1>my awesome headline</h1>
    }
}

export default MyHeadline;