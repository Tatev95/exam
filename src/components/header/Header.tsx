import React from "react";
import { MoviesList } from "../moviesList";
import { Admin } from "../admin";
import "./header.css";

export const Header = () => {
  return (
    <div className="header_conatiner">
      <MoviesList />
      <Admin />
    </div>
  );
};
