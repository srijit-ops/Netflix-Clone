import React, { useEffect } from 'react'
import Row from "../components/Row"
import Banner from "../components/Banner"
import Nav from "../components/Nav"
import requests from "../functionalities/requests"
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('user')) {
      navigate('/')
    }
  }, [])

  return (
    <div>
      <Nav />
      <Banner />
      {
        requests.map((item) => {
          return <Row title={item.title} fetchUrl={item.movieURL} isLargeRow={item.largeRow} />
        })
      }
    </div>
  )
}

export default Home
