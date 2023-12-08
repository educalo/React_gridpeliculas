import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import movie from "./movie.json";
import styles from "./MovieDetails.module.css";
import { get } from "../utils/httpClient";
import { useEffect, useState } from "react";

export function MovieDetails(){
    const {movieId} = useParams();
    const [movie, setMovie] = useState(null);
    //si cambia el movieId se debe volver a ejecutar con el nuevo estado
    useEffect(() => {
        get("/movie/" + movieId).then (data => {
            setMovie(data);
        })
    }, [movieId])
    
    //para que retorne nada en la primera instancia
    if (!movie){
        return null;
    }

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