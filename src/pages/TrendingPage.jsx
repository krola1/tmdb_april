import MovieList from "../components/MovieList";
import { useTrendingMovies } from "../hooks/useTrendingMovies";
import { useLocation } from "react-router-dom";

export default function TrendingPage() {
  const location = useLocation();
  const { data, isLoading, error, isError } = useTrendingMovies();
  console.log(data);

  return (
    <>
      <MovieList
        location={location}
        data={data}
        isLoading={isLoading}
        error={error}
        isError={isError}
      />
    </>
  );
}
