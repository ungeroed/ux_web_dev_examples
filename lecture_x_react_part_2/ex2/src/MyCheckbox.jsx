import React,{useState} from "react";

export default function MyCheckbox(){
    const [checked, setChecked] = useState(false);


    const changed = (event) => {
        console.log(event.target.value);
        setChecked(!checked);
    }

    return(
        <>
            <h2>check to add bluetooth:</h2>
            <input type="checkbox" onChange={changed}/>
            {checked ? <h2>Bluetooth added!</h2> : <h2>No Bluetooth added</h2>}
        </>
    );
}