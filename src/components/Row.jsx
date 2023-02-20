import React, {useState, useEffect} from 'react'
import Trailermodal from './Trailermodal'
import axios from "../functionalities/axios"
import "../index.css"
import { getURLParams } from '../functionalities/urlparams'
const base_url="https://image.tmdb.org/t/p/original/"

function Row({title, fetchUrl,isLargeRow}) {
  const [trailerURL,setTrailerURL]=useState("")
  const [show, setShow] = useState(false)
  const [movies, setMovies]= useState([])
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
    console.log(film)
    console.log(getURLParams(film))
    const URLSearchParam= await getURLParams(film)
    console.log(URLSearchParam)
    if(URLSearchParam){
    
    setTrailerURL(URLSearchParam.get("v")) 
    setShow(true);
    } else
      alert("Ug-oh no trailer found!")
  }

  return (
    <div className='rows py-3'>
        <h2 className='mb-sm-4 mb-2 fw-bold'>{title}</h2> 
        <div className="row movie_row">
          {movies.map((movie)=>{
            return (
            <div className={`${classModifier} poster_holder my-sm-4 my-3 mx-2 mx-sm-3 px-0`}>
              <img src={`${base_url}${movie.poster_path}`} key={movie.id} alt={movie.name} className="movie_poster" onClick={()=>handleShow(movie)} style={{borderRadius: "6px"}}/>
            </div>
            )
          })}
        </div>
        
        {trailerURL && <Trailermodal show={show} handleClose={handleClose} trailerURL={trailerURL}/>}
    </div>
  )
}

export default Row
