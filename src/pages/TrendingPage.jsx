import MovieList from "../components/MovieList";
import { useTrendingMovies } from "../hooks/useTrendingMovies";

export default function TrendingPage() {
  const { data, isLoading, error, isError } = useTrendingMovies();

  return (
    <>
      <MovieList
        data={data}
        isLoading={isLoading}
        error={error}
        isError={isError}
      />
    </>
  );
}
