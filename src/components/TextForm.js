import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("uppercase was click" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("converted to upperCase","success")
  };
  const handleLoClick = () => {
    console.log("uppercase was click" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("converted to lowerCase","success")
  };
  const handleOnChange = (event) => {
    console.log(" click Onchange");
    
    setText(event.target.value);

  };

  const [text, setText] = useState("enter text here");

  return (
    <>
      <div className="container"  style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to upperCase
        </button>
        <button className="btn btn-primary  mx-2" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
      </div>
      <div className="container my-5"  style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your text summery</h1>
        <p> words {text.split(" ").length} and charactor{text.length}</p>
        <p> Time to read {text.split(" ").length * 0.008} in minites</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview here"}</p>
      </div>
    </>
  );
}
