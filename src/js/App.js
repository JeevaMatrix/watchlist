import SearchBar from './SearchBar';
import Content from './Content';
import SideBar from './SideBar';
import AddNew from './AddNew';
import Footer from './Footer';
import About from './About';
import "../css/app.css";
import '../css/footer.css'
import { useEffect, useState } from 'react';
import {Route , Routes} from 'react-router-dom';
import MovieDetails from './MovieDetails';


function App() {
  
  
  const [myList,setMyList] = useState(JSON.parse(localStorage.getItem('mylist')) || []);
  const [searchList , setSearchList] = useState('');
  const [addSearch , setAddSearch] = useState('');
  const [recommendList, setRecommendList] = useState([]);
  const [addStatus, setAddStatus] = useState(false)

  const [open , setOpen] = useState(true);
  const apikey = process.env.REACT_APP_TMDB_API;

  // const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  // const [data,setData] = useState([]) ;
  
  // window.addEventListener()

  useEffect(()=>{
    localStorage.setItem('mylist',JSON.stringify(myList))
  },[myList])
  useEffect(()=>{
    const listUpdation = JSON.parse(localStorage.getItem('mylist'))
    setMyList(listUpdation)
  },[])

  useEffect(()=>{
    function handleResize(){
      const width = window.innerWidth;
      if(width >800){
        setOpen(true)
      }
      else{
        setOpen(false)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return ()=> window.removeEventListener('resize', handleResize)
  },[]);

  useEffect(()=>{
    const fetchMovie = async()=>{
      try{
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${addSearch}`);
        if(!res.ok){
          throw Error('Data Not Received!')
        }
        const jsonData = await res.json()
        
        setRecommendList(jsonData.results)
      }catch(err){
        console.error(err.message)
      }
    }
    (async()=>fetchMovie())()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[addSearch])


  // const [clicked, setClicked] = useState(false)

  useEffect(()=>{
    function handleClick(event){
      // setOpen(false)
      // console.log('closed')
      const sidebar = document.querySelector("nav"); // Sidebar element
      if (sidebar && !sidebar.contains(event.target)) {
        setOpen(false);
        console.log("closed");
      }
    }
    // console.log(window.innerWidth)
    const width = window.innerWidth
    if(open && width < 800){
        setTimeout(() => {
          window.addEventListener('click',handleClick)
        }, 1000);
    }
    return ()=>{
      setTimeout(() => {
        window.removeEventListener('click',handleClick)
      }, 1000);
    }
  },[open])

  return(
    <>
    <main className={`${open?'isGrid':'noGrid'}`}>
        <SideBar open={open} setOpen={setOpen} />
        <div className='inside'>
        <Routes>
            <Route path='/' element = {
              <>
              <SearchBar myList={myList} searchList={searchList} setSearchList={setSearchList} recommendList={recommendList} setRecommendList={setRecommendList}/> 
              <Content  open={open} myList={myList}/>
              </>}
            /> 
            <Route path='/addnew' element = {<AddNew myList={myList} setMyList={setMyList} addStatus={addStatus} setAddStatus={setAddStatus} recommendList={recommendList} addSearch={addSearch} setAddSearch={setAddSearch}/>} /> 
            <Route path='/about' element = {<About/>} /> 
            <Route path=':id' element={<MovieDetails myList={myList} setMyList={setMyList} addStatus={addStatus} setAddStatus={setAddStatus}/>}></Route>
        </Routes>
        </div>
        <Footer/>
    </main>

   </>
  );
}

export default App;
