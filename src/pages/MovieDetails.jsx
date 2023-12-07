import movie from "./movie.json";
import styles from "./MovieDetails.module.css";

export function MovieDetails(){
    const imageUrl ="https://image.tmdb.org/t/p/w500" + movie.poster_path;
    return (
        <div className={styles.detailsContainer}>
            <img 
                className={`${styles.col} ${styles.movieImage}`}
                src={imageUrl} 
                alt="{movie.title}" 
            />
            <div className={`${styles.col} ${styles.movieDetails}`}>
                <p className={styles.firstItem}>
                    <strong>Titulo: </strong> {movie.title}</p>
                <p>
                    <strong>Generos: </strong> {movie.genres.map(genre => genre.name).join(", ")}
                </p>
                <p>
                    <strong>Descripción: </strong> {movie.overview}
                </p>

            </div>
        </div>
    );
}