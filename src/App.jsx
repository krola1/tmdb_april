import { fetchTrendingMovies } from "./api/tmdb";
import "./App.css";
import { env } from "./config/env";
import { useTrendingMovies } from "./hooks/useTrendingMovies";

export default function App() {
  const { data } = useTrendingMovies();
  console.log(data);

  return (
    <>
      {data.results.map((movie) => (
        <h3 key={movie.id}>{movie.title}</h3>
      ))}
    </>
  );
}
