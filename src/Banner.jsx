import React, { useEffect, useState } from 'react'
import axios from './axios'
import requests from './requests'
import Trailermodal from './Trailermodal'

function Banner() {
    const base_url="https://image.tmdb.org/t/p/original/"
    const [movie, setMovie]= useState([])

    useEffect(() => {
      async function fetchData(){
    const request= await axios.get(requests[0].movieURL)
    
    setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)])
    return request
      }
      fetchData()
      }, [])
      
    function textTruncate(str,n){
        return str?.length>n?str.substr(0,n-1)+"...":str
      }

  return (
    <header className='banner_container mb-3' style={{
        backgroundSize:"cover",
        backgroundImage:`URL("${base_url}${movie?.backdrop_path}")`,
        backgroundPosition:"center center",
        position:"relative"
    }}>
        <div className="banner_content">
            <h1>
                {movie?.title||movie?.name||movie?.original_name}
            </h1>
            <div className="row justify-content-flex-start align-items-center">
              <div className="col-md-3 col-sm-5 col-5">
                <button style={{width:"100%"}} className="d-flex justify-content-center align-items-center">
                <i className='bx bx-play'></i>
                  Play</button>
              </div>
              <div className="col-md-3 col-sm-5 col-6">
              <button style={{width:"100%"}} className="d-flex justify-content-center align-items-center">
              <i class='bx bx-plus'></i>
                My List</button>
              </div>
            </div>
            <p>{textTruncate(movie?.overview,150)}</p>
        </div>
        <div className="banner_bottom_shadow_effect"></div>
    </header>
  )
}

export default Banner