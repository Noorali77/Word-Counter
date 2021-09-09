import React,{useState} from 'react'

export default function TextArea(props) {

let allowChange = (event)=>{
    setText(event.target.value)
}

let changeUp =()=>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert('Text are Converted to UpperCase','success')

}
let changeLc =()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Text are Converted to LowerCase','success')
   
    
}

let clearText = ()=>{
    setText('')
    props.showAlert('Textboard is Cleared','danger')

}

let removeSpace = ()=>{
  let removeSpace = text.replace(/\s+/g, ' ').trim();
  setText(removeSpace)
  props.showAlert('Extra Spaces are removed','success')


}

let copyText = ()=>{
    let copyText = document.getElementById('textArea');
    copyText.select();
    navigator.clipboard.writeText(copyText.value)
  props.showAlert('Text are Copied to Clipboard','success')

}




    const [text, setText] = useState('')
    return (
        <div className="container mt-4">
            <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="fw-bold mb-2">Enter Your Text Here:</label>
  <textarea className="form-control" style={{backgroundColor: props.mode==='light'?'white':'grey', color : props.mode==='light'?'black':'white' }} value={text} onChange={allowChange} id="textArea" rows="8"></textarea>
<div>
    <button className='btn btn-primary mt-3 mx-3' onClick={changeUp}>UpperCase</button>
    <button className='btn btn-primary mt-3 mx-3' onClick={changeLc}>LowerCase</button>
    <button className='btn btn-danger mt-3 mx-3' onClick={clearText}>ClearText</button>
    <button className='btn btn-primary mt-3 mx-3' onClick={removeSpace}>Remove Extra Space</button>
    <button className='btn btn-primary mt-3 mx-3' onClick={copyText}>CopyText</button>




</div>
</div>
<div>
    <h1>Preview:</h1>
    <p>{text.length>0?text:"Enter Text to preview:"}</p> <br />

    <h1>Summary</h1>
    <p>It takes {text.length ==0? " 0 minute" : 0.008*text.length + " minutes"} to read {text.split('').length==0 && text.length==0?text.split('').length + ' word ':text.split(' ').length+' words'} and {text.length<=1?text.length+" letter" : text.length+" letters"}</p>
</div>
        </div>
    )
}
