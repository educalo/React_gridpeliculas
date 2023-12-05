import { MoviesGrid } from "./MoviesGrid";

export function App(){
    //llama desde este componente a otro componente MoviesGrid
    return <div>
    <header>
        <h1>Peliculas</h1>
    </header>
    <main>
        <MoviesGrid />
    </main>
    </div>
}