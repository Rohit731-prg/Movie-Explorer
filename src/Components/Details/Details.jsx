import React, { useEffect, useState } from "react";
import "./Details.css";

function Details({ details, setDetails, imdbInfo }) {
  const [allDetails, setAllDetails] = useState([]);
  async function fetchMovies() {
    await fetch(`http://www.omdbapi.com/?i=${imdbInfo}&apikey=7d1e31d7`)
      .then((res) => res.json())
      .then((data) => {
        setAllDetails(data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div className="details-container">
      <button className="back" onClick={() => setDetails(false)}>Back</button>
      <div className="basic-info">
        <h1>{allDetails.Title}</h1>
        <p>{allDetails.Country}</p>
        <p>Year : {allDetails.Year} <span>Runtime : {allDetails.Runtime}</span></p>
        <img src={allDetails.Poster} alt="Poster is not avalable" />
        <h3>Released Date : {allDetails.Released}</h3>
        <h4>Language : {allDetails.Language}</h4>
        <p>{allDetails.Plot}</p>
      </div>
      <div className="mid-info">
        <h2>{allDetails.Genre}</h2>
        <p>IMDM : {allDetails.imdbRating}</p>
        <h4>Directors : {allDetails.Director}</h4>
        <h4>Writer : {allDetails.Writer}</h4>
        <h4>Actors : {allDetails.Actors}</h4>
      </div>
      <div className="last-info">
        <h2>Awards : {allDetails.Awards}</h2>
        <h4>BoxOffice : {allDetails.BoxOffice}</h4>
      </div>
    </div>
  );
}

export default Details;
