import { FaStar } from "react-icons/fa"
import { Link } from "react-router-dom"

import '../pages/MoviesGrid.css'

const imgUrl = import.meta.env.VITE_IMG

function MovieCard({movie,showLink = true}){
    return(
        <div className="movieCard">

            <Link id="homeCards" to={`/movie/${movie.id}`}>
                <img src={imgUrl + movie.poster_path} alt={movie.title} />
            </Link>
            
            <h2>{movie.title}</h2>

            <p>
                <FaStar/> {movie.vote_average}
            </p>

            {showLink && <Link className="btn" to={`/movie/${movie.id}`}>DETAILS</Link>}
            
        </div>
    )
}

export default MovieCard