import React from 'react'
// import './app.css';
import { Link } from 'react-router-dom';

import '../css/content.css'

import '../css/app.css'


  const Content = ({myList, open}) => {
  // const data = [{id: '1'},{id: '2'},{id: '3'},{id: '4'},{id: '5'},{id: '6'},{id: '7'}]
  return (
    <header>
        <div className='topHeader'>
          <h1>Your wishlist</h1>
          <Link to='addnew' className='addBtn'>
          <h1 className={`${open ?'show':'hide'}`}> ADD+ </h1>
          </Link>
        </div>
        <div className='movies'>
        { myList.length >0 ? myList.slice().reverse().map((movie) =>(
                <Link to={`/${movie.id}`}key={movie.id}><div className='oneMovie' >
                    <img className= 'poster' src={(movie.poster_path) ? `https://image.tmdb.org/t/p/w342${movie.poster_path}` : `/poster.jpeg`} alt={movie.title} />
                    <h3>{movie.title.slice(0,25)}</h3>
                    <>
                    <p>{movie.release_date}</p>
                    <p className={`${movie.status ? 'status': 'nostatus'}`}>{(movie.status)?'Watched':'Not Watched'}</p>
                    </>
                </div></Link>
            )) :  <p>Your List is Empty</p>} 
        </div>

    </header>
  )
}

export default Content 