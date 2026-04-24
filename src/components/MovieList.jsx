import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import styles from "../styles/MovieList.module.css";
//temp
export default function MovieList({
  location,
  data,
  isLoading,
  error,
  isError,
}) {
  console.log(location);

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>An error occured {error.message} </h1>;

  return (
    <div className={styles.wrapper}>
      {data?.results?.map((movie) => (
        <Link
          state={{ backgroundLocation: location }}
          key={movie.id}
          to={`/movies/${movie.id}`}
        >
          <MovieCard {...movie} />
        </Link>
      ))}
    </div>
  );
}
