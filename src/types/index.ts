export type AddMovieType = {
  title: string;
  description: string;
  year: number;
  country: string;
  rating: number;
  genres: string[] | null;
  actors: string[] | null;
  imageUrl: string;
  videoUrl: string;
};

export type MoviesType = {
  id: string;
  title: string;
  description: string;
  year: number;
  country: string;
  rating: number;
  genres: string[];
  actors: string[];
  imageUrl: string;
  videoUrl: string;
};
