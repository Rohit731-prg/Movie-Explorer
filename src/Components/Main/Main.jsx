import React, { useEffect, useState } from 'react'
import Details from '../Details/Details';
import './Main.css'

function Main({details, setDetails}) {
    
    const [movieName, setMovieName] = useState('Jawan');
    const [movies, setMovies] = useState([]);
    const [imdbInfo, setImdbInfo] = useState('');

    async function fetchMovies() {
        await fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=7d1e31d7`)
        .then(res => res.json())
        .then(data => {
            setMovies(data.Search);
        })
        .catch(err => console.log(err));
    }

    useEffect(() => {
        fetchMovies();
    }, []);

    const callDeatils = (info) => {
        setImdbInfo(info);
        setDetails(true);
    }
  return (
    <div className='main-container'>
        {details ? <Details 
        details={details}
        setDetails={setDetails}
        imdbInfo={imdbInfo} /> 
        : 
        <div className="list">
            <div className="input-deild">
            <input type="text" onChange={(e) => setMovieName(e.target.value)} placeholder='Enter Movie Name "Jawan"' />
            <button onClick={fetchMovies}>Search</button>
        </div>
            {movies.map((movie, index) => (
                <div className="movie" key={index}>
                    <img src={movie.Poster} alt="Poster is not Avalable" />
                    <div className="details">
                        <h3>{movie.Title}</h3>
                        <p>Type : {movie.Type}</p>
                        <p>Year : {movie.Year}</p>
                    </div>
                    <button onClick={() => callDeatils(movie.imdbID)}>Details</button>
                </div>
            ))}
        </div>}
    </div>
  )
}

export default Main