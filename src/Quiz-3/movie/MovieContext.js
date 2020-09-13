import React, {useState, createContext} from "react"


export const MovieContext = createContext()

export const MovieProvider = props => {

    const [movie, setMovie] = useState(null)
    const [input, setInput] = useState({
            id: null,
            title: "",
            description:"",
            year: 2020,
            duration: 120,
            genre: "",
            rating: 0,
            image_url: ""

        })

return(
    <MovieContext.Provider value={[movie, setMovie, input, setInput]}>
        {props.children}
    </MovieContext.Provider>
     )
}