import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick = ()=>{
        let newText = " ";
        setText(newText)
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const [text, setText] = useState("");

    return (
        <>
        <div className="container mb-3" style={{color: props.mode==="light"?"black":"white"}}>
            <h1>{props.heading}</h1>
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="dark"?"black":"white", color: props.mode==="light"?"black":"white"}} id="myBox" rows="8"></textarea>
            <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleUpClick}>Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary" onClick={handleLoClick}>Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleClearClick}>Clear</button>
        </div>
        <div className="container my-3" style={{color: props.mode==="light"?"black":"white"}} >
            <h1>Your text Summary</h1>
            <p>Your total characters are {text.length} and words are {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</p>
        </div>
        </>
    )
}
