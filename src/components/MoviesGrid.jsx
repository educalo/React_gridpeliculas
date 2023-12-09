import { useEffect, useState } from "react";
import { useQuery } from "../hooks/useQuery";
import { get } from "../utils/httpClient";
import { MoviesCard } from "./MovieCard";
import movies from "./movies.json"
import styles from "./MoviesGrid.module.css"
import { Spinner } from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { Empty } from "./Empty";


//debemos de resetear cada vez que se hace una busqueda, para ello añado un atributo al componente moviesGrid y cada vez que cambie ese atributo se resetea el estado
export function MoviesGrid({ search }) {
    
    //estados
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    //estado con la pagina numero 1
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    //esta parte de codigo la he pasado a LandingPage.jsx
    //en el query voy a tener acceso al valor de la ruta URL de la busqueda
    //const query = useQuery();
    //para traernos el parametro de la ruta que se llama search
    //const search =query.get("search");
    //para comprobar lo que añadimos dentro del input de busqueda
    //console.log(search);

    //hook que se ejecuta despues del codigo de return como llamada asincrona
    //se ejecutara cada vez que cambie el parametro [search]
    //search ? si tenemos search hara los siguiente sino : se va al get
    ///discover/movie nos va a traer peliculas que estan en tendencia sin mas
    ///search/movie?query + query nos va a traer peliculas que estamos buscando
    //si cambia la pagina quiero que se vuelva a ejecutar el efecto
    //setMovies(prevMovies => prevMovies.concat(data.results)); concateno el resultado que ya tengo con el nuevo resultado
    //setHasMore(data.page < data.total_pages); para que se pare cuando no haya mas peliculas a mostrar
    useEffect(() => {
      setIsLoading(true);
      const searchUrl = search
        ? "/search/movie?query=" + search + "&page=" + page
        : "/discover/movie?page=" + page;
      get(searchUrl).then((data) => {
        setMovies((prevMovies) => prevMovies.concat(data.results));
        setHasMore(data.page < data.total_pages);
        setIsLoading(false);
      });
    }, [search, page]);
  
    if (!isLoading && movies.length === 0) {
      return <Empty />;
    }
    
    //Ya no hace falta porque lo meto directamente en el componente InfiniteScroll
    /*
    if (isLoading){
        return <Spinner />
    }
    */
    
    //tenemos un array con todos los datos del json, que lo tenemos a través de objetos.
    //ahora a traves del map voy a transformar cada objeto en <li>
    //en las funciones flecha si solo tengo un return no hace falta poner la palabra reservada return ni la llave {}
    //es recomendable poner una key en los li para obtimizarlo
    console.log(movies);
    return (
      <InfiniteScroll
      dataLength={movies.length}
      hasMore={hasMore}
      next={() => setPage((prevPage) => prevPage + 1)}
      loader={<Spinner />}
    >
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MoviesCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
    );
}