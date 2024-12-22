import React, { useEffect, useState } from "react";
import Details from "../Details/Details";

function Main({ details, setDetails }) {
  const [movieName, setMovieName] = useState("Jawan");
  const [movies, setMovies] = useState([]);
  const [imdbInfo, setImdbInfo] = useState("");

  async function fetchMovies() {
    await fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=7d1e31d7`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.Search);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  const callDeatils = (info) => {
    setImdbInfo(info);
    setDetails(true);
  };

  return (
    <>
      {details ? (
        <Details
          details={details}
          setDetails={setDetails}
          imdbInfo={imdbInfo}
        />
      ) : (
        <div className="w-full h-screen bg-teal-500 flex items-center justify-center">
          <div
            className="w-10/12 h-4/5 p-8 rounded-md flex flex-col items-center justify-center"
            style={{
              boxShadow: "5px 5px 10px black",
              background: "linear-gradient(#68b4f7, white)",
            }}
          >
            <h1 className="text-4xl font-bold font-times text-slate-900 mb-4 text-center">
              Movie Explorer
            </h1>
            <div className="my-3 w-3/6 flex items-center justify-between bg-white rounded-full overflow-hidden">
              <input
                type="text"
                placeholder='Enter Movie Name "Jawan"'
                onChange={(e) => setMovieName(e.target.value)}
                className="border-none outline-none p-2 w-3/4 pl-4"
              />
              <button
                onClick={fetchMovies}
                className="bg-slate-200 h-full w-1/4"
              >
                🔍
              </button>
            </div>
            <div className="w-full h-72 flex overflow-x-auto space-x-4 p-4 mt-10">
              {movies.map((movie, index) => (
                <div
                  key={index}
                  className="min-w-[160px] h-full flex flex-col items-center"
                >
                  <img
                    src={movie.Poster}
                    alt="poster not available"
                    className="object-cover rounded-xl w-full h-48"
                  />
                  <button
                    onClick={() => callDeatils(movie.imdbID)}
                    className="mt-3 px-4 py-2 text-white bg-slate-900 rounded-full font-semibold"
                  >
                    Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Main;
