import React from "react"
import '../public/css/style.css'
import {MovieProvider} from "./MovieContext"
import MoviehForm from "./MovieForm"
import MovieList from "./MovieList"

const Movie = () => {
    return(
        <section>
        <MovieProvider>
           
                <MovieList/>
                <MoviehForm/>
           
        </MovieProvider>
        </section>
    )
}

export default Movie