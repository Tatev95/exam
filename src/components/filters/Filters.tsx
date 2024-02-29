import React, { useCallback, useState } from "react";
import { setFilters } from "../../store/movies/movies-slice";
import { useAppDispatch } from "../../store";
import { getMovies } from "../../helpers/requests";

export const Filters = () => {
  const dispatch = useAppDispatch();

  const [yearRange, setYearRange] = useState({ min: "", max: "" });
  const [country, setCountry] = useState("");
  const [ratingRange, setRatingRange] = useState({ min: "", max: "" });

  const handleFilterMovie = useCallback(() => {
    const filters = {
      yearRange: {
        min: yearRange.min || undefined,
        max: yearRange.max || undefined,
      },
      country: country || undefined,
      ratingRange: {
        min: ratingRange.min || undefined,
        max: ratingRange.max || undefined,
      },
    };

    dispatch(setFilters(filters));
    dispatch(getMovies());
  }, [dispatch, yearRange, country, ratingRange]);

  return (
    <div>
      <label>
        Year Range:
        <input
          type="number"
          placeholder="Min"
          value={yearRange.min}
          onChange={(e) => setYearRange({ ...yearRange, min: e.target.value })}
        />
        <input
          type="number"
          placeholder="Max"
          value={yearRange.max}
          onChange={(e) => setYearRange({ ...yearRange, max: e.target.value })}
        />
      </label>
      <br />

      <label>
        Country:
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </label>
      <br />

      <label>
        Rating Range:
        <input
          type="number"
          placeholder="Min"
          value={ratingRange.min}
          onChange={(e) =>
            setRatingRange({ ...ratingRange, min: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Max"
          value={ratingRange.max}
          onChange={(e) =>
            setRatingRange({ ...ratingRange, max: e.target.value })
          }
        />
      </label>
      <br />

      <button onClick={handleFilterMovie}>Filter</button>
    </div>
  );
};
