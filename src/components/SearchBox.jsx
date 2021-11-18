import React, { useState } from "react";
import "./SearchBox.scss";

const Searchbox = ({
  onChangeSearchMovieHandler,
  selectedMovieData,
  searchText,
}) => {
  console.log(selectedMovieData, searchText, "selectedMovieData");

  return (
    <div className="SearchBoxContainer">
      <input
        type="text"
        value={searchText}
        onChange={onChangeSearchMovieHandler}
        placeholder="Search movie"
      />
    </div>
  );
};

export default Searchbox;
