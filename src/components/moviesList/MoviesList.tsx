import React from "react";
import { useNavigate } from "react-router-dom";

export const MoviesList = () => {
  const navigate = useNavigate();

  const handlGoToMoviesList = () => {
    navigate("/moviesList");
  };
  return (
    <div>
      <h2 className="movies_list" onClick={handlGoToMoviesList}>
        MoviesList
      </h2>
    </div>
  );
};
