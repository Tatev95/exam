import React, { ChangeEvent, useCallback, useState } from "react";
import { useAppDispatch } from "../../store";
import { addMovie } from "../../helpers/requests";
import { useNavigate } from "react-router-dom";

export const AddMovie = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState(0);
  const [country, setCountry] = useState("");
  const [rating, setRating] = useState(0);
  const [genres, setGenres] = useState<string[]>([]);
  const [actors, setActors] = useState<string[]>([]);
  const [imageUrl, setImageUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e?.target.value);
  };
  const handleDescChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e?.target.value);
  };

  const handleYearChange = (e: ChangeEvent<HTMLInputElement>) => {
    const yearValue = +e.target.value;
    setYear(isNaN(yearValue) ? 0 : yearValue);
  };

  const handleCountryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCountry(e?.target.value);
  };

  const handleRatingChange = (e: ChangeEvent<HTMLInputElement>) => {
    const ratingValue = +e.target.value;
    setRating(isNaN(ratingValue) ? 0 : ratingValue);
  };

  const handleGenresChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGenres(e.target.value.split(","));
  };

  const handleActorsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setActors(e.target.value.split(","));
  };

  const handleImageUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    setImageUrl(e?.target.value);
  };

  const handleVideoUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVideoUrl(e?.target.value);
  };

  const handleAddMovie = useCallback(() => {
    const addMovieProps = {
      title,
      description,
      year,
      country,
      rating,
      genres,
      actors,
      imageUrl,
      videoUrl,
    };
    setDescription("");
    setYear(0);
    setCountry("");
    setRating(0);
    setGenres([]);
    setActors([]);
    setImageUrl("");
    setVideoUrl("");
    dispatch(addMovie(addMovieProps));
  }, [
    dispatch,
    title,
    description,
    year,
    country,
    rating,
    genres,
    actors,
    imageUrl,
    videoUrl,
  ]);

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div>
      <button onClick={handleGoHome}> Go to HOME</button>

      <h3>Add new Movie</h3>
      <input
        onChange={handleTextChange}
        type="text"
        placeholder="title"
        name="title"
        value={title}
      />
      <input
        onChange={handleDescChange}
        type="text"
        placeholder="description"
        name="description"
        value={description}
      />
      <br />

      <label>year</label>
      <input
        onChange={handleYearChange}
        type="number"
        placeholder="year"
        value={year}
      />
      <input
        onChange={handleCountryChange}
        type="text"
        placeholder="country"
        value={country}
      />
      <br />
      <label>rating</label>

      <input
        onChange={handleRatingChange}
        type="number"
        placeholder="rating"
        value={rating}
      />

      <label>genres</label>
      <input
        onChange={handleGenresChange}
        type="text"
        placeholder="genres"
        value={genres.join(",")}
      />
      <br />

      <label>actors</label>
      <input
        onChange={handleActorsChange}
        type="text"
        placeholder="actors"
        value={actors.join(",")}
      />
      <br />

      <label>imageUrl</label>
      <input
        onChange={handleImageUrlChange}
        type="text"
        placeholder="imageUrl"
        value={imageUrl}
      />
      <br />

      <label>videoUrl</label>
      <input
        onChange={handleVideoUrlChange}
        type="text"
        placeholder="videoUrl"
        value={videoUrl}
      />
      <br />

      <button onClick={handleAddMovie}>Add Movie</button>
    </div>
  );
};
