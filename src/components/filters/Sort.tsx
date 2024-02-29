import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { moviesListSelector } from "../../store/movies/movies-selector";
import { setMovies } from "../../store/movies/movies-slice";

export const Sort = () => {
  const dispatch = useDispatch();
  const moviesList = useSelector(moviesListSelector);

  const [sortValue, setSortValue] = useState("");

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortkey = e.target.value as "year" | "rating";
    setSortValue(sortkey);

    const sortedMoviesList = [...moviesList].sort((a, b) => {
      if (sortkey === "year") {
        return a[sortkey] - b[sortkey];
      } else if (sortkey === "rating") {
        return a[sortkey] - b[sortkey];
      }
      return 0;
    });

    dispatch(setMovies(sortedMoviesList));
  };

  return (
    <div>
      <h2>Sort</h2>
      <label>Sort by:</label>
      <select onChange={handleSortChange} value={sortValue}>
        <option value=""></option>
        <option value="year">Year</option>
        <option value="rating">Rate</option>
      </select>
    </div>
  );
};
