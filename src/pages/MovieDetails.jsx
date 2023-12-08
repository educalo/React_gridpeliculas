import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import movie from "./movie.json";
import styles from "./MovieDetails.module.css";
import { get } from "../utils/httpClient";
import { useEffect, useState } from "react";
import { Spinner } from "../components/Spinner";

export function MovieDetails(){
    const {movieId} = useParams();
    //compruebo el estado de carga de la imagen de las peliculas, el estado inical de isLoading es true
    const [isLoading, setIsLoading]= useState(true);
    const [movie, setMovie] = useState(null);

    //si cambia el movieId se debe volver a ejecutar con el nuevo estado
    useEffect(() => {
        setIsLoading(true);
        
        get("/movie/" + movieId).then (data => {
            setMovie(data);
            //cuando se termino la carga de la imagen
            setIsLoading(false);
            
        })
    }, [movieId])
    
    //mientras esta con la carga de la imagen aparece un texto que se llama loading...
    //llamo al componente creado Spinner.jsx
    
    //siempre que se muestre el spinner
    //if (true){
    if (isLoading){
        return <Spinner />;
    }


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