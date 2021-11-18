import React, { useState, useEffect } from "react";
import Movies from "../components/Movies";
import Searchbox from "../components/SearchBox";
// import useApi from "../useApi";
// import PostReview from "../components/PostReview";
import "./MoviesOverviewPage.scss";

const MoviesOverviewPage = ({ fetchMovies, movies }) => {
  const [openPostReview, setOpenPostReview] = useState(false);

  useEffect(() => {
    fetchMovies();
  }, []);

  const openPostReviewForm = () => {
    setOpenPostReview(!openPostReview);
  };

  return (
    <div className="moviesWrapper">
      <Movies
        fetchMovies={fetchMovies}
        movies={movies}
        openPostReviewForm={openPostReviewForm}
      />
    </div>
  );
};

export default MoviesOverviewPage;
