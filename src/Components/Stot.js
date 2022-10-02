import React, { useState } from 'react';

export default function Stot() {
     const [myStyle, setStyle] = useState({
        color : 'white',
        backgroundColor : 'black',
        idth: '18rem',

     })

     const toggleStyle=() =>{
        if (myStyle.color ==='white')
        setStyle({
            color : 'black',
            backgroundColor : 'white',
            idth: '18rem',
        })

            else
            setStyle({
                color : 'white',
                backgroundColor : 'black',
                idth: '18rem',
            })
        
     }
    
  return (
    <div classNameName="card" style={myStyle}>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <button onClick={toggleStyle} type="button" className="btn btn-primary"> Click me </button>
</div>
    
  )
}
