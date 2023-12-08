import { useEffect, useState } from "react";
import { useQuery } from "../hooks/useQuery";
import { get } from "../utils/httpClient";
import { MoviesCard } from "./MovieCard";
import movies from "./movies.json"
import styles from "./MoviesGrid.module.css"
import { Spinner } from "./Spinner";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";



export function MoviesGrid(){
    
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    //en el query voy a tener acceso al valor de la ruta
    const query = useQuery();
    //para traernos el parametro de la ruta que se llama search
    const search =query.get("search");
    //para comprobar lo que añadimos dentro del input de busqueda
    console.log(search);

    //hook que se ejecuta despues del codigo de return como llamada asincrona
    //se ejecutara cada vez que cambie el parametro [search]
    //search ? si tenemos search hara los siguiente sino : se va al get
    useEffect(() => {
        setIsLoading(true);
        const searchUrl = search
          ? "/search/movie?query=" + search
          : "/discover/movie";
        get(searchUrl).then((data) => {
          setMovies(data.results);
          setIsLoading(false);
        });
      }, [search]);
    
    if (isLoading){
        return <Spinner />
    }
    
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