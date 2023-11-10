import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleMovie } from "@/lib/appwrite";
import { Button } from "@/components/ui/button";
import Loader from "@/components/shared/Loader";

const Movie = () => {
  const [movie, setMovie] = useState({});

  const [saved, setSaved] = useState(false);

  const { slug } = useParams();

  const getMovie = async () => {
    try {
      const movieData = await fetchSingleMovie(slug);
      setMovie(movieData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  
  


  

  return (
    <div className="h-auto flex flex-col w-full p-1">
      {Object.keys(movie).length === 0 ? (
        <div className="flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <>
          <div className="bg-dark-2 shadow-xl h-20 font-semibold border border-primary-500 items-center flex-between px-5 m-1 rounded-md sm:text-lg">
            <p>{movie.title}</p>
            <Button onClick={() => setSaved(!saved)} className="">
              {saved ? (
                <img src="/assets/icons/saved.svg" className="h-6" alt="" />
              ) : (
                <img src="/assets/icons/save.svg" className="h-6" alt="" />
              )}
            </Button>
          </div>
          <div className="sm:m-1  h-[500px] flex justify-center items-center">
            <iframe
              src={movie.embedUrl}
              frameborder="0"
              className="h-1/2 mt-1 sm:h-full w-full rounded-md self-start border border-primary-500"
            ></iframe>
          </div>

          <div className=" bg-dark-2 border border-primary-500 text-white p-10 mx-10 my-5 flex gap-10 rounded-lg">
            <div className="h-auto overflow-hidden w-[230px]">
              <img
                src={movie.poster}
                className="h-80 rounded-md w-full duration-300 shadow-xl"
              />
            </div>
            <div className="flex-1">
              <p className="text-2xl font-medium mb-2">{movie.title}</p>
              <div className="flex justify-start items-center gap-4 mt-4">
                <p className="border-2 border-white text-sm w-[fit-content] rounded-md cursor-pointer text-white p-2">
                  {movie.quality === "1080p" ? "HD" : "-"}
                </p>
                <p className="text-yellow-500 cursor-pointer font-semibold border-yellow-500 rounded-md border-2 w-[fit-content] text-sm p-2">
                  IMDB: {movie.rating}
                </p>
              </div>
              <div className="flex-col flex-wrap mt-5">
                <p className="text-md">{movie.plot}</p>
                <p className="mt-5">Genre : {movie.genre}</p>
                <p className="mt-5">Cast : {movie.cast}</p>
                <p className="mt-5">Released : {movie.releaseDate}</p>
                <p className="mt-5">Director : {movie.director}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Movie;
