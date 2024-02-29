import { createSlice } from "@reduxjs/toolkit";
import { MoviesType } from "../../types";
import { addMovie, getMovies } from "../../helpers/requests";

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

const initialState: moviesState = {
  moviesList: [],
  isLoading: false,
  addValues: {
    id: "0",
    title: "",
    description: "",
    year: 0,
    country: "",
    rating: 0,
    genres: [],
    actors: [],
    imageUrl: "",
    videoUrl: "",
  },
  filters: {
    yearRange: { min: "", max: "" },
    country: "",
    ratingRange: { min: "", max: "" },
  },
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.moviesList = action.payload;
    },
    setAddValues: (state, action) => {
      state.addValues = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMovies.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMovies.fulfilled, (state, action) => {
      state.isLoading = false;
      state.moviesList = action.payload;
    });
    builder.addCase(getMovies.rejected, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addMovie.fulfilled, (state, action) => {
      state.moviesList.push(action.payload);
      state.addValues = initialState.addValues;
    });
    builder.addCase(addMovie.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export const { setMovies, setAddValues, setFilters } = moviesSlice.actions;

export default moviesSlice.reducer;
