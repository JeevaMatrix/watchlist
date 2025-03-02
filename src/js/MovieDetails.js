import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { MdOutlineDeleteOutline } from "react-icons/md";
import '../css/movieDetails.css'
import StatusElement from './StatusElement';


const MovieDetails = ({ myList,setMyList, addStatus, setAddStatus}) => {

  const navigate = useNavigate()
  const [showUpdate, setShowUpdate] = useState(false);
  const [movie, setMovie] = useState({})

  const {id} = useParams();

  useEffect(() => {
    const selectedMovie = myList.find(film => (film.id).toString() === id);
    setMovie(selectedMovie || {});  // Set a default empty object if movie not found
  }, [id, myList]);


  function handleDelete(){
    const selectedMovie = myList.find(film => (film.id).toString() === id);
    const updatedList = myList.filter(film=>(film.id !== selectedMovie.id))
    setMyList(updatedList)
    navigate('/');
  }

  function handleUpdate(){
    setShowUpdate(true)
  }

  function handleSave(){
    setShowUpdate(false)
    const updatedMovie = {...movie, 'status':addStatus}
    
    const updatedList = myList.map(film => (film.id === updatedMovie.id ? updatedMovie : film));

    setMovie(updatedMovie)
    setMyList(updatedList)
  }

  return (
    <section id='detailsPage'>
      <article>
        <div className='movies'>
        {movie &&
            <div className='oneMovie'>
                <img  className= 'poster' src={(movie.poster_path) ? `https://image.tmdb.org/t/p/w342${movie.poster_path}` : `/poster.jpeg`} alt={movie.title} />
                <h3>{movie?.title ? movie.title.slice(0, 25) : "No Title"}</h3>
                <>
                <p>{movie.release_date}</p>
                <p className={`${movie.status ? 'status': 'nostatus'}`}>{(movie.status)?'Watched':'Not Watched'}</p>
                </>
                
          </div>
        } 
         
        {(!movie)  &&  <div>
            <p>Sorry data not available!</p>
            <Link to='/'><p>visit Home Page</p></Link>
          </div>
        }
        </div>
      </article>
      <article id='detailsPad'>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <div className='ModifyBtns'>
            <button className='DeleteBtn' onClick={handleDelete} aria-label='delete button'><MdOutlineDeleteOutline /></button>
            <button className='UpdateBtn' onClick={handleUpdate} aria-label='change button'>Change Status</button>  
          </div>
          {showUpdate && 
          <>
          <StatusElement setAddStatus={setAddStatus}/>
          <button className='SaveBtn' onClick={handleSave} aria-label='save button'>save</button>
          </> 
          }
      </article>
    </section>
  )
}

export default MovieDetails