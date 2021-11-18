import React from "react";
import Movie from "./Movie";
import "./Movies.scss";

const Movies = ({ movies, fetchMovies, openPostReviewForm }) => {
  return (
    <div className="moviesConatiner">
      {movies.map((item, idx) => (
        <div key={idx}>
          <Movie movie={item} openPostReviewForm={openPostReviewForm} />
        </div>
      ))}
    </div>
  );
};

export default Movies;
