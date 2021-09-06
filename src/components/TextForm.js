import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleClear=()=>{
        let newText=" ";
        setText(newText);
    }
    const handleRev=()=>{
        let newText=(text.split("").reverse().join(""));
        setText(newText);
        props.showAlert("Converted to Reverse String", "success");

    }
    const handleCopy=()=>{
        var text =document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard", "success");


    }
    
    const HandleOnChange=(event)=>{
        setText(event.target.value);
    }
    const [text,setText]=useState('');
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <label for="myBox" className="form-label"></label>
            <textarea className="form-control" onChange={HandleOnChange} style={{backgroundColor:props.mode==='dark'?'blanchedalmond':'whitesmoke'}} value={text} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-danger mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClear}>Clear All</button>
            <button className="btn btn-dark mx-2" onClick={handleRev}>Reverse Text</button>
            <button className="btn btn-warning mx-2" onClick={handleCopy}>Copy Text</button>

        </div>
        <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes Read </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox to preview here!!"}</p>
      <p style={{position:"absolute",right:3,bottom:6}}>Made by Saumya shah</p>


        </div>
       </> 
    )
  
  
  
    
};
