import React, {useState, useEffect} from 'react'
import Trailermodal from './Trailermodal'
import axios from "./axios"
import movieTrailer from "movie-trailer"
import "./rows.css"
const base_url="https://image.tmdb.org/t/p/original/"

function Row({title, fetchUrl,isLargeRow}) {
  const [movies, setMovies]= useState([])
  const [trailerURL,setTrailerURL]=useState("")
  const [show, setShow] = useState(false);
  let classModifier=isLargeRow?"bigRow":"smallRow"
  
  useEffect(()=>{
    async function fetchData(){
      const request= await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  },[fetchUrl])

  const handleClose = () => setShow(false);

   async function handleShow(film){
    const url= await movieTrailer(film?.name||film?.title||"")
    if(url){
    const urlParams= new URLSearchParams(new URL(url).search) 
    setTrailerURL(urlParams.get("v")) 
    setShow(true);
    }
  }

  return (
    <div className='rows py-3'>
        <h2 className='mb-4 fw-bold'>{title}</h2> 
        <div className="row">
          {movies.map((movie)=>{
            return (
            <div className={`${classModifier} poster_holder my-4 mx-3 px-0`}>
              <img src={`${base_url}${movie.poster_path}`} key={movie.id} alt={movie.name} className="movie_poster" onClick={()=>handleShow(movie)}/>
            </div>
            )
          })}
        </div>
        {trailerURL && <Trailermodal show={show} handleClose={handleClose} trailerURL={trailerURL}/>}
    </div>
  )
}

export default Row
