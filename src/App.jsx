import { MoviesGrid } from "./components/MoviesGrid";
import styles from "./App.module.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";


export function App(){
    //llama desde este componente a otro componente MoviesGrid
    //dentro de main he quitado <MoviesGrid />
    //el link es para volver a la pagina principal si hago click en el titulo
    return (
    <Router>
    <header>
        <Link to="/">
            <h1 className={styles.title}>Peliculas</h1>
        </Link>
    </header>
     <main>
        <Switch>
            <Route exact path="/movies/:movieId">
                <MovieDetails />
            </Route>
            <Route exact path="/">
                <LandingPage />
            </Route>
          <Route path="/">404</Route>
        </Switch>
    </main>
    </Router>
    );
}