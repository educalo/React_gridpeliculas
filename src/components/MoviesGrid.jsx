import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { MoviesCard } from "./MovieCard";
import movies from "./movies.json"
import styles from "./MoviesGrid.module.css"

export function MoviesGrid(){
    
    const [movies, setMovies] = useState([]);
    //hook que se ejecuta despues del codigo de return como llamada asincrona
    useEffect(() => {
        //nos va a traer un listado de peliculas
        get("/discover/movie").then((data) => {
          setMovies(data.results);
        });
    }, []);
    
    
    //tenemos un array con todos los datos del json, que lo tenemos a través de objetos.
    //ahora a traves del map voy a transformar cada objeto en <li>
    //en las funciones flecha si solo tengo un return no hace falta poner la palabra reservada return ni la llave {}
    //es recomendable poner una key en los li para obtimizarlo
    console.log(movies);
    return (
        <ul className={styles.moviesGrid}>
            {movies.map((movie) =>  (
                <MoviesCard key={movie.id} movie={movie}/>
            ))}
        </ul>
    );
}