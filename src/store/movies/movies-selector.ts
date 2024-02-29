import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

export const moviesSelector = (state: RootState) => state.movies;

export const moviesListSelector = createSelector(
  moviesSelector,
  (movies) => movies.moviesList
);

export const addMovieSelector = createSelector(
  moviesSelector,
  (movies) => movies.addValues
);
