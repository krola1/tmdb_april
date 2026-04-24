import { useParams } from "react-router-dom";
import { useMovieDetails } from "../hooks/useMovieDetails";
import { imageHandler } from "../config/imageHandler";
import styles from "../styles/DetailsPage.module.css";
import { createPortal } from "react-dom";

import { useLocation } from "react-router-dom";

export default function DetailsPage() {
  console.log(useLocation());

  const { movieID } = useParams();
  const { data, isLoading, isError, error } = useMovieDetails(movieID);

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>An error occured {error.message} </h1>;

  const { poster_path, backdrop_path } = data;
  const poster = imageHandler(poster_path, "original");
  const backdrop = imageHandler(backdrop_path, "original");

  return createPortal(
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url(${backdrop})` }}
    >
      <img className={styles.poster} src={poster} alt="" />
    </div>,
    document.getElementById("modal-root"),
  );
}
