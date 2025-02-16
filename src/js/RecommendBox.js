import React from 'react'
import '../css/recommendBox.css'
import { useNavigate} from 'react-router-dom'

const RecommendBox = ({ recommendList,setSelectedMovie,setAddSearch, mode}) => {

  const navigate = useNavigate()
  function handleSelect(e,movie){
    e.preventDefault()
    setSelectedMovie(movie)
    setAddSearch('')

  }

  return (
    recommendList.length >0  && (<div className='recommend'>
        {recommendList.map(movie =>(
                <button onClick={(e)=>{
                      if(mode === 'add'){
                        handleSelect(e, movie);
                        // setSelectedMovie(movie)
                      }
                      else if(mode === 'search'){
                        navigate(`/${movie.id}`);
                      }
                    }}
                  key={movie.id}>

                  <div className='oneMovieInRecommend'>
                      <img className= 'poster' id='posterInRecommend' src={(movie.poster_path) ? `https://image.tmdb.org/t/p/w342${movie.poster_path}` : `/poster.jpeg`} alt={movie.title} />
                      {/* <img  className= 'poster' src="/poster.jpeg" alt="" id='posterInRecommend' /> */}
                      <div className="sideDetails">
                          <h3>{movie?.title ? movie.title.slice(0, 60)+'...' : "No Title"}</h3>
                          <p>{movie.release_date}</p>
                      </div>
                  </div>
                </button>
        ))}
    </div>)
  );
}

export default RecommendBox