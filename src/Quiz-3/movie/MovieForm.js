import React, {useContext} from 'react';
import {MovieContext} from './MovieContext'
import '../public/css/style.css'
import axios from 'axios';


const MovieForm = () => {
    const [movie, setMovie, input, setInput] = useContext(MovieContext)

    const submitForm = (event) => {
        event.preventDefault()
        let title = input.title
        let description = input.description
        let year = parseInt(input.year)
        let duration = parseInt(input.duration)
        let genre = input.genre
        let rating = parseInt(input.rating)
        let image_url = input.image_url

        if (input.id === null){
            axios.post(`http://backendexample.sanbercloud.com/api/movies`,{title, description, year, duration, genre, rating, image_url})
            .then( res => {
                setMovie([...movie,{id : res.data.id, title, description, year, duration, genre, rating, image_url }])
             
            })
        }else{
            axios.put(`http://backendexample.sanbercloud.com/api/movies/${input.id}`,{title, description, year, duration, genre, rating, image_url})
            .then( res => {
                let newMovie = movie.find(x => x.id === input.id)
                newMovie.title = title
                newMovie.description = description
                newMovie.year = year
                newMovie.duration = duration
                newMovie.genre = genre
                newMovie.rating = rating
                newMovie.image_url = image_url

                setMovie([...movie])
                
            })
        }

        setInput({id: null,  title: "",
                description:"",
                year: 2020,
                duration: 120,
                genre: "",
                rating: 0,
                image_url: "" })
    }
    
    const handleChange = (event) => {
        let typeOfInput = event.target.name

        switch (typeOfInput){
            case "title":
                {
                    setInput({...input, title: event.target.value})
                    break
                }
            case "description":
                {
                    setInput({...input, description: event.target.value})
                    break
                }
            case "year":
                {
                    setInput({...input, year: event.target.value})
                    break
                }
            case "duration":
                {
                    setInput({...input, duration: event.target.value})
                    break
                }
            case "genre":
                {
                    setInput({...input, genre: event.target.value})
                    break
                }
            case "rating":
                {
                    setInput({...input, rating: event.target.value})
                    break
                }
            case "image":
                {
                    setInput({...input, image_url: event.target.value})
                    break
                }
            
            default:
                {break}
        }

    }

    return(

        <div className="form-film">
        <h1>Movie Form</h1>
        <form onSubmit={submitForm} style={{textAlign: 'left', margin: '0 auto'}}>
                <strong className="label-form">Title :</strong>
                <input className="input-form" required type="text" name="title" value={input.title} onChange={handleChange} /><br/>

                <strong className="label-form">Description :</strong>
                <textarea className="input-form" value={input.description} name="description" onChange={handleChange} rows="4" cols="25" /><br/>

                <strong className="label-form">Year :</strong>
                <input className="input-form" required type="number" name="year" value={input.year} onChange={handleChange} min="1980"/><br/>

                <strong className="label-form">Duration :</strong>
                <input className="input-form" required type="number" name="duration" value={input.duration} onChange={handleChange}/><br/>

                <strong className="label-form">Genre :</strong>
                <input className="input-form" required type="text" name="genre" value={input.genre} onChange={handleChange} /><br/>

                <strong className="label-form">Rating :</strong>
                <input className="input-form" required type="number" name="rating" value={input.rating} onChange={handleChange} min="0" max="10"/><br/>

                <strong className="label-form">Image Url :</strong>
                <textarea className="input-form" required type="text" name="image" value={input.image_url} onChange={handleChange} rows="4" cols="25"/><br/>
                
                <button id="submit">Submit</button>
        </form>
    </div>


    )
}

export default MovieForm

