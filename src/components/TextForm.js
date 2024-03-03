import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');
  
  const handleToggle = () => {
    let newText = toggleCase(text);
    setText(newText);
  };

  const toggleCase = (str) => {
    return str.split('').map((char, index) => {
      // Toggle case for even-indexed characters
      if (index % 2 === 0) {
        return char.toUpperCase();
      } else {
        // Toggle case for odd-indexed characters
        return char.toLowerCase();
      }
    }).join('');
  };
  

  const handleUpClick = () => { 
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };

  const handleClearText = () => {
    let newText = (" ");
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };

  
  const handleOnChange = (event) => { 
    setText(event.target.value);
  };

  const handleCopy = () => {
    console.log("Copied");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to clipboard!", "success");
  }

  
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed Extra Spaces!", "success");
  }

  return (
    <>
      <div className="container" style = {{color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}  id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleToggle}>Toggle Case</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
        
      </div>
      <div className="container my-3" style = {{color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1>Your text Summary</h1>
        <p>{text.length > 0 ? `${text.split(" ").length} words and ${text.length} characters` : "0 words and 0 characters"}</p>

        <p>{text.trim().length > 0 ? `${0.008 * text.split(" ").length} Minutes read` : "0 Minutes read"}</p>

        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}