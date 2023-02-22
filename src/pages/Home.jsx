import React from 'react'
import Row from "../components/Row"
import Banner from "../components/Banner"
import Nav from "../components/Nav"
import requests from "../functionalities/requests"
function Home() {
  return (
    <div>
      <Nav/>
      <Banner/>
      {
        requests.map((item)=>{
          return <Row title= {item.title} fetchUrl={item.movieURL} isLargeRow={item.largeRow}/>
        })
      }
    </div>
  )
}

export default Home
