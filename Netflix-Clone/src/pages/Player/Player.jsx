import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'


const Player = () => {
  
  const {id}=useParams();
  const navigate=useNavigate();
  const [apiData,setApiData]=useState({
    name:"",
    key:"",
    published_at:"",
    type:""
  })
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY
  useEffect(()=>{
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
   Authorization: `Bearer ${API_KEY}`

  }
};

fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));
  },[id]);
  return (
    
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-1)}}/>
      {apiData.key ?
      (<><iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}?autoplay=1&mute=1`} frameBorder="0" title='trailer' allow="autoplay; encrypted-media" allowFullScreen></iframe>
    <div className="player-info">
      <p>{apiData.published_at.slice(0,10)}</p>
      <p>{apiData.name}</p>
      <p>{apiData.type}</p>
    </div></>)
    :(<p>Loading...</p>)}
    </div>
  )
}

export default Player