import React from "react";
import { Component } from "react";

class MyHeadline extends Component{
    constructor(){
        super()
        console.log("this ran")
    }

    // Fetch all clothing items
    function getAllClothes() {
        const response = await fetch(API_BASE_URL);
        return response.json();
    }
    render(){
        return <h1>my awesome headline</h1>
    }
}

export default MyHeadline;