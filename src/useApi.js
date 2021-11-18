import React, { useState, useCallback } from "react";
import { debounce } from "./utils";

const useApi = (text) => {
  
  const [searchText, setSearchText] = useState(text);
  const [selectedMovieData, setSelectedMovieData] = useState([]);
  const [movies, setMovies] = useState([]);

  const fetchSelectedMovie = async (movieName) => {
    if (movieName) {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=1cf50e6248dc270629e802686245c2c8&query=${movieName}`
      );
      const selectedMovieResponse = await data.json();
      setSelectedMovieData(selectedMovieResponse?.results);
      setMovies(selectedMovieResponse?.results);
    } else {
      fetchMovies();
    }
  };

  const debounceOnChange = useCallback(debounce(fetchSelectedMovie, 500), []);

  const onChangeSearchMovieHandler = (e) => {
    setSearchText(e.target.value);
    console.log(e.target.value);
    debounceOnChange(e.target.value);
    // fetchSelectedMovie(e.target.value);
  };

  const fetchMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1cf50e6248dc270629e802686245c2c8"
    );
    const moviesJsonResponse = await data.json();
    setMovies(moviesJsonResponse?.results);
    console.log(moviesJsonResponse, movies, "moviesresp");
  };

  return {
    selectedMovieData,
    searchText,
    onChangeSearchMovieHandler,
    fetchMovies,
    movies,
    debounceOnChange,
  };
};

export default useApi;
