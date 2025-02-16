import { useState } from 'react'
import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../css/addNew.css'
import RecommendBox from './RecommendBox'
import StatusElement from './StatusElement'
import AlertBox from './AlertBox';

const AddNew = ({myList, setMyList, addStatus,setAddStatus ,recommendList,addSearch,setAddSearch}) => {

  const [selectedMovie,setSelectedMovie] = useState({})
  const [popup,setPopup] = useState(false)
  const navigate = useNavigate()


  function handleNewMovie(e){
    e.preventDefault()
    try{
      if(selectedMovie && Object.keys(selectedMovie).length > 0){

        const exist = myList.some(movie => movie.id === selectedMovie.id)
        if(exist){
          alert('Movie already in List');
          return;
        }
      const newMovie = {...selectedMovie, 'status':addStatus}
      const updatedList = [...myList,newMovie]
      setMyList(updatedList)
      setAddSearch('')
      setPopup(true)
      setTimeout(()=>navigate('/'),3000)
      }
      else{
        alert('Select a valid Movie')
        setAddSearch('')
      }
    }catch(err){
      console.log(err.message)
    }
    finally{
      setSelectedMovie({})
    }
  }
  
  return (
    <section id='addNewSection'>
      <AlertBox popup={popup} setPopup={setPopup}/>
      <form className='addNewForm'action="">
        <h1>Add Movies to WatchList</h1>

        <div className='titleBox'>
          <label id='titleLabel'>Title:</label>
          <input 
            type="text" 
            id='addTitle'
            value={addSearch}
            onChange={(e)=>setAddSearch(e.target.value)}
          />
        </div>
        <RecommendBox recommendList={recommendList} setSelectedMovie={setSelectedMovie} setAddSearch={setAddSearch} mode='add'/>

        <div className='SelectedOneMovie'>
          <img  className= 'poster' id='selectedMoviePoster' src={`https://image.tmdb.org/t/p/w342${selectedMovie.poster_path}`} alt="your movie" />
          <h3>{selectedMovie?.title?.slice(0, 35) || ""}</h3>       {/*need to modify */}
          <p>{selectedMovie.release_date}</p>
        </div>

        <StatusElement popup={popup} setAddStatus={setAddStatus}/>

        <button 
          type='submit' 
          className='addMovieBtn'
          onClick={(e)=>handleNewMovie(e)}
        >Add Movie</button>

      </form>
    </section>
  )
}

export default AddNew