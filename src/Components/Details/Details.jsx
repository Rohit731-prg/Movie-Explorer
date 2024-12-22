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
      console.log(data);
      setAllDetails(data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="w-full h-screen bg-gray-100 flex items-center justify-center">
      <div
        className="w-4/5 h-5/6 bg-white rounded-lg p-8 flex flex-row relative"
        style={{ boxShadow: "0 0 10px black" }}
      >
        <div className="w-1/3 flex flex-col pr-4">
          <p className="text-4xl font-bold font-times text-slate-700 mb-4">
            Movie Details
          </p>
          <p className="text-2xl font-bold font-times text-slate-600 mb-4">
            Movie Name :{" "}
            <span className="text-3xl text-slate-900">{allDetails.Title}</span>
          </p>
          <p className="text-xl text-slate-900 font-semibold mb-7">
            {allDetails.Plot}
          </p>
          <p className="text-2xl font-bold font-times text-slate-600 mb-4">
            Year :{" "}
            <span className="text-3xl text-slate-900">{allDetails.Year}</span>
          </p>
          <p className="text-2xl font-bold font-times text-slate-600 mb-4">
            Country :{" "}
            <span className="text-3xl text-slate-900">
              {allDetails.Country}
            </span>
          </p>
          <p className="text-2xl font-bold font-times text-slate-600 mb-4">
            Language :{" "}
            <span className="text-3xl text-slate-900">
              {allDetails.Language}
            </span>
          </p>
          <img
            className="w-20 h-20 object-cover rounded-2xl"
            src="https://media2.giphy.com/media/lrylNue4ExZM5GLoDQ/giphy.webp?cid=790b76114a8a0bvqubxdadrjm4y7oanvvyd3kij5s6ck4zhg&ep=v1_gifs_search&rid=giphy.webp&ct=g"
            alt=""
          />
          <button
            onClick={() => setDetails(false)}
            className="absolute bottom-5 left-5 bg-slate-900 text-white py-4 px-6 rounded-full font-semibold text-2xl"
          >
            Back to Home
          </button>
        </div>
        <div className="w-1/3 flex flex-col">
          <p className="text-xl font-bold font-times text-slate-700 mb-4 text-center">
            Poster
          </p>
          <img
            src={allDetails.Poster}
            alt="Poster is not Available"
            className="w-full h-4/5 object-cover rounded-lg"
            style={{ boxShadow: "0 0 15px black" }}
          />
          <div className="flex justify-between mt-6">
            <p className="text-xl font-bold text-slate-900">
              <span className="text-xl text-slate-700">Runtime : </span>
              {allDetails.Runtime}
            </p>
            <p className="text-xl font-bold text-slate-900">
              <span className="text-xl text-slate-700">Released : </span>
              {allDetails.Released}
            </p>
          </div>
        </div>
        <div className="w-1/3 flex flex-col pl-6">
            <p className="text-2xl text-slate-800 font-bold mt-8">{allDetails.Genre}</p>
            <p className="text-3xl font-bold text-slate-900">IMDb : <span className="text-xl text-slate-700">{allDetails.imdbRating}</span></p>
            <p className="text-xl font-bold text-slate-900 my-3">Type : <span className="text-xl text-slate-700">{allDetails.Type}</span></p>
            <p className="text-xl font-bold text-slate-900">Actors</p>
            <p className="text-xl text-slate-700 mb-5">{allDetails.Actors}</p>
            <p className="text-xl font-bold text-slate-900">Director</p>
            <p className="text-xl text-slate-700 mb-5">{allDetails.Director}</p>
            <p className="text-xl font-bold text-slate-900">Writer</p>
            <p className="text-xl text-slate-700 mb-5">{allDetails.Writer}</p>
            <p className="text-xl font-bold text-slate-900">Awards</p>
            <p className="text-xl text-slate-700 mb-5">{allDetails.Awards}</p>
            <p className="text-xl font-bold text-slate-900">BoxOffice</p>
            <p className="text-xl text-slate-700 mb-5">{allDetails.BoxOffice}</p>
        </div>
      </div>
    </div>
  );
}

export default Details;
