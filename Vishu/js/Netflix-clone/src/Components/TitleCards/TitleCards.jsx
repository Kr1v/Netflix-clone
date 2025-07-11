import React,{useRef,useEffect, useState} from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';

const TitleCards = ({title,category}) => {
  const cardsRef=useRef();
  const [apiData,setApiData]=useState([]);
useEffect(()=>{
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGZmOTJlZTM5MWIzMTUyYmVlODVjOWEzZmMyNTM5NCIsIm5iZiI6MTc1MjE4Nzk0NS4xMzQsInN1YiI6IjY4NzA0NDI5ODI3Mzc3MThkODUxZjMzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ezt5ySwUsk2QRk2ribQtFbRuPx3Nd1X1Rv31outr3bE'
  }
};

   fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));
  const handlewheel=(event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft+=event.deltaY;
  }
  cardsRef.current.addEventListener('wheel',handlewheel);
},[])
  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card,index)=>{
          return <Link className="card" to={`/player/${card.id}`}key={index}>
            <img src={'https://image.tmdb.org/t/p/w500'+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards