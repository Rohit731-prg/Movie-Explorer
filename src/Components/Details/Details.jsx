import React, { useEffect, useState } from "react";
import "./Details.css";

function Details({ details, setDetails, imdbInfo }) {
  const [allDetails, setAllDetails] = useState([]);

  async function fetchMovies() {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?i=${imdbInfo}&apikey=7d1e31d7`
      );
      const data = await response.json();
      setAllDetails(data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="details-container flex justify-center gap-10 flex-row p-10 bg-gray-100">
      {/* Back Button */}
      <button
        className="back bg-black text-white px-4 py-2 font-semibold font-serif rounded hover:bg-gray-800 active:bg-white active:text-black active:border border-black"
        onClick={() => setDetails(false)}
      >
        Back
      </button>

      {/* Basic Info */}
      <div className="basic-info w-1/4">
        <h1 className="text-5xl font-serif">{allDetails.Title}</h1>
        <p className="font-times text-2xl text-gray-700">{allDetails.Country}</p>
        <p className="text-lg text-gray-600">
          <span className="text-2xl font-medium">Year</span>: {allDetails.Year}
          <span className="ml-4">
            <span className="text-2xl font-medium">Runtime</span>: {allDetails.Runtime}
          </span>
        </p>
        <img
          className="my-6 rounded shadow-md"
          src={allDetails.Poster}
          alt="Poster not available"
        />
        <h3 className="text-lg text-gray-800">Released Date: {allDetails.Released}</h3>
        <h4 className="text-lg text-gray-800">Language: {allDetails.Language}</h4>
        <p className="text-gray-700 mt-4">{allDetails.Plot}</p>
      </div>

      {/* Middle Info */}
      <div className="mid-info pt-20">
        <h2 className="text-2xl font-semibold">{allDetails.Genre}</h2>
        <p className="text-gray-700">
          <span className="font-medium">IMDB:</span> {allDetails.imdbRating}
        </p>
        <h4 className="text-gray-800">Directors: {allDetails.Director}</h4>
        <h4 className="text-gray-800">Writer: {allDetails.Writer}</h4>
        <h4 className="text-gray-800">Actors: {allDetails.Actors}</h4>
      </div>

      {/* Last Info */}
      <div className="last-info pt-20 ml-10">
        <h2 className="text-xl font-semibold">Awards: {allDetails.Awards}</h2>
        <h4 className="text-gray-800">BoxOffice: {allDetails.BoxOffice}</h4>
      </div>
    </div>
  );
}

export default Details;
