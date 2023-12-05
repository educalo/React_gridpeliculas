import { MoviesCard } from "./MovieCard";
import movies from "./movies.json"

export function MoviesGrid(){
    //tenemos un array con todos los datos del json, que lo tenemos a través de objetos.
    //ahora a traves del map voy a transformar cada objeto en <li>
    //en las funciones flecha si solo tengo un return no hace falta poner la palabra reservada return ni la llave {}
    //es recomendable poner una key en los li para obtimizarlo
    console.log(movies);
    return (
        <ul>
            {movies.map((movie) =>  (
                <MoviesCard key={movie.id} movie={movie}/>
            ))}
        </ul>
    );
}