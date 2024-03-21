import React ,{useState} from 'react'


export default function Textform(props) {

    
    const handleupclick = () =>{ 
     console.log("Upper case button was clicked" + text)
     let Newtext= text.toUpperCase();
     setText(Newtext);
     props.showAlert('converted to upper case , success')
    }

    const handleclick = () =>{ 
        console.log("Upper case button was clicked" + text)
        let Newtext= text.toLowerCase();
        setText(Newtext);
        props.showAlert('converted to lower case , success')
    }

    const handleoncopy= () =>{ 
           
    let text =document.getElementById('mybox') ;
    text.select();
    navigator.clipboard.writeText(text.value)
        
        }
        const handleoncapital = () =>{ 
            console.log("")
            return text.charAt(0).toUpperCase() + text.slice(1);
            
        }
 
    const handleonclear = () =>{ 
        console.log("")
        let Newtext= ('' );
        setText(Newtext);

   
    }
    const handleOnchange = (event) =>{   
     console.log("on change")
     setText(event.target.value);
    }

    const [text ,setText]= useState(" ")

  return (
<>    
    <div className='container' style={{color: props.color==='dark'?'#042743':'black'}}>
        <h1>{props.heading}</h1>
       <div class="mb-3">
          
          <textarea className="form-control"  value = {text} style={{background: props.color==='dark'?'#042743':'white',
          color: props.color==='dark'?'yellow':'black'}} onChange={handleOnchange} 
          id="mybox" rows="8"> </textarea>
       </div>
       
       
       <button className="btn btn-primary mx-2 my-1"on onClick={handleupclick}  >Convert To upper case</button>
       <button className="btn btn-primary mx-2 my-1" on onClick={handleclick} >Convert To lower case</button>
       <button className="btn btn-primary mx-2 my-1" on onClick={handleoncopy} >Copy Text</button>
       <button className="btn btn-primary mx-2 my-1" on onClick={handleoncapital} >Capatilize 1st word</button>
       <button className="btn btn-primary mx-2 my-1" on onClick={handleonclear} >Clear Text</button>

    </div>
    <div className="container my-3" style={{color: props.color==='dark'?'yellow':'black'}}>
        <h2>Your Text Summary</h2>
        <p> {text.split(" ").filter((a1)=>a1.length!==0).length} words and {text.length} characters</p>
        <p>{text.split(" ").length*0.008} minutes read</p>
    </div>
</>
  )
}
