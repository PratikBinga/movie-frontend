import React, { useState, useEffect, useContext } from "react";
import Movies from "./Movies";
import Searchbox from "./SearchBox";
import "./MoviesOverviewPage.scss";
import PostReview from "./PostReview";
import MoviesOverviewPage from "./MoviesOverviewPage";
import searchTextContext from "../App";

const PostReviewOverviewPage = ({ fetchMovies, movies, searchText }) => {
  const [openPostReview, setOpenPostReview] = useState(false);
  const searchTextCtx = useContext(searchTextContext);

  useEffect(() => {
    fetchMovies();
  }, []);

  const openPostReviewForm = () => {
    setOpenPostReview(!openPostReview);
  };
  console.log(movies, "movies");
  console.log(searchTextCtx, "context");
  console.log(searchText, "searchText");
  if (searchText) {
    return <MoviesOverviewPage fetchMovies={fetchMovies} movies={movies} />;
  } else
    return (
      <div className="moviesWrapper">
        <PostReview />
      </div>
    );
};

export default PostReviewOverviewPage;
