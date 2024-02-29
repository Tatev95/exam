import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AddMovieType, MoviesType } from "../types";

type moviesState = {
  moviesList: MoviesType[];
  isLoading: boolean;
  addValues: MoviesType | null;
  filters: {
    yearRange: { min?: string; max?: string };
    country?: string;
    ratingRange: { min?: string; max?: string };
  };
};

export const getMovies = createAsyncThunk(
  "movies/getMovies",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { yearRange, country, ratingRange } = (
        getState() as { movies: moviesState }
      ).movies.filters;

      console.log(yearRange, country, ratingRange);

      const queryParams = new URLSearchParams();
      yearRange.min && queryParams.set("yearRange[min]", yearRange.min);
      yearRange.max && queryParams.set("yearRange[max]", yearRange.max);
      country && queryParams.set("country", country);
      ratingRange.min && queryParams.set("ratingRange[min]", ratingRange.min);
      ratingRange.max && queryParams.set("ratingRange[max]", ratingRange.max);

      const res = await axios.get(
        `http://localhost:8080/movies?${queryParams.toString()}`
      );
      return res.data;
    } catch (e) {
      return rejectWithValue("error");
    }
  }
);

export const addMovie = createAsyncThunk(
  "movies/addMovie",
  (newMovie: AddMovieType) => {
    return axios
      .post("http://localhost:8080/movies", newMovie)
      .then((res) => {
        console.log(res.data, "res");
        return res.data;
      })
      .catch((err) => {
        throw err;
      });
  }
);
