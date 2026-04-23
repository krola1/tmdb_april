import { useQuery } from "@tanstack/react-query";
import { fetchTrendingMovies } from "./api/tmdb";
import "./App.css";
import { env } from "./config/env";

export default function App() {
  console.log(fetchTrendingMovies());

  console.log(env.TMDB_BASE);

  return <h1>App</h1>;
}
