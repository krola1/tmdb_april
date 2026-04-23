import { fetchMovieByID, fetchTrendingMovies, searchMovies } from "./api/tmdb";
import "./App.css";
import { useTrendingMovies } from "./hooks/useTrendingMovies";

export default function App() {
  const { data } = useTrendingMovies();
  // console.log(data);
  console.log(fetchMovieByID(394117));

  return (
    <>
      {data?.results.map((movie) => (
        <h3 key={movie.id}>{movie.title}</h3>
      ))}
    </>
  );
}
