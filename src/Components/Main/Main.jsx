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
            <input 
            className='w-64 border border-black px-4 py-2 mr-8 m-6 rounded text-x'
            type="text" onChange={(e) => setMovieName(e.target.value)} 
            placeholder='Enter Movie Name "Jawan"' />
            <button 
            className='px-4 py-2 bg-black text-white rounded m-6'
            onClick={fetchMovies}>Search</button>
        </div>
            {movies.map((movie, index) => (
                <div className="movie h-96 mb-5 p-3" key={index}>
                    <img 
                    className='w-64 h-80 rounded object-cover'
                    src={movie.Poster} alt="Poster is not Avalable" />
                    <div className="details flex flex-col mt-10">
                        <h3 className='font-bold text-2xl font-serif underline'>{movie.Title}</h3>
                        <p className='text-xl font-semibold font-serif'>Type : <span className='text-xl font-normal'>{movie.Type}</span></p>
                        <p className='text-xl font-semibold font-serif'>Year : <span className='text-xl font-normal'>{movie.Year}</span></p>
                    </div>
                    <button 
                    className='px-4 py-2 bg-black text-white rounded m-6 hover:shadow-lg active:bg-gray-400'
                    onClick={() => callDeatils(movie.imdbID)}>Details</button>
                </div>
            ))}
        </div>}
    </div>
  )
}

export default Main