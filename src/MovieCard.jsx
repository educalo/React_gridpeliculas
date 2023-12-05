export function MoviesCard({movie}){
    const imageUrl ="https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return ( 
        <li>
        <img src={imageUrl} alt={movie.title} />
        <div>{movie.title}</div>
        </li>
    )
}