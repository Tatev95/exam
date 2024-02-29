import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Movies } from "../movies";
import { List } from "../moviesList";
import { AddMovie } from "../admin";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies />} />

        <Route path="*" element={<div>Error</div>} />
        <Route path="/add-admin" element={<AddMovie />} />
        <Route path="/moviesList" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
