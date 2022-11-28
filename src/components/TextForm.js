import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange =(event) =>{
        // console.log("OnChnage was clicked")
        setText(event.target.value);
    }
    const handleCopy =() =>{
      
      var text = document.getElementById("TextBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces= () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
    }
    const handleClear =() =>{
      // console.log("OnChnage was clicked")
      setText("")
    }
    const [text, setText] = useState('');

  return (
    <>
    <div className="container"  style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>{props.heading}</h2>
<div className="mb-3">
{/* <label for="TextBox" class="form-label">Example textarea</label> */}
<textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}}id="TextBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1 my-1 " onClick={handleUpClick} >Conert to UpperCase</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleLoClick} >Conert to LowerCase</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleCopy} >Copy Text</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleClear} >Clear</button>
</div>
<div className="container my-2" style={{color:props.mode==='dark'?'white':'#042743'}}>
<h2>Your text summary</h2>
<p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
<p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter something in text box to preview it here"}</p>
</div>
</>
  )
}
