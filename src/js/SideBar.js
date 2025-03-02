import React from 'react'
import '../css/sideBar.css'
import '../css/app.css'
import { IoMenu } from "react-icons/io5";
import {Link} from 'react-router-dom';
const SideBar = ({open, setOpen}) => {
  
  return (
    <>
    {/* <button className = {`${open ?'noabsIcons':'absIcons'}`} onClick={()=>setOpen(!open)}><IoMenu /></button> */}
    <nav className={`${open ?'barOn':'barOff'}`}>
      <button aria-label='menu button' id='menuIcon' className = {`${open ?'noabsIcon':'absIcon'}`} onClick={()=>setOpen(!open)}><IoMenu /></button>
      <div className= {`sideLayout ${open ?'show':'hide'}`}>
          <div className={`sideContainer ${open ?'show':'hide'}`}>
            <Link to='/' className='sideBtn' onClick={()=>setOpen(false)} >Home</Link>
            <Link to='/addnew' className='sideBtn' onClick={()=>setOpen(false)}>Add New Movie</Link>
            <Link to='/about' className='sideBtn' onClick={()=>setOpen(false)}>About</Link>
        </div>
      </div>
    </nav>
    </>
  )
}

export default SideBar;