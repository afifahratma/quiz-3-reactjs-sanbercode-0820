import React, {useState, useContext, useEffect} from 'react';
import axios from 'axios';
import '../public/css/style.css'
import {MovieContext} from './MovieContext'


const MovieList = () =>{
    const [movie, setMovie, input, setInput] = useContext(MovieContext)
    
    useEffect(() => {
        if (movie === null){
            axios.get(`http://backendexample.sanbercloud.com/api/movies`)
            .then(res => {
                setMovie(res.data.map(el => {
                    return{
                        id: el.id,
                        title: el.title,
                        description: el.description,
                        year: el.year,
                        duration: el.duration,
                        genre: el.genre,
                        rating: el.rating,
                        image_url: el.image_url
                    }
                }))
            })
        }
    }, [setMovie, movie])

  /*   useEffect(() =>{
        setFilteredMovie(
            movie.filter(el=>{
            el.title.toLowerCase().includes(search.toLowerCase())
        }))
    }, [search, movie]) 
    if (loading) {
        return <h4>Loading. . .</h4>
    }
     */
   
    const editForm = (event) => {
        let idMovie = parseInt(event.target.value)
        let dataMovie = movie.find(x=> x.id === idMovie)
        setInput({
            id: idMovie,
            title: dataMovie.title,
            description: dataMovie.description,
            year: dataMovie.year,
            duration: dataMovie.duration,
            genre: dataMovie.genre,
            rating: dataMovie.rating,
            image_url: dataMovie.image_url
            })

    }
    
    const deleteForm = (event) => {
        let idMovie = parseInt(event.target.value)
        let dataMovie = movie.filter(x=> x.id !== idMovie)

        axios.delete(`http://backendexample.sanbercloud.com/api/movies/${idMovie}`)
        .then(res => {
            setMovie([...dataMovie])
        })
    }

   /*  const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    const resetSearch = () => {
        setSearch("")
    }

    const searchMovie = (event) => {
        event.preventDefault()
        setSearch(search)
        resetSearch()
    } */
    return(
            <div>
            
            <h1 style={{textAlign: 'center'}}>Daftar Film</h1>

                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Year</th>
                            <th>Duration</th>
                            <th>Genre</th>
                            <th>Rating</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            movie !== null && movie.map((el, index) =>{
                                return(
                                    <tr key={el.id}>
                                        <td>{index+1}</td>
                                        <td>{el.title}</td>
                                        <td style={{textAlign:'justify'}}>{el.description}</td>
                                        <td>{el.year}</td>
                                        <td>{el.duration} menit</td>
                                        <td>{el.genre}</td>
                                        <td>{el.rating}</td>
                                        <td>
                                            <button value={el.id} onClick={editForm}> Edit </button>
                                            <button value={el.id} onClick={deleteForm}> Delete </button>
                                        </td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
                        )
                    
                    }

export default MovieList