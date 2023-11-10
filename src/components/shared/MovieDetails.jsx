import React from "react";
import { Card } from "../ui/card";

const MovieDetails = ({
  poster,
  title,
  plot,
  genre,
  cast,
  releaseDate,
  director,
  rating,
  quality,
}) => {
  return (
    <div className=" bg-dark-2 border border-primary-500 text-white p-10 mx-10 my-5 lg:flex-start gap-10 rounded-lg">
      <div className="h-auto flex-center overflow-hidden w-full lg:w-[230px]">
        <img
          src={poster}
          className="h-auto sm:h-80 rounded-md w-1/2  lg:w-full duration-300 shadow-xl"
        />
      </div>
      <div className="text-center mt-2 lg:text-start lg:flex-1">
        <p className="text-2xl font-medium mb-2">{title}</p>
        <div className="flex justify-center lg:justify-start items-center gap-4 mt-4">
          <p className="border-2 border-white text-sm w-[fit-content] rounded-md cursor-pointer text-white p-2">
            {quality === "1080p" ? "HD" : "-"}
          </p>
          <p className="text-yellow-500 cursor-pointer font-semibold border-yellow-500 rounded-md border-2 w-[fit-content] text-sm p-2">
            IMDB: {rating}
          </p>
        </div>
        <div className="flex-col flex-wrap mt-5">
            <p className="text-md">{plot}</p>
          <div className="flex flex-col text-start bg-dark-3 p-2 items-start rounded-lg mt-2">
            <p className="">Genre : {genre}</p>
            <p className="mt-5">Cast : {cast}</p>
            <p className="mt-5">Released : {releaseDate}</p>
            <p className="mt-5">Director : {director}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
