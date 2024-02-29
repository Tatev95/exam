import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { moviesListSelector } from "../../store/movies/movies-selector";
import { useAppDispatch } from "../../store";
import { Filters, Sort } from "../filters";
import { VideoControll } from "./VideoControll";
import { VideoUrl } from "./VideoUrl";
import "./movieList.css";
import { getMovies } from "../../helpers/requests";
import { useNavigate } from "react-router-dom";

export const List = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const moviesList = useSelector(moviesListSelector);
  const [openFilter, setOpenFilter] = useState(false);
  const [openSort, setOpenSort] = useState(false);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const handleOpenFilter = () => {
    setOpenFilter(!openFilter);
  };

  const handleOpenSOrt = () => {
    setOpenSort(!openFilter);
  };

  const handleGoHome = () => {
    navigate("/");
  };
  return (
    <div>
      <h2 className="movies_list">Movies List</h2>
      <button onClick={handleGoHome}> Go to HOME</button>
      <br />

      <button onClick={handleOpenFilter}>filter</button>
      <button onClick={handleOpenSOrt}>sort</button>
      <br />
      {openFilter && <Filters />}
      {openSort && <Sort />}
      <ul>
        {moviesList.map((movie) => (
          <li key={movie?.id} className="movie_card">
            <div className="movie_description">
              <p>
                <strong>Title:</strong> {movie.title}
              </p>
              <p>
                <strong>Description:</strong> {movie.description}
              </p>
              <p>
                <strong>Year:</strong> {movie.year}
              </p>
              <p>
                <strong>Rating:</strong> {movie.rating}
              </p>
              <p>
                <strong>Country:</strong> {movie.country}
              </p>
              <p>
                <strong>GENRE:</strong> {movie.genres}
              </p>
              <p>
                <strong>actors:</strong> {movie.actors}
              </p>
            </div>

            <VideoUrl url={movie.videoUrl} />
            <VideoControll />
            <img src={movie.imageUrl} alt="img" />
          </li>
        ))}
      </ul>
    </div>
  );
};
