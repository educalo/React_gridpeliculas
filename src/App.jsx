import { MoviesGrid } from "./MoviesGrid";
import styles from "./App.module.css";

export function App(){
    //llama desde este componente a otro componente MoviesGrid
    return <div>
    <header>
        <h1 className={styles.title}>Peliculas</h1>
    </header>
    <main>
        <MoviesGrid />
    </main>
    </div>
}