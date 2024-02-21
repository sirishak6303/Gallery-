import React ,{useEffect,useState}from 'react'
import axios from 'axios'
import Gallery from './components/Gallery'

const apikey="636e1481b4f3c446d26b8eb6ebfe7127"
const App = () => {
const [search,setSearch]=useState("");
useEffect(()=>{

},[])
const changeHandler = e =>{
  setSearch(e.target.value)
}
const [data,setData]=useState([])

 const submitHandler=e=>{
  e.preventDefault();
  axios
    .get(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
    )
    .then(response => {
      setData(response.data.photos.photo)
    })
    .catch(error => {
      console.log(
        "Encountered an error with fetching and parsing data",
        error
      );
  })
  }

  return (
    <div>
      <center>
        <h1>Gallery Snapshot </h1>
        <br/>
        <form onSubmit={submitHandler}>
          <input type='text' value={search} onChange={changeHandler} /><br/><br/>
          <input type='submit' name='Search'/>
        </form>
        <br/>
        {data.length>=1?<Gallery data={data}/>:<h4>NoData Loaded</h4>}
      </center>
    </div>
  )
}

export default App
