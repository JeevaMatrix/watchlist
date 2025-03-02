import { useEffect } from 'react';
import '../css/alertBox.css'
import React from 'react'

const AlertBox = ({popup,setPopup}) => {
  useEffect(()=>{
    if(popup){
       setTimeout(()=>setPopup(false),2000)
    }
  },[popup])

  return (
      popup && (<div className='successBox'>
      <h1>Movie Added Successfully! 
        Continue Listing!</h1>
    </div>)
  )
}

export default AlertBox