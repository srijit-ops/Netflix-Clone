import Row from "./Row"
import Banner from "./Banner"
import Nav from "./Nav"
import requests from "./requests"
import { useContext } from "react"
import TrailerContext from "./TrailerContext"
function App() {
  const item=useContext(TrailerContext)
  return (
    <div className="App">
      <Nav/>
      {console.log(item)}
      <Banner/>
      {
        requests.map((item)=>{
          return <Row title= {item.title} fetchUrl={item.movieURL} isLargeRow={item.largeRow}/>
        })
      }
    </div>
  )
}

export default App
