
import "../css/MovieCard.css"

import { useMovieContext } from "../contexts/MovieContext"

function MovieCard({movie}) {

    const {isFavourite, AddToFavourites, removeFromFavourites} = useMovieContext()

    const favourite = isFavourite(movie.id)

    function onButtonClick(e){
        e.preventDefault() 
        if (favourite) removeFromFavourites(movie.id)
        else AddToFavourites(movie)
    }

    return (
        <div className="movie-card">

            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />

            <div className="movie-poster">

             
                <button 
                    className = {`favourite-btn ${favourite ? "active" : ""}`} 
                    onClick = {onButtonClick}
                >
                    ❤︎
                    
                </button>
                
            </div>

         
   
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>
          
        </div>
    )
}



export default MovieCard