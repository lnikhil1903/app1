import React, { useState } from 'react';

export default function Forms() {
    const [txt, setTxt] = useState({
        width : '50%',
        backgroundColor : 'pink',
     })


        const toggleWidth=() =>{
            if (txt.width ==='50%')
            setTxt({
                backgroundColor : 'pink',
    
            })
    
                else
                setTxt({
                    backgroundColor : 'white',
                })
            
         }
     
     return(
        <>
        <div classNameName="mb-3">
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<br></br>
<div className="mb-3" style={txt}>
  <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button onClick={toggleWidth} type="button" className="btn btn-primary"> Change width </button>
</>
     )}