import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { fetchMovies, searchMovie } from "@/lib/appwrite";
import Postcard from "@/components/shared/Postcard";
import axios from 'axios'

const Search = () => {
  const [query, setQuery] = useState("");

  const [searchList, setSearchList] = useState([]);

  const search = async () => {
    try {
      const allMovies = await fetchMovies()
      const imdbData = await Promise.all(
        moviesData.imdbIds.map(async (movie) => {
          const a = await axios.get(
            `https://www.omdbapi.com/?i=${movie}&apikey=2b377e16`
          );
          return { title: a.data.Title, poster: a.data.Poster };
        })
      );
      const defaultMovies = moviesData.res.map((movie, index) => {
        return {
          ...movie,
          title: imdbData[index].title,
          poster: imdbData[index].poster,
        };
      });
      setSearchList(defaultMovies);
      console.log(allMovies);
    } catch(error) {
      console.log(error)
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };




  return (
    <div className="w-full text-center">
      <div>
        <p className="text-4xl py-3 font-bold">Search</p>
        <div className="w-full flex justify-center items-center p-2 gap-4">
          <Input
            className="w-1/2 text-black font-semibold text-md"
            placeholder="search and press enter"
            onChange={async (e) => {
              setQuery(e.target.value);
            }}
            onKeyDown={handleKeyPress}
          />
          <img src="/assets/icons/search.svg" alt="search" className="" />
        </div>
      </div>

      {/* Search content  */}

      <div className="h-[fit-content] w-full mb-40 mt-6">
        {
          <div className="grid grid-cols-2 pl-5 sm:grid-cols-2 gap-8 mt-2 p-3 pl-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {searchList.map((movie) => {
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
        }
      </div>
    </div>
  );
};

export default Search;
