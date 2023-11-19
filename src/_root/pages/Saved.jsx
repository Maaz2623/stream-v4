import React, { useEffect, useState } from "react";
import { fetchSaved } from "@/lib/appwrite";
import Postcard from "@/components/shared/Postcard";
import Loader from "@/components/shared/Loader";
import axios from 'axios'

const Saved = () => {
  const [movies, setMovies] = useState([])

  const fetchData = async () => {
    try {
      const moviesData = await fetchSaved();
      const imdbData = await Promise.all(
        moviesData.imdbIds.map(async (movie) => {
          const movieData = await axios.get(
            `https://www.omdbapi.com/?i=${movie}&apikey=2b377e16`
          );
          return { title: movieData.data.Title, poster: movieData.data.Poster };
        })
      );

      // Use map to create a new array with updated movie objects
      const defaultMovies = moviesData.res.map((movie, index) => {
        return {
          ...movie,
          title: imdbData[index].title,
          poster: imdbData[index].poster,
        };
      });
      setMovies(defaultMovies)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="h-[fit-content] w-full mb-40">
      <div className="text-center flex justify-center items-center h-20 w-full mt-2">
        <p className="text-xl sm:text-3xl font-semibold">Recently Saved</p>
      </div>
      {movies.length === 0 ? (
        <div className="h-full w-full flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="grid grid-cols-2 pl-5 sm:grid-cols-2 gap-8 mt-2 p-3 pl-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {movies.map((movie) => {
            return (
              <Postcard
                key={movie.$id}
                poster={movie.poster}
                slug={movie.slug}
                title={movie.title}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Saved;
