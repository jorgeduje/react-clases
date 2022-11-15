import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {

    const [poke, setPoke] = useState([])

    useEffect(()=>{

       const fetchData =  async()=>{
        let dataFetch = await fetch("https://rickandmortyapi.com/api/character")
        let data = await dataFetch.json()
        console.log(data.results)
       }

       fetchData()

    },[])

  return (
    <div>Home</div>
  )
}

export default Home