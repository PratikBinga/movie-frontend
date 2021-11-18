import React, { useState } from "react";
import "./App.scss";
import Nav from "../src/components/Nav";
import Footer from "../src/components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoviesOverviewPage from "../src/components/MoviesOverviewPage";
import PostReview from "../src/components/PostReview";
import Searchbox from "../src/components/SearchBox";
import useApi from "../src/useApi";
import PostReviewOverviewPage from "./components/PostReviewOverviewPage";

export const searchTextContext = React.createContext();

function App() {
  const {
    selectedMovieData,
    onChangeSearchMovieHandler,
    searchText,
    fetchMovies,
    movies,
  } = useApi("");
  console.log(searchText, "searchText main app");
  return (
    <Router>
      <div className="menuWrapper">
        <Nav />
        <Searchbox
          onChangeSearchMovieHandler={onChangeSearchMovieHandler}
          selectedMovieData={selectedMovieData}
          searchText={searchText}
        />
      </div>
      <searchTextContext.Provider value={searchText}>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <MoviesOverviewPage movies={movies} fetchMovies={fetchMovies} />
            }
          />
          {/* <Route path="/movies" element={<MoviesOverviewPage />} /> */}
          <Route
            path="/post-review"
            element={
              <PostReviewOverviewPage
                fetchMovies={fetchMovies}
                movies={movies}
                searchText={searchText}
              />
            }
          />
        </Routes>
      </searchTextContext.Provider>

      <Footer />
    </Router>
  );
}

export default App;
