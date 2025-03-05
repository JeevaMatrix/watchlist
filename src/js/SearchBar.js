import React, { useEffect } from 'react'
import '../css/searchBar.css'
import RecommendBox from './RecommendBox';

const SearchBar = ({myList, searchList , setSearchList, recommendList, setRecommendList}) => {

  useEffect(()=>{
    const searcher = (searchList)=>{
      const processedResult = myList.filter(movie => ((movie.title).toLowerCase()).includes((searchList).toLowerCase()) || 
      ((movie.overview).toLowerCase()).includes((searchList).toLowerCase()))
      setRecommendList(processedResult)
    }
    if (searchList) {
      searcher(searchList);
    } else {
      setRecommendList([]);
    }
},[searchList])

function handleClear(e){
  e.preventDefault()
  setSearchList('')
} 

  return (
    <div id='searchBarRecommend'>
      <form action="" className='searchList'>
        <label htmlFor="search" id='searchLabel'>Search your list</label>
        <input 
        type="text" 
        name="" 
        id="search" 
        onChange={(e)=>setSearchList(e.target.value)} 
        placeholder='Search Your List'
        value={searchList}
        />
        <button type='submit' id='searchButton' onClick={(e)=>handleClear(e)}>Clear</button>
      </form>
      <RecommendBox recommendList={recommendList} mode='search' id='recInSearch'></RecommendBox>
    </div>
  )
}

export default SearchBar