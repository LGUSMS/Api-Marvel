
import Header from '../components/header';
import SerieTable from '../components/serieTable';
import Search from '../components/search';
import axios from 'axios';
import React,{useEffect, useState} from 'react';


const hash = "6ff4faef602acba4c70fe1afdcaae3d4"

function Series(){
  const[items,setItems] = useState([])
  const[loading, setLoading] = useState(true)
  const [query , setQuery] = useState('')
    
 
  useEffect(() => {
const fetch = async() =>{
  if(query===''){  

  
const result = await axios(`http://gateway.marvel.com/v1/public/series?ts=1&apikey=fba31148728b53fd9e59a83a3857b523&hash=${hash}`)
 console.log(result.data.data.results)
 setItems(result.data.data.results)
 setLoading(false)

}else{
  const result = await axios(`http://gateway.marvel.com/v1/public/series?titleStartsWith=${query}&ts=1&apikey=fba31148728b53fd9e59a83a3857b523&hash=${hash}`)
 console.log(result.data.data.results)
 setItems(result.data.data.results)
 setLoading(false)


}


}


fetch()

},[query])
  

  return(
    <div className="App">

      <Header/>
      <Search search={(q)=>setQuery(q)}></Search>
      <SerieTable items={items} loading={loading}/>
      

    </div>
  )
}


export default Series;