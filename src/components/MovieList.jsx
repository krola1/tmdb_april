import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

export default function MovieList({ data, isLoading, error, isError }) {
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>An error occured {error}</h1>;

  return (
    <div className="moviewrapper">
      {data?.results?.map((movie) => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          <MovieCard {...movie} />
        </Link>
      ))}
    </div>
  );
}
