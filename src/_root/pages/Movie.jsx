import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleMovie, saveMovie, unsaveMovie } from "@/lib/appwrite";
import { Button } from "@/components/ui/button";
import Loader from "@/components/shared/Loader";
import MovieDetails from "@/components/shared/MovieDetails";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Movie = () => {
  const [movie, setMovie] = useState({});

  const [saved, setSaved] = useState(movie.$id);

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
  }, [movie.isSaved]);

  const save = async () => {
    try {
      await saveMovie(movie.$id);
      await getMovie();
      setSaved(true);
    } catch (error) {
      console.log(error);
    }
  };

  const unsave = async () => {
    try {
      await unsaveMovie(movie.$id);
      await getMovie();
      setSaved(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-auto flex flex-col w-full p-1 mb-20">
      {Object.keys(movie).length === 0 ? (
        <div className="flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <>
          <div className="bg-dark-2 shadow-xl h-20 font-semibold border border-primary-500 items-center flex-between px-5 m-1 rounded-md sm:text-lg">
            <p>{movie.title}</p>
            <AlertDialog>
              <AlertDialogTrigger>
                <Button
                  onClick={movie.isSaved === true ? unsave : save}
                  className=""
                >
                  {movie.isSaved === true ? (
                    <div className="flex justify-center items-center gap-1">
                      <img
                        src="/assets/icons/saved.svg"
                        className="h-6"
                        alt=""
                      />
                      Unsave
                    </div>
                  ) : (
                    <div className="flex justify-center items-center gap-1">
                      <img
                        src="/assets/icons/save.svg"
                        className="h-6"
                        alt=""
                      />
                      Save
                    </div>
                  )}
                </Button>
              </AlertDialogTrigger>

              <AlertDialogContent className="bg-dark-2 border border-primary-500">
                <AlertDialogHeader>
                  <AlertDialogTitle>{"Successful"}</AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="border border-primary-500" onClick={movie.isSaved === true ? unsave : save}>Cancel</AlertDialogCancel>
                  <AlertDialogAction className="bg-primary-500  ">Okay</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>

          <div className="h-[350px] mb-4 sm:m-1  sm:h-[500px] flex justify-center items-center">
            <iframe
              src={movie.embedUrl}
              frameBorder="0"
              className="h-full mt-1 sm:h-full w-full rounded-md self-start border border-primary-500"
            ></iframe>
          </div>

          <MovieDetails
            title={movie.title}
            poster={movie.poster}
            plot={movie.plot}
            genre={movie.genre}
            cast={movie.cast}
            releaseDate={movie.releaseDate}
            director={movie.director}
            rating={movie.rating}
            quality={movie.quality}
          />
        </>
      )}
    </div>
  );
};

export default Movie;
