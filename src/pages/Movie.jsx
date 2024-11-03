import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import '../components/MovieCard'

import './Movie.css'

import{
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill,
    BsCalendar2Minus,
    BsFillTagsFill
} from 'react-icons/bs'
import MovieCard from "../components/MovieCard"

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

function Movie(){
    const {id} = useParams()
    const [movie,setMovie] = useState(null)

    const getMovie = async (url)=>{
        const res = await fetch(url)
        const data = await res.json()

        setMovie(data)
        
    }

    useEffect(()=>{
        const movieURL = `${moviesURL}${id}?${apiKey}`
        getMovie(movieURL)
    },[])

    const formatCurrency = (number) =>{
        return number.toLocaleString('en-US',{
            style: 'currency',
            currency: 'USD'
        })
    }

    return(
        <div className="moviePage">
            {movie && <>
                <MovieCard movie={movie}showLink={false}/>
                
                <p className="tagline">{movie.tagline}</p>
                <hr />

                <div className="info">
                    <h3>
                        <BsCalendar2Minus/> Release Date:
                    </h3>
                    <p>{movie.release_date}</p>
                </div>

                <div className="info">
                    <h3>
                        <BsFillTagsFill/> Genres:
                    </h3>
                    <p>{movie.genres.map((genre)=>genre.name).join(', ')}</p>
                </div>

                <div className="info">
                    <h3>
                        <BsWallet2/> Budget:
                    </h3>
                    <p>{formatCurrency(movie.budget)}</p>
                </div>

                <div className="info">
                    <h3>
                        <BsGraphUp/> Revenue:
                    </h3>
                    <p>{formatCurrency(movie.revenue)}</p>
                </div>

                <div className="info">
                    <h3>
                        <BsHourglassSplit/> Runtime:
                    </h3>
                    <p>{movie.runtime} minutes</p>
                </div>

                <div className="info description">
                    <h3>
                        <BsFillFileEarmarkTextFill/> Description:
                    </h3>
                    <p>{movie.overview}</p>
                </div>
                {console.log(movie)}
            </> }
        </div>
    )
}

export default Movie