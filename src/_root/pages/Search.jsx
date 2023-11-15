import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { searchMovie } from "@/lib/appwrite";
import Postcard from "@/components/shared/Postcard";

const Search = () => {
  const [query, setQuery] = useState("");

  const [searchList, setSearchList] = useState([]);

  const search = async () => {
    try {
      const res = await searchMovie(query);
      setSearchList(res);
      if (res.length === 0) {
        alert("not found");
      }
      console.log(res);
    } catch(error) {
      console.log("Unknown error")
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
