import {Link} from "react-router-dom";
//importo el nuevo modulo creado para dar estilos al modulo MovieCard
import styles from "./MovieCard.module.css";
import { getMovieImg } from "../utils/getMovieImg"

export function MoviesCard({movie}){
    //console.log(styles);
    const imageUrl = getMovieImg(movie.poster_path, 300);
    return (
      <li className={styles.movieCard}>
        <Link to={"/movies/" + movie.id}>
          <img
            width={230}
            height={345}
            className={styles.movieImage}
            src={imageUrl}
            alt={movie.title}
          />
          <div>{movie.title}</div>
        </Link>
      </li>
    );
}