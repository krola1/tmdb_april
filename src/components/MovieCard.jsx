import { useState } from "react";
import { imageHandler } from "../config/imageHandler";
import styles from "../styles/MovieCard.module.css";

export default function MovieCard({
  title,
  overview,
  vote_average,
  release_date,
  name,
  poster_path,
}) {
  const [showInfo, setShowInfo] = useState(false);
  const imageURL = imageHandler(poster_path);

  return (
    <div
      className={styles.wrapper}
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      <img className={styles.img0} src={imageURL} alt="" />
      {showInfo && (
        <div className={styles.overlay}>
          <h3>{title ? title : name}</h3>
          <p>
            ⭐{vote_average} - {release_date}
          </p>
          <p>{overview.slice(0, 100)}...</p>
        </div>
      )}
    </div>
  );
}
