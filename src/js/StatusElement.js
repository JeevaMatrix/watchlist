import React from 'react'
import '../css/addNew.css'

const StatusElement = ({setAddStatus}) => {
  return (
    <div className='radioSection'>
          <label><input 
            className='radioBtn' 
            type="radio" 
            name='status' 
            value='watched' 
            onChange={()=>setAddStatus(true)}
            required/>
          Watched</label>

          <label><input 
            className='radioBtn' 
            type="radio" 
            name='status' 
            value='Not Watched' 
            onChange={()=>setAddStatus(false)}
            required/>
          Not Watched</label>
    </div>
  )
}

export default StatusElement